webpackJsonp([15],{"6vbc":function(t,e){},xPbZ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),a={name:"resources-view",components:{ResourceDialog:s("SHGx").a},props:{},data:function(){return{dialogVisible:!1,viewDialogVisible:!1,tableData:[],res:{},reloadLoading:!1,currentResource:""}},methods:{viewRunningStatus:function(t,e){var s=document.querySelectorAll(".el-table__expand-icon")[e];s&&s.click&&s.click()},handleReconnect:function(t,e){var s=this;this.reloadLoading=!0,this.currentResource=t.id,this.$httpPost("/resources/"+t.id).then(function(){setTimeout(function(){s.reloadLoading=!1,s.$message.success(s.$t("rule.connectSuccess"));try{t.status[e].is_alive=!0}catch(t){console.log(t)}},300)}).catch(function(){s.reloadLoading=!1})},handleDelete:function(t){var e=this;this.$confirm(this.$t("rule.confirm_stop_delete"),"Notice",{confirmButtonClass:"confirm-btn",confirmButtonText:this.$t("oper.confirm"),cancelButtonClass:"cache-btn el-button--text",cancelButtonText:this.$t("oper.cancel"),type:"warning"}).then(function(){e.$httpDelete("/resources/"+t.id).then(function(){e.$message.success(e.$t("rule.delete_success")),e.loadData()})}).catch()},viewResource:function(t){this.res=n()({},t),this.viewDialogVisible=!0},handleOperation:function(){this.dialogVisible=!0},loadData:function(){var t=this;this.$httpGet("/resources").then(function(e){var s=e.data;t.tableData=s.map(function(t){return t.status=t.status||[],t})})},handExpand:function(t){var e=this;t.status&&t.status.length>0||this.$httpGet("/resources/"+t.id).then(function(s){e.$set(t,"status",s.data.status)})}},created:function(){this.loadData()}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"resources-view"},[s("div",{staticClass:"page-title"},[t._v("\n    "+t._s(t.$t("rule.resource_title"))+"\n    "),s("el-button",{staticClass:"confirm-btn",staticStyle:{float:"right"},attrs:{round:"",plain:"",type:"success",icon:"el-icon-plus",size:"medium",disable:t.$store.state.loading},on:{click:t.handleOperation}},[t._v("\n      "+t._s(t.$t("rule.create"))+"\n    ")])],1),t._v(" "),s("el-table",{attrs:{border:"",data:t.tableData},on:{"expand-change":t.handExpand}},[s("el-table-column",{attrs:{prop:"id",type:"expand","class-name":"expand-column",width:"1px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[s("ul",{staticClass:"status-wrapper"},t._l(i.status||[],function(e,n){return s("li",{key:n,staticClass:"status-item"},[s("span",{staticClass:"key"},[t._v("\n              "+t._s(e.node)+"\n            ")]),t._v(" "),s("span",{class:[e.is_alive?"running":"stopped danger","status"]},[t._v("\n                "+t._s(e.is_alive?t.$t("rule.enabled"):t.$t("rule.disabled"))+"\n            ")]),t._v(" "),e.is_alive?t._e():s("el-button",{attrs:{loading:t.reloadLoading&&t.currentResource===i.id,plain:"",type:"success",size:"mini"},on:{click:function(e){return t.handleReconnect(i,n)}}},[t._v("\n              "+t._s(t.$t("rule.reconnect"))+"\n            ")])],1)}),0)]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"id",label:t.$t("rule.id")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[s("span",{on:{click:function(e){return t.viewResource(i)}}},[t._v("\n          "+t._s(i.id)+"\n        ")])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"description",label:t.$t("rule.resource_name")}}),t._v(" "),s("el-table-column",{attrs:{prop:"type",label:t.$t("rule.resource_type")}}),t._v(" "),s("el-table-column",{attrs:{label:t.$t("rule.oper")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row,n=e.$index;return[s("el-button",{attrs:{plain:"",type:"success",size:"mini"},on:{click:function(e){return t.viewResource(i)}}},[t._v("\n          "+t._s(t.$t("rule.view"))+"\n        ")]),t._v(" "),s("el-button",{attrs:{plain:"",size:"mini",type:"warning"},on:{click:function(e){return t.handleDelete(i)}}},[t._v("\n          "+t._s(t.$t("rule.delete"))+"\n        ")]),t._v(" "),s("el-button",{attrs:{plain:"",type:"success",size:"mini"},on:{click:function(e){return t.viewRunningStatus(i,n)}}},[t._v("\n          "+t._s(t.$t("rule.viewStates"))+"\n        ")])]}}])})],1),t._v(" "),s("resource-dialog",{ref:"resourceDialog",attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e},confirm:t.loadData}}),t._v(" "),s("el-dialog",{attrs:{title:t.$t("rule.resource_details"),visible:t.viewDialogVisible},on:{"update:visible":function(e){t.viewDialogVisible=e}}},[s("div",{staticClass:"dialog-preview"},[s("div",{staticClass:"option-item"},[s("div",{staticClass:"option-title"},[t._v("\n          "+t._s(t.$t("rule.id"))+"\n        ")]),t._v(" "),s("div",{staticClass:"option-value"},[t._v(t._s(t.res.id))])]),t._v(" "),s("div",{staticClass:"option-item"},[s("div",{staticClass:"option-title"},[t._v("\n          "+t._s(t.$t("rule.resource_type"))+"\n        ")]),t._v(" "),s("div",{staticClass:"option-value"},[t._v(t._s(t.res.type))])]),t._v(" "),s("div",{staticClass:"option-item"},[s("div",{staticClass:"option-title"},[t._v("\n          "+t._s(t.$t("rule.resource_name"))+"\n        ")]),t._v(" "),s("div",{staticClass:"option-value"},[t._v(t._s(t.res.description))])]),t._v(" "),t.res.config&&Object.keys(t.res.config).length>0?s("div",{staticClass:"option-item"},[s("div",{staticClass:"option-title"},[t._v("\n          "+t._s(t.$t("rule.config_info"))+"\n        ")]),t._v(" "),s("div",{staticClass:"option-all"},t._l(Object.entries(t.res.config),function(e,i){return s("div",{key:i,staticClass:"option-item"},["object"!=typeof e[1]||Array.isArray(e[1])?[s("div",{staticClass:"option-title"},[t._v("\n                "+t._s(e[0])+"\n              ")]),t._v(" "),s("div",{staticClass:"option-value"},[t._v("\n                "+t._s(e[1])+"\n              ")])]:[s("div",{staticClass:"option-title"},[t._v("\n                "+t._s(e[0])+"\n              ")]),t._v(" "),s("div",{staticClass:"option-value"},[e[1]&&0!==Object.keys(e[1]).length?s("data-table",{staticStyle:{"margin-top":"0"},attrs:{disabled:""},model:{value:e[1],callback:function(s){t.$set(e,1,s)},expression:"item[1]"}}):s("span",[t._v("\n                  N/A\n                ")])],1)]],2)}),0)]):t._e()]),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"confirm-btn",attrs:{type:"success"},on:{click:function(e){t.viewDialogVisible=!1}}},[t._v("\n        "+t._s(t.$t("rule.confirm"))+"\n      ")])],1)])],1)},staticRenderFns:[]};var l=s("VU/8")(a,o,!1,function(t){s("6vbc")},null,null);e.default=l.exports}});