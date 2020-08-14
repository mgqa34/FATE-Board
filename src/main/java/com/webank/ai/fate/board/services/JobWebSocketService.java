package com.webank.ai.fate.board.services;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.Maps;
import com.webank.ai.fate.board.controller.JobDetailController;
import com.webank.ai.fate.board.controller.JobManagerController;
import com.webank.ai.fate.board.global.Dict;
import com.webank.ai.fate.board.global.ResponseResult;
import com.webank.ai.fate.board.pojo.JobDO;
import io.swagger.models.auth.In;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.util.concurrent.ListenableFuture;

import javax.websocket.Session;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

public class JobWebSocketService implements Runnable {
    private static final Logger logger = LoggerFactory.getLogger(JobWebSocketService.class);

    private Session session;

    private String jobId;

    private String role;

    private Integer partyId;

    private JobDetailController jobDetailController;

    private JobManagerController jobManagerController;

    private JobManagerService jobManagerService;

    private ThreadPoolTaskExecutor asyncServiceExecutor;

    private Boolean pushStatus;


    public JobWebSocketService(Session session, String jobId, String role, Integer partyId, JobDetailController jobDetailController, JobManagerController jobManagerController, JobManagerService jobManagerService, ThreadPoolTaskExecutor asyncServiceExecutor, Boolean pushStatus) {
        this.session = session;
        this.jobId = jobId;
        this.role = role;
        this.partyId = partyId;
        this.jobDetailController = jobDetailController;
        this.jobManagerController = jobManagerController;
        this.jobManagerService = jobManagerService;
        this.asyncServiceExecutor = asyncServiceExecutor;
        this.pushStatus = pushStatus;
    }

    @Override
    public void run() {

        //send job information to sessions
        try {
            while (session.isOpen()) {

                //get job information
                JobDO job = jobManagerService.queryJobByConditions(jobId, role, String.valueOf(partyId));
                if (job != null) {
                    HashMap<String, Object> flushToWebData = new HashMap<>(16);
                    //get process
                    Integer process = job.getfProgress();

                    //get duration
                    long now = System.currentTimeMillis();
                    Long startTime = job.getfStartTime();
                    Long endTime = job.getfEndTime();
                    long duration;
                    if (endTime != null) {
                        duration = endTime - startTime;

                    } else {
                        duration = now - startTime;
                    }
                    logger.info("time now:{} start:{} end:{} duration:{}", now, startTime, endTime, duration);

                    //get status
                    String status = job.getfStatus();
                    if (status.equals(Dict.TIMEOUT)) {
                        status = Dict.FAILED;
                    }

                    flushToWebData.put(Dict.JOB_PROCESS, process);
                    flushToWebData.put(Dict.JOB_DURATION, duration);
                    flushToWebData.put(Dict.JOB_STATUS, status);

                    //get dependency information
                    Map<String, Object> param = Maps.newHashMap();
                    param.put(Dict.JOBID, jobId);
                    param.put(Dict.ROLE, role);
                    param.put(Dict.PARTY_ID, partyId);
                    //Future<?> dependencyFuture = ThreadPoolTaskExecutorUtil.submitListenable(asyncServiceExecutor, () -> jobDetailController.getDagDependencies(JSON.toJSONString(param)), new int[]{500}, new int[]{3});
                    ListenableFuture<ResponseResult<JSONObject>> dependencyFuture = asyncServiceExecutor.submitListenable(() -> jobDetailController.getDagDependencies(JSON.toJSONString(param)));
                    //                    try {
                    ResponseResult<JSONObject> responseResult = dependencyFuture.get();
                    if (0 == responseResult.getCode()) {
                        flushToWebData.put(Dict.DEPENDENCY_DATA, responseResult.getData());
                    } else {
                        //                            flushToWebData.put(Dict.DEPENDENCY_DATA, null);
                        throw new IllegalArgumentException("dependency parameter error");
                    }
                    //                    } catch (Exception e) {
                    //                        logger.error("GET DEPENDENCY_DATA ERROR", e);
                    //                        flushToWebData.put(Dict.DEPENDENCY_DATA, null);
                    //                    }

                    //get job summary
                    ListenableFuture<ResponseResult<Map<String, Object>>> responseResultListenableFuture = asyncServiceExecutor.submitListenable(() -> jobManagerController.queryJobById(jobId, role, String.valueOf(partyId)));
                    //                    try {
                    ResponseResult<Map<String, Object>> mapResponseResult = responseResultListenableFuture.get();
                    if (0 == mapResponseResult.getCode()) {
                        flushToWebData.put(Dict.SUMMARY_DATA, mapResponseResult.getData());
                    } else {
                        //                            flushToWebData.put(Dict.SUMMARY_DATA, null);
                        throw new IllegalArgumentException("summary parameter error");
                    }
                    //                    } catch (Exception e) {
                    //                        logger.error("GET JOB SUMMARY ERROR", e);
                    //                        flushToWebData.put(Dict.SUMMARY_DATA, null);
                    //                    }


                    //                try {
                    if (pushStatus) {
                        JSONObject dependency = (JSONObject) flushToWebData.get(Dict.DEPENDENCY_DATA);
                        dependency.remove("component_module");
                        dependency.remove("component_need_run");
                        dependency.remove("dependencies");
                        Map<String, Object> summary = (Map<String, Object>) flushToWebData.get(Dict.SUMMARY_DATA);
                        summary.remove("dataset");
                    }

                    session.getBasicRemote().sendText(JSON.toJSONString(flushToWebData));
                    logger.warn("session:{}, data to push:{}", session, JSON.toJSONString(flushToWebData));

                    pushStatus = true;

                    //                } catch (IOException e) {
                    //                    logger.error("websocket send IOException", e);
                    //                }


                    if (Dict.JOB_FINISHED_STATUS.contains(status)) {
                        session.close();
                        break;
                    }
                    Thread.sleep(500);

                } else {
                    session.getBasicRemote().sendText("this job doesn't exist");
                    session.close();
                    logger.error("jobId {}, role {}, partyId {} to push is not exist", jobId, role, partyId);
                    break;
                }

            }
        } catch (Exception e) {
            logger.error("web socket error",e);
            try {
                session.getBasicRemote().sendText("this job socket has error");
            } catch (IOException ioException) {
                logger.error("send error message error", ioException);
            }
            try {
                session.close();
            } catch (IOException ioException) {
                logger.error("close websocket session error", ioException);
            }
        }
    }
}
