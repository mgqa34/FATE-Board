(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0de5"],{"0VJA":function(t,e,o){"use strict";o.r(e);var n=o("QbLZ"),i=o.n(n),r=o("dv4G"),s=o("L2JU"),c=o("tH+O"),a=o("dyDN"),d={name:"Notes",components:{IconHoverAndActive:c.default,OverflowTooltip:a.a},props:{jobInfo:{type:Object,default:function(){}}},data:function(){return{editorText:"",editnotes:"",showEdit:!1}},computed:i()({},Object(s.c)(["lastJob","icons"])),created:function(){var t=this;setTimeout(function(){t.editorText=t.jobInfo.notes},50)},methods:{editorNoteForJob:function(){this.editnotes=this.editorText,this.showEdit=!0},uploadEditor:function(){var t=this,e={job_id:this.$route.query.job_id,role:this.$route.query.role,party_id:this.$route.query.party_id,notes:this.editnotes};this.editnotes!==this.editorText&&Object(r.a)(e).then(function(e){t.editorText=t.editnotes}),this.showEdit=!1}}},l=(o("T4JG"),o("KHd+")),p=Object(l.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"prop-content notes-content flex flex-col flex-start prop-content prop-dataset prop-notes"},[o("div",{staticClass:"edit-icon"},[t.showEdit?o("div",[o("i",{staticClass:"el-icon-check",staticStyle:{color:"#00820e"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.uploadEditor()}}}),t._v(" "),o("i",{staticClass:"el-icon-close",staticStyle:{color:"#e24054"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.showEdit=!1}}})]):o("div",[o("icon-hover-and-active",{attrs:{"default-url":t.icons.normal.edit,"hover-url":t.icons.hover.edit,"active-url":t.icons.active.edit},on:{clickFn:function(e){t.editorNoteForJob()}}})],1)]),t._v(" "),t.showEdit?o("el-input",{staticClass:"notes-editor",attrs:{placeholder:"please enter"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.uploadEditor()}},model:{value:t.editnotes,callback:function(e){t.editnotes=e},expression:"editnotes"}}):o("overflow-tooltip",{attrs:{content:t.editorText,width:"500px",placement:"right"}},[o("p",{staticClass:"prop-dataset-item"},[t._v(t._s(t.editorText))])])],1)},[],!1,null,null,null);p.options.__file="index.vue";e.default=p.exports},"9vmC":function(t,e,o){(t.exports=o("I1BE")(!1)).push([t.i,".refresh-container {\n  margin-right: 24px;\n}\n.prop-notes .el-input__inner {\n  border-radius: 0;\n  height: 24px;\n  line-height: 24px;\n}\n.prop-notes .edit-icon {\n  position: absolute;\n  width: 36px;\n  height: 16px;\n  right: -4px;\n  top: -3px;\n}\n.prop-notes .edit-icon .el-icon-check, .prop-notes .edit-icon .el-icon-close {\n    cursor: pointer;\n    font-size: 16px;\n}\n.prop-notes .edit-icon img {\n    margin-left: 15px;\n    width: 16px;\n}\n",""])},T4JG:function(t,e,o){"use strict";var n=o("uA0O");o.n(n).a},uA0O:function(t,e,o){var n=o("9vmC");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o("SZ7m").default)("1827a8f2",n,!0,{})}}]);