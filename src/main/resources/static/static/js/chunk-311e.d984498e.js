(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-311e"],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2WLf":function(t,e,n){var o=n("fNR9");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("08e71456",o,!0,{})},"7Qib":function(t,e,n){"use strict";n.d(e,"g",function(){return d}),n.d(e,"e",function(){return f}),n.d(e,"f",function(){return p}),n.d(e,"d",function(){return h}),n.d(e,"a",function(){return v}),n.d(e,"b",function(){return b}),n.d(e,"c",function(){return g});n("jWXv"),n("rfXi"),n("gDS+"),n("P2sY");var o=n("GQeE"),i=n.n(o),r=n("YDBu"),a=n.n(r),s=n("/f1G"),l=n.n(s),c=n("EJiy"),u=n.n(c);function d(t,e){if(0===arguments.length)return null;var n=e||"{y}-{m}-{d} {h}:{i}:{s}",o=void 0;"object"===(void 0===t?"undefined":u()(t))?o=t:("string"==typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"==typeof t&&10===t.toString().length&&(t*=1e3),o=new Date(t));var i={y:o.getFullYear(),m:o.getMonth()+1,d:o.getDate(),h:o.getHours(),i:o.getMinutes(),s:o.getSeconds(),a:o.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var n=i[e];return"a"===e?[][n]:(t.length>0&&n<10&&(n="0"+n),n||0)})}function f(t){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&(t/=1e3);var e=Math.floor(t/3600),n=Math.floor(t/60%60),o=Math.floor(t%60),i=function(t){return t<1?"00":t<10?"0"+t:t.toString()};return(e=i(e))+":"+(n=i(n))+":"+(o=i(o))}function p(t,e,n){var o=this,i=(arguments.length>3&&void 0!==arguments[3]&&arguments[3],window.location.origin.replace(/http|https/g,"ws")),r=new WebSocket(i+t);return r.onopen=e,r.onmessage=n,r.onerror=function(){try{o.initWebSocket(t,e,n,null)}catch(t){console.log("websoket error:",t)}},r.onclose=function(){},r}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;"number"!=typeof t&&(t=parseFloat(t)||0);var n=a()(t);return isNaN(n)?0:n===t?t:t.toFixed(e)}function v(t){if(!t&&"object"!==(void 0===t?"undefined":u()(t)))throw new Error("error arguments","deepClone");var e=t.constructor===Array?[]:{};return i()(t).forEach(function(n){t[n]&&"object"===u()(t[n])?e[n]=v(t[n]):e[n]=t[n]}),e}function b(t){var e=[];return t.forEach(function(t){e.push(t)}),e}function g(t){var e=t.header,o=t.data,i=t.filename,r=void 0===i?"text-export":i,a=t.autoWidth,s=void 0===a||a,c=t.bookType,u=void 0===c?"xlsx":c,d=[],f=[];e.forEach(function(t){d.push(t.prop)}),o.forEach(function(t,e){f.push(l()(t))}),Promise.all([n.e("chunk-8233"),n.e("chunk-ee39")]).then(n.bind(null,"whM/")).then(function(t){t.export_json_to_excel({header:d,data:f,filename:r,autoWidth:s,bookType:u})})}},"8iia":function(t,e,n){var o=n("QMMT"),i=n("RRc/");t.exports=function(t){return function(){if(o(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},B9jh:function(t,e,n){"use strict";var o=n("Wu5q"),i=n("n3ko");t.exports=n("raTm")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return o.def(i(this,"Set"),t=0===t?0:t,t)}},o)},C2SN:function(t,e,n){var o=n("93I4"),i=n("kAMH"),r=n("UWiX")("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),o(e)&&null===(e=e[r])&&(e=void 0)),void 0===e?Array:e}},FyfS:function(t,e,n){t.exports={default:n("Rp86"),__esModule:!0}},IP1Z:function(t,e,n){"use strict";var o=n("2faE"),i=n("rr1i");t.exports=function(t,e,n){e in t?o.f(t,e,i(0,n)):t[e]=n}},"JY/k":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".history-container {\n  height: 100%;\n}\n.history-container .history-title {\n    height: 24px;\n    padding: 0px 12px;\n    margin-bottom: 12px;\n    background-color: #EBEDF0;\n    font-size: 12px;\n    color: #3145A6;\n}\n.history-container .tool-bar {\n    margin-bottom: 12px;\n}\n.history-container .tool-bar .tool-item {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 24px;\n}\n.history-container .tool-bar .tool-item .title {\n        white-space: nowrap;\n        margin-right: 10px;\n        color: #7f7d8e;\n        font-weight: bold;\n}\n.history-container .tool-bar .tool-item .el-select__tags {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n        overflow: hidden;\n}\n.history-container .table-wrapper {\n    border-radius: 4px;\n    height: calc(100% - 72px);\n}\n.history-container .table-wrapper .notes-showing {\n      display: block;\n      max-width: 60%;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      padding-right: 5px;\n}\n.history-container .table-wrapper .notes-editor {\n      width: 120px;\n}\n.history-container .table-wrapper .between-line {\n      background-color: #FAFBFC;\n}\n.history-container .t-header {\n    height: 67px;\n    color: #4159D1;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: left;\n}\n.history-container .t-row {\n    height: 48px;\n    font-size: 14px;\n    color: #7f7d8e;\n}\n.history-container .el-table th {\n    padding: 0;\n}\n.history-container .el-table td {\n    border-bottom: 0px;\n}\n.history-container .el-table .cell {\n    padding-left: 24px;\n}\n.history-container .el-input input {\n    width: 120px;\n    height: 24px;\n    border-radius: 2px;\n    border: 2px solid #EBEDF0;\n}\n.history-container .el-input input .el-input__icon {\n      line-height: 24px;\n}\n.history-container .el-select__tags {\n    border-radius: 2px;\n    height: 16px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n}\n.history-container .el-select__tags .el-tag {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border-radius: 2px;\n      height: 16px;\n      margin-right: 2px;\n}\n.history-container .el-select__tags .el-tag .el-select__tags-text {\n        line-height: 16px;\n}\n.history-container .el-select__tags .el-tag .el-tag__close {\n        line-height: 16px;\n        margin-top: 0px;\n}\n.history-container .el-select__caret {\n    line-height: 24px;\n}\n.history-container .el-table .history-stripe {\n    background: #ededfa;\n}\n.history-container .el-button {\n    padding: 4px 16px;\n}\n.history-container .progress-wrapper .progress-bg {\n    width: 50%;\n    height: 5px;\n    border-radius: 5px;\n    background: #e8e8ef;\n    overflow: hidden;\n}\n.history-container .progress-wrapper .progress-bg .progress-block {\n      height: 100%;\n      background: #494ece;\n}\n.history-container .progress-wrapper .progress-text {\n    margin-left: 7px;\n    color: #494ece;\n    font-size: 16px;\n}\n",""])},LtUd:function(t,e,n){"use strict";var o=n("p9D2");n.n(o).a},Ntdr:function(t,e,n){"use strict";var o={name:"BreadcrumbExt",props:{breads:{type:Array,default:function(){return[]}},needHome:{type:Boolean,default:!0},needBreak:{type:Boolean,default:!0}},data:function(){return{usableBread:[],defaultBreak:{type:"break",val:"el-icon-arrow-right"},defaultHome:{type:"icon",val:"el-icon-s-home",click:this.$_defaultHomeLinkEvent}}},watch:{breads:{handler:function(){this.$_init()},deep:!0},needHome:function(){this.$_init()},needBreak:function(){this.$_init()}},beforeMount:function(){this.$_init()},methods:{$_init:function(){var t=[];this.needHome&&t.push(this.defaultHome),this.needBreak&&t.push(this.defaultBreak);for(var e=0;e<this.breads.length;e++)t.push(this.breads[e]),this.breads[e+1]&&this.needBreak&&t.push(this.defaultBreak);this.usableBread=t},$_defaultHomeLinkEvent:function(){this.$router.push({path:"/"})},formatClick:function(t){"function"==typeof t&&t()}}},i=(n("LtUd"),n("KHd+")),r=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row flex-center bread-crumb-container"},t._l(t.usableBread,function(e,o){return n("span",{key:o,class:{"bread-link":"break"!==e.type,"bread-break":"break"===e.type}},["icon"===e.type?n("i",{class:e.val,on:{click:function(n){t.formatClick(e.click)}}}):"break"===e.type?n("i",{class:e.val}):n("span",{on:{click:function(n){t.formatClick(e.click)}}},[t._v(t._s(e.val))])])}))},[],!1,null,"582c73c7",null);r.options.__file="index.vue";e.a=r.exports},"RRc/":function(t,e,n){var o=n("oioR");t.exports=function(t,e){var n=[];return o(t,!1,n.push,n,e),n}},Rp86:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("fXsU")},RsXH:function(t,e,n){"use strict";var o=n("dGlO");n.n(o).a},"V+O7":function(t,e,n){n("aPfg")("Set")},V1uf:function(t,e,n){"use strict";var o=n("bssT");n.n(o).a},V7Et:function(t,e,n){var o=n("2GTP"),i=n("M1xp"),r=n("JB68"),a=n("tEej"),s=n("v6xn");t.exports=function(t,e){var n=1==t,l=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d,p=e||s;return function(e,s,h){for(var v,b,g=r(e),m=i(g),y=o(s,h,3),x=a(m.length),_=0,w=n?p(e,x):l?p(e,0):void 0;x>_;_++)if((f||_ in m)&&(b=y(v=m[_],_,g),t))if(n)w[_]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return _;case 2:w.push(v)}else if(u)return!1;return d?-1:c||u?u:w}}},VJsP:function(t,e,n){"use strict";var o=n("2GTP"),i=n("Y7ZC"),r=n("JB68"),a=n("sNwI"),s=n("NwJ3"),l=n("tEej"),c=n("IP1Z"),u=n("fNZA");i(i.S+i.F*!n("TuGD")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,d,f=r(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,b=void 0!==v,g=0,m=u(f);if(b&&(v=o(v,h>2?arguments[2]:void 0,2)),void 0==m||p==Array&&s(m))for(n=new p(e=l(f.length));e>g;g++)c(n,g,b?v(f[g],g):f[g]);else for(d=m.call(f),n=new p;!(i=d.next()).done;g++)c(n,g,b?a(d,v,[i.value,g],!0):i.value);return n.length=g,n}})},Wu5q:function(t,e,n){"use strict";var o=n("2faE").f,i=n("oVml"),r=n("XJU/"),a=n("2GTP"),s=n("EXMj"),l=n("oioR"),c=n("MPFp"),u=n("UO39"),d=n("TJWN"),f=n("jmDH"),p=n("6/1s").fastKey,h=n("n3ko"),v=f?"_s":"size",b=function(t,e){var n,o=p(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var u=t(function(t,o){s(t,u,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=o&&l(o,n,t[c],t)});return r(u.prototype,{clear:function(){for(var t=h(this,e),n=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete n[o.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=h(this,e),o=b(n,t);if(o){var i=o.n,r=o.p;delete n._i[o.i],o.r=!0,r&&(r.n=i),i&&(i.p=r),n._f==o&&(n._f=i),n._l==o&&(n._l=r),n[v]--}return!!o},forEach:function(t){h(this,e);for(var n,o=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!b(h(this,e),t)}}),f&&o(u.prototype,"size",{get:function(){return h(this,e)[v]}}),u},def:function(t,e,n){var o,i,r=b(t,e);return r?r.v=n:(t._l=r={i:i=p(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=r),o&&(o.n=r),t[v]++,"F"!==i&&(t._i[i]=r)),t},getEntry:b,setStrong:function(t,e,n){c(t,e,function(t,n){this._t=h(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))},n?"entries":"values",!n,!0),d(e)}}},ZU66:function(t,e,n){"use strict";var o=n("4d7F"),i=n.n(o),r={data:function(){return{shown:!1,title:"",content:""}},watch:{$route:function(){this._reject&&this.onCancel()}},methods:{confirm:function(t,e){var n=this;return this._reject&&this._reject(new Error("重复调用")),new i.a(function(o,i){n.title=t,n.content=e,n.shown=!0,n._resolve=o,n._reject=i})},onClose:function(t){this.onCancel(),t()},onCancel:function(){this._reject(!1),this.clean()},onConfirm:function(){this._resolve(),this.clean()},clean:function(){this.title="",this.content="",this.shown=!1,this._resolve=null,this._reject=null}}},a=(n("RsXH"),n("KHd+")),s=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{visible:t.shown,"before-close":t.onClose,width:"510px"},on:{"update:visible":function(e){t.shown=e}}},[n("div",{staticClass:"dialog-main-content"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"dialog-sub-content"},[t._v(t._s(t.content))]),t._v(" "),n("div",{staticClass:"flex justify-center",staticStyle:{"margin-top":"72px"}},[n("button",{staticClass:"dialog-button",on:{click:t.onConfirm}},[t._v("Sure")]),t._v(" "),n("button",{staticClass:"dialog-button",staticStyle:{"margin-left":"23px"},on:{click:t.onCancel}},[t._v("cancel")])])])},[],!1,null,"f39101e4",null);s.options.__file="Confirm.vue";e.a=s.exports},aPfg:function(t,e,n){"use strict";var o=n("Y7ZC"),i=n("eaoh"),r=n("2GTP"),a=n("oioR");t.exports=function(t){o(o.S,t,{from:function(t){var e,n,o,s,l=arguments[1];return i(this),(e=void 0!==l)&&i(l),void 0==t?new this:(n=[],e?(o=0,s=r(l,arguments[2],2),a(t,!1,function(t){n.push(s(t,o++))})):a(t,!1,n.push,n),new this(n))}})}},bssT:function(t,e,n){var o=n("JY/k");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("716dd3c2",o,!0,{})},cHUd:function(t,e,n){"use strict";var o=n("Y7ZC");t.exports=function(t){o(o.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},dGlO:function(t,e,n){var o=n("mgHt");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("ec881ed8",o,!0,{})},dL40:function(t,e,n){var o=n("Y7ZC");o(o.P+o.R,"Set",{toJSON:n("8iia")("Set")})},dv4G:function(t,e,n){"use strict";n.d(e,"g",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"f",function(){return a}),n.d(e,"i",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"d",function(){return c}),n.d(e,"h",function(){return u}),n.d(e,"a",function(){return d}),n.d(e,"c",function(){return f});var o=n("t3Un");function i(t){return Object(o.a)({url:"/job/query/page/new",method:"post",data:t})}function r(t){return Object(o.a)({url:"/job/query/status",method:"get",params:t})}function a(t){return Object(o.a)({url:"/job/v1/pipeline/job/stop",method:"post",data:t})}function s(t){return Object(o.a)({url:"/job/restart",method:"post",data:t})}function l(t){var e=t.job_id,n=t.role,i=t.party_id;return Object(o.a)({url:"/job/query/"+e+"/"+n+"/"+i,method:"get"})}function c(t){return Object(o.a)({url:"/v1/tracking/component/parameters",method:"post",data:t})}function u(t){var e=t.componentId,n=t.job_id,i=t.role,r=t.party_id,a=t.begin,s=t.end,l=t.type;return Object(o.a)({url:"/queryLogWithSize/"+n+"/"+i+"/"+r+"/"+e+"/"+l+"/"+a+"/"+s,method:"get"})}function d(t){return Object(o.a)({url:"/job/update",method:"put",data:t})}function f(t){return Object(o.a)({url:"/job/componentCommand",method:"post",data:t})}},fNR9:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},fXsU:function(t,e,n){var o=n("5K7Z"),i=n("fNZA");t.exports=n("WEpk").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return o(e.call(t))}},"gDS+":function(t,e,n){t.exports={default:n("oh+g"),__esModule:!0}},jWXv:function(t,e,n){t.exports={default:n("+iuc"),__esModule:!0}},"k/PY":function(t,e,n){"use strict";n.r(e);var o=n("FyfS"),i=n.n(o),r=n("P2sY"),a=n.n(r),s=n("QbLZ"),l=n.n(s),c=n("YDBu"),u=n.n(c),d=n("Mz3J"),f=n("7Qib"),p=n("L2JU"),h=n("dv4G"),v=n("tH+O"),b=n("Ntdr"),g=n("ZU66"),m={name:"Job",components:{Pagination:d.a,IconHoverAndActive:v.default,BreadcrumbExt:b.a,Confirm:g.a},filters:{},data:function(){return{list:null,condition:{role:"",status:"",job_id:"",party_id:"",note:""},currentRow:1,saveCondition:{},tHead:[{key:"jobId",label:"ID",width:250},{key:"role",label:"Role",width:100},{key:"partyId",label:"Party ID",width:100},{key:"start_time",label:"Start Time",width:200,sortable:!0},{key:"end_time",label:"End Time",width:200,sortable:!0},{key:"duration",label:"Duration",width:120},{key:"status",label:"Status",width:100},{key:"notes",label:"Notes",minWidth:200},{key:"progress",hidden:!0},{key:"action",label:"action",width:100}],startTimeSort:"desc",endTimeSort:"",listLoading:!1,pageSize:20,total:0,page:this.$route.params.page&&u()(this.$route.params.page)||1,dialogVisible:!1,formLoading:!1,form:{experiment:"",type:"",desc:""},formRules:{experiment:[{required:!0,message:"Please enter your name",trigger:"blur"}],type:[{required:!0,message:"Please enter your name",trigger:"blur"}],desc:[{required:!0,message:"Please enter a description",trigger:"blur"}]},roleOptions:[{value:"guest",label:"guest"},{value:"host",label:"host"},{value:"arbiter",label:"arbiter"}],statusOptions:[{value:"success",label:"success"},{value:"running",label:"running"},{value:"waiting",label:"waiting"},{value:"failed",label:"failed"},{value:"canceled",label:"canceled"}],editorText:"",editorScope:"",willopenScope:""}},computed:l()({},Object(p.c)(["lastJob","icons"])),beforeMount:function(){var t=this.$route.params,e=t.search_job_id,n=t.search_party_id,o=t.search_role,i=t.search_status,r=t.search_note;e&&(this.condition.job_id=e),n&&(this.condition.party_id=n),o&&o.length>0&&(this.condition.role=o.split(",")),i&&i.length>0&&(this.condition.status=i.split(",")),r&&(this.condition.note=r),this.saveCondition=Object(f.a)(this.condition)},mounted:function(){this.queryList()},methods:{handlePageChange:function(t){var e=t.page;this.page=e,this.queryList()},changeSort:function(t){"start_time"===t?("desc"!==this.startTimeSort?this.startTimeSort="desc":this.startTimeSort="asc",this.endTimeSort=""):"end_time"===t&&("desc"!==this.endTimeSort?this.endTimeSort="desc":this.endTimeSort="asc",this.startTimeSort=""),this.queryList()},queryList:function(){var t=this,e=a()(this.condition,{jobId:this.condition.job_id,partyId:this.condition.party_id,fDescription:this.condition.note}),n={};this.startTimeSort&&(n.orderRule=this.startTimeSort,n.orderField="f_start_time"),this.endTimeSort&&(n.orderRule=this.endTimeSort,n.orderField="f_end_time");var o=a()({pageNum:this.page,pageSize:this.pageSize},e,n);this.listLoading=!0,Object(h.g)(o).then(function(e){t.saveCondition=Object(f.a)(t.condition),t.listLoading=!1;var n=[];t.total=e.data.totalRecord,e.data.list.forEach(function(t){var e="",o="",i="",r="",a="",s="",l="",c="",u="",d=t.job;d&&(e=d.fJobId||"",o=d.fRole||"",i=d.fPartyId||"",r=d.fStartTime?Object(f.g)(new Date(d.fStartTime)):"",a=d.fEndTime?Object(f.g)(d.fEndTime):"",s=d.fElapsed?Object(f.e)(d.fElapsed):"",l=d.fStatus||"",c="running"===d.fStatus?d.fProgress||0:null,u=d.fDescription||""),n.push({jobId:e,role:o,partyId:i,start_time:r,end_time:a,duration:s,status:l,progress:c,notes:u,notesEdit:!1})}),t.list=n}).catch(function(e){t.listLoading=!1})},search:function(){this.page=1,this.queryList()},toDetailes:function(t,e,n){this.$store.dispatch("changeLastJob",{job_id:t,role:e,party_id:n});var o={job_id:t,role:e,party_id:n,from:"Job overview",page:this.page},i=this.saveCondition,r=i.job_id,a=i.party_id,s=i.role,l=i.status;r&&(o.search_job_id=r),a&&(o.search_party_id=a),s&&s.length>0&&(o.search_role=s.toString()),l&&l.length>0&&(o.search_status=l.toString());var c=this.$router.resolve({path:"/details",query:o});window.open(c.href,"_blank")},toHome:function(){this.$router.push({path:"/"})},tableRowClassName:function(t){var e=t.row,n="t-row";return t.rowIndex%2==0&&(n+=" between-line"),this.lastJob&&e.jobId===this.lastJob.job_id&&e.role===this.lastJob.role&&e.partyId===this.lastJob.party_id&&(n+=" history-stripe"),n},setCurrentRow:function(t){t&&this.$store.dispatch("changeLastJob",{job_id:t.jobId,role:t.role,party_id:t.partyId})},editorNoteForJob:function(t){var e=this,n=!0,o=!1,r=void 0;try{for(var a,s=i()(this.list);!(n=(a=s.next()).done);n=!0){a.value.notesEdit=!1}}catch(t){o=!0,r=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw r}}this.editorScope?this.willopenScope=t:(this.editorScope=t,this.editorText=this.list[t.$index].notes,this.list[t.$index].notesEdit=!0,this.$nextTick(function(){e.$refs[t.column.id+"_"+t.$index][0].focus()}))},uploadEditor:function(t){var e=this,n=this.editorScope;if(this.editorScope&&this.editorText!==e.list[n.$index].notes){var o={job_id:n.row.jobId,role:n.row.role,party_id:n.row.partyId,notes:this.editorText};Object(h.a)(o).then(function(t){e.list[n.$index].notes=e.editorText,e.list[n.$index].notesEdit=!1,e.editorText="",e.editorScope=null,e.willopenScope&&(e.editorNoteForJob(e.willopenScope),e.willopenScope="")})}else if(e.willopenScope)e.editorText="",e.editorScope=null,e.editorNoteForJob(e.willopenScope),e.willopenScope="";else{if(!n)return;e.list[n.$index].notesEdit=!1,e.editorText="",e.editorScope=null}},closeEditor:function(t){this.list[t.$index].notesEdit=!1,this.editorText="",this.editorScope=null},willshowingToolTip:function(t){t.$index;var e=t.row,n=t.column,o=n.realWidth-20;return 16*e[n.property].length<Math.floor(.6*o-5)},stopToTop:function(t){t.stopPropagation()},onRetry:function(t){var e,n=t.status;if("success"!==n){var o="failed"===n||"canceled"===n,i="running"===n||"waiting"===n,r=o?h.i:i?h.f:function(){},a=o?["The job will continue from where it "+n,""]:i?["Are you sure you want to "+("running"===n?"kill":"cancel")+" this job?","You can't undo this action"]:["",""];(e=this.$refs.confirm).confirm.apply(e,a).then(function(){r({job_id:t.job_id,role:t.role,party_id:t.party_id})})}}}},y=(n("V1uf"),n("KHd+")),x=Object(y.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container flex flex-col history-container bg-dark",on:{click:function(e){t.uploadEditor(e)}}},[n("breadcrumb-ext",{attrs:{breads:[{type:"content",val:"Job Overview"}]}}),t._v(" "),n("div",{staticClass:"tool-bar flex flex-center flex-end"},[n("div",{staticClass:"tool-item"},[n("div",{staticClass:"tool-item"},[n("span",{staticClass:"title"},[t._v("Job ID:")]),t._v(" "),n("el-input",{attrs:{size:"mini",clearable:""},on:{clear:t.search},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null}},model:{value:t.condition.job_id,callback:function(e){t.$set(t.condition,"job_id",e)},expression:"condition.job_id"}})],1),t._v(" "),n("div",{staticClass:"tool-item"},[n("span",{staticClass:"title"},[t._v("Party ID:")]),t._v(" "),n("el-input",{attrs:{size:"mini",clearable:""},on:{clear:t.search},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null}},model:{value:t.condition.party_id,callback:function(e){t.$set(t.condition,"party_id",e)},expression:"condition.party_id"}})],1),t._v(" "),n("span",{staticClass:"title"},[t._v("Role:")]),t._v(" "),n("el-select",{attrs:{size:"mini","collapse-tags":"",multiple:"",placeholder:""},model:{value:t.condition.role,callback:function(e){t.$set(t.condition,"role",e)},expression:"condition.role"}},t._l(t.roleOptions,function(t){return n("el-option",{key:t.value,attrs:{value:t.value,label:t.label}})}))],1),t._v(" "),n("div",{staticClass:"tool-item"},[n("span",{staticClass:"title"},[t._v("Status:")]),t._v(" "),n("el-select",{attrs:{size:"mini","collapse-tags":"",multiple:"",placeholder:""},model:{value:t.condition.status,callback:function(e){t.$set(t.condition,"status",e)},expression:"condition.status"}},t._l(t.statusOptions,function(t){return n("el-option",{key:t.value,attrs:{value:t.value,label:t.label}})}))],1),t._v(" "),n("div",{staticClass:"tool-item"},[n("span",{staticClass:"title"},[t._v("Note:")]),t._v(" "),n("el-input",{attrs:{size:"mini",clearable:""},on:{clear:t.search},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null}},model:{value:t.condition.note,callback:function(e){t.$set(t.condition,"note",e)},expression:"condition.note"}})],1),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary",round:""},on:{click:t.search}},[t._v("Search")])],1),t._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"flex flex-col space-between table-wrapper"},[n("el-table",{ref:"currentRowTable",attrs:{data:t.list,"row-class-name":t.tableRowClassName,"header-row-class-name":"t-header",fit:"","element-loading-text":"Loading","highlight-current-row":"","empty-text":"NO DATA",height:"100%"},on:{"current-change":t.setCurrentRow}},[t._l(t.tHead,function(e){return[e.hidden?t._e():n("el-table-column",{key:e.key,attrs:{prop:e.key,label:e.label,width:e.width,"min-width":e.minWidth,sortable:e.sortable,"show-overflow-tooltip":"Notes"!==e.label,border:""},scopedSlots:t._u([{key:"default",fn:function(o){return["jobId"===e.key?n("span",{staticClass:"text-primary pointer",on:{click:function(n){t.toDetailes(o.row[e.key],o.row.role,o.row.partyId)}}},[t._v(t._s(o.row[e.key]))]):"status"===e.key?n("div",[o.row.progress||0===o.row.progress?n("div",[n("div",{staticClass:"progress-wrapper flex flex-center"},[n("div",{staticClass:"progress-bg"},[n("div",{staticClass:"progress-block",style:{width:o.row.progress+"%"}})]),t._v(" "),n("span",{staticClass:"progress-text"},[t._v(t._s(o.row.progress)+"%")])])]):n("div",[t._v(t._s(o.row[e.key]))])]):"notes"===e.key?n("div",[o.row.notesEdit?o.row.notesEdit?n("div",{staticClass:"flex flex-row flex-end flex-center",on:{click:function(e){e.stopPropagation(),t.stopToTop(e)}}},[n("el-input",{ref:o.column.id+"_"+o.$index,refInFor:!0,staticClass:"notes-editor",attrs:{placeholder:"请输入"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.uploadEditor(e)}},model:{value:t.editorText,callback:function(e){t.editorText=e},expression:"editorText"}}),t._v(" "),n("i",{staticClass:"el-icon-check",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.uploadEditor(e)}}}),t._v(" "),n("i",{staticClass:"el-icon-close",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.closeEditor(o)}}})],1):t._e():n("div",{staticClass:"flex flex-row flex-end flex-center"},[n("el-tooltip",{attrs:{content:o.row[e.key],disabled:t.willshowingToolTip(o),effect:"dark",placement:"top-end"}},[n("span",{staticClass:"notes-showing"},[t._v(t._s(o.row[e.key]))])]),t._v(" "),n("icon-hover-and-active",{attrs:{"default-url":t.icons.normal.edit,"hover-url":t.icons.hover.edit,"active-url":t.icons.active.edit},on:{clickFn:function(e){t.editorNoteForJob(o)}}})],1)]):"action"===e.key?n("div",[n("el-button",{staticClass:"action-button",attrs:{type:"text"},on:{click:function(e){t.onRetry(o.row)}}},[t._v(t._s("failed"===o.row.status||"canceled"===o.row.status?"retry":"waiting"===o.row.status||"running"===o.row.status?"cancel":""))])],1):n("span",[t._v(t._s(o.row[e.key]))])]}}])})]})],2),t._v(" "),n("pagination",{attrs:{total:t.total,page:t.page,layout:"prev, pager, next",limit:t.pageSize,position:"center"},on:{"update:page":function(e){t.page=e},"update:limit":function(e){t.pageSize=e},pagination:t.handlePageChange}})],1),t._v(" "),n("confirm",{ref:"confirm"})],1)},[],!1,null,null,null);x.options.__file="index.vue";e.default=x.exports},mgHt:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,'.dialog-main-content[data-v-f39101e4] {\n  font-family: "Lato";\n  font-size: 18px;\n  color: #534c77;\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n.dialog-sub-content[data-v-f39101e4] {\n  font-family: "Lato";\n  font-size: 12px;\n  color: #bbbbc8;\n  text-align: center;\n}\n.dialog-button[data-v-f39101e4] {\n  width: 135px;\n  height: 32px;\n  border-radius: 2px;\n  border: 0px;\n  font-family: "Lato";\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  cursor: pointer;\n  outline: none;\n  color: #7f7d8e;\n  background-color: #e8e8ef;\n}\n.dialog-button[data-v-f39101e4]:hover {\n    color: #ffffff;\n    background-color: #494ece;\n}\n.dialog-button[data-v-f39101e4]:active {\n    color: #ffffff;\n    background-color: #3135a6;\n}\n',""])},n3ko:function(t,e,n){var o=n("93I4");t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},n660:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".bread-crumb-container[data-v-582c73c7] {\n  height: 24px;\n  padding: 0px 12px;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #3145A6;\n  background-color: #EBEDF0;\n}\n.bread-crumb-container .bread-break[data-v-582c73c7] {\n    padding: 12px 0px;\n}\n.bread-crumb-container .bread-link[data-v-582c73c7] {\n    cursor: pointer;\n}\n",""])},"oh+g":function(t,e,n){var o=n("WEpk"),i=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},p9D2:function(t,e,n){var o=n("n660");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("84489e1e",o,!0,{})},raTm:function(t,e,n){"use strict";var o=n("5T2Y"),i=n("Y7ZC"),r=n("6/1s"),a=n("KUxP"),s=n("NegM"),l=n("XJU/"),c=n("oioR"),u=n("EXMj"),d=n("93I4"),f=n("RfKB"),p=n("2faE").f,h=n("V7Et")(0),v=n("jmDH");t.exports=function(t,e,n,b,g,m){var y=o[t],x=y,_=g?"set":"add",w=x&&x.prototype,k={};return v&&"function"==typeof x&&(m||w.forEach&&!a(function(){(new x).entries().next()}))?(x=e(function(e,n){u(e,x,t,"_c"),e._c=new y,void 0!=n&&c(n,g,e[_],e)}),h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in w&&(!m||"clear"!=t)&&s(x.prototype,t,function(n,o){if(u(this,x,t),!e&&m&&!d(n))return"get"==t&&void 0;var i=this._c[t](0===n?0:n,o);return e?this:i})}),m||p(x.prototype,"size",{get:function(){return this._c.size}})):(x=b.getConstructor(e,t,g,_),l(x.prototype,n),r.NEED=!0),f(x,t),k[t]=x,i(i.G+i.W+i.F,k),m||b.setStrong(x,t,g),x}},rfXi:function(t,e,n){t.exports={default:n("0tVQ"),__esModule:!0}},"tH+O":function(t,e,n){"use strict";n.r(e);var o={props:{show:{type:Boolean,default:!0},className:{type:String,default:""},defaultUrl:{type:String,default:""},hoverUrl:{type:String,default:""},activeUrl:{type:String,default:""},origin:{type:String,default:"default"},hold:{type:Boolean,default:!1}},data:function(){return{status:"default",holded:"default"}},computed:{imgUrl:function(){var t="";return"default"===this.status?t=this.defaultUrl:"hover"===this.status?t=this.hoverUrl:"active"===this.status&&(t=this.activeUrl),t}},beforeMount:function(){this.inited()},methods:{inited:function(){this.status=this.origin},mouseenter:function(){this.hold&&(this.holded=this.status),this.hoverUrl&&(this.status="hover")},mouseout:function(){this.hold?this.status=this.holded:this.status="default"},mousedown:function(){this.activeUrl&&(this.holded&&(this.holded="active"),this.status="active")},mouseup:function(){"active"!==this.status||this.hold||(this.status="default")},click:function(){this.$emit("clickFn")},restart:function(){this.holded="default",this.status=this.holded},setActive:function(){this.holded="active",this.status="active"}}},i=(n("xhXJ"),n("KHd+")),r=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.className,on:{mouseenter:t.mouseenter,mouseout:t.mouseout,mousedown:t.mousedown,mouseup:t.mouseup,click:function(e){return e.stopPropagation(),t.click(e)}}},[n("img",{staticClass:"wh-100",attrs:{src:t.imgUrl,alt:""}})])},[],!1,null,"123b3c48",null);r.options.__file="index.vue";e.default=r.exports},v6xn:function(t,e,n){var o=n("C2SN");t.exports=function(t,e){return new(o(t))(e)}},xhXJ:function(t,e,n){"use strict";var o=n("2WLf");n.n(o).a},xvv9:function(t,e,n){n("cHUd")("Set")}}]);