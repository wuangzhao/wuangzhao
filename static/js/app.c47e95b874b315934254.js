webpackJsonp([1],{"+95f":function(t,e){},"1ylB":function(t,e){},Jqc0:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("7+uW"),i=o("cHER"),r=o.n(i),s={methods:{handleChange:function(){var t=this;this.doctor.doctorId=this.value[1],this.order.doctorId=this.doctor.doctorId,this.axios.get("/doctor",{params:{id:this.doctor.doctorId}}).then(function(e){200===e.status&&(e=e.data.data,t.doctor.doctorId=e.doctorId,t.doctor.doctorName=e.doctorName,t.doctor.receiver=e.receiver,t.doctor.deptId=e.deptId)})},addOrder:function(){var t=this;this.axios.post("/order",this.qs.stringify(this.order)).then(function(e){200===e.status&&(200===(e=e.data).code?t.$message({showClose:!0,message:"成功",type:"success"}):t.$notify({title:"提示信息",message:e.message,type:"error"}))})}},mounted:function(){var t=this;this.axios.get("/dept/list").then(function(e){200===e.status&&e.data.data.forEach(function(e){var o={value:e.deptId,label:e.deptName,children:[]};t.axios.get("/doctor/list",{params:{id:e.deptId}}).then(function(t){200===t.status&&t.data.data.forEach(function(t){console.log(t);var e={value:t.doctorId,label:t.doctorName};o.children.push(e)})}),t.options.push(o)})})},data:function(){return{imgs:["http://s4.sinaimg.cn/middle/a9f45dc5tc65453b0a803&690","http://img3.imgtn.bdimg.com/it/u=2855716333,1508675871&fm=27&gp=0.jpg","http://img2.imgtn.bdimg.com/it/u=3986875279,1976721274&fm=27&gp=0.jpg"],dialogFormVisible:!0,value:[],options:[],order:{name:"",year:"",tel:"",doctorId:""},doctor:{doctorId:"",doctorName:"",deptId:"",receiver:""}}}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-dialog",{attrs:{title:"选择医生",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("div",{staticClass:"el-dialog-body",staticStyle:{"padding-left":"100px","padding-right":"100px"}},[o("el-cascader-panel",{attrs:{options:t.options},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)]),t._v(" "),[o("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(t.imgs,function(t){return o("el-carousel-item",{key:t},[o("el-image",{attrs:{src:t}})],1)}),1)],t._v(" "),o("el-form",{attrs:{model:t.order,"label-position":"right","label-width":"80px"}},[""!==t.order.doctorId?o("div",[o("el-form-item",{attrs:{label:"医生姓名"}},[o("el-input",{attrs:{disabled:!0},model:{value:t.doctor.doctorName,callback:function(e){t.$set(t.doctor,"doctorName",e)},expression:"doctor.doctorName"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"剩余号数"}},[o("el-input",{attrs:{disabled:!0},model:{value:t.doctor.receiver,callback:function(e){t.$set(t.doctor,"receiver",e)},expression:"doctor.receiver"}})],1)],1):t._e(),t._v(" "),o("el-form-item",{attrs:{label:"患者姓名"}},[o("el-input",{model:{value:t.order.name,callback:function(e){t.$set(t.order,"name",e)},expression:"order.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"患者年龄"}},[o("el-input",{model:{value:t.order.year,callback:function(e){t.$set(t.order,"year",e)},expression:"order.year"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"联系电话"}},[o("el-input",{model:{value:t.order.tel,callback:function(e){t.$set(t.order,"tel",e)},expression:"order.tel"}})],1)],1),t._v(" "),o("div",{staticStyle:{right:"18%","margin-left":"75%"}},[o("el-button",{attrs:{type:"warning"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("修改医生")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.addOrder}},[t._v("挂 号")])],1)],2)},staticRenderFns:[]};var n={methods:{selectTrigger:function(t){var e=this;console.log(t),this.selectList.forEach(function(o){o.doctorId===t&&(console.log(o),e.doctor=o)})},remoteMethod:function(t){var e=this;this.loading=!0,this.axios.get("/doctorName",{params:{name:t}}).then(function(t){200===t.status&&(e.selectList=[],1===(t=t.data.data).length?e.selectList=t:t.forEach(function(t){e.selectList.push(t)}),e.loading=!1)})},handleChange:function(){var t=this;this.doctor.doctorId=this.value[1],this.axios.get("/doctor",{params:{id:this.doctor.doctorId}}).then(function(e){200===e.status&&(e=e.data.data,t.doctor=e)})},updateDoctor:function(){var t=this;this.axios.post("/doctor",this.qs.stringify(this.doctor)).then(function(e){200===e.status&&(200===(e=e.data).code?t.$message({showClose:!0,message:"成功",type:"success"}):t.$notify({title:"提示信息",message:e.message,type:"error"}))})}},mounted:function(){var t=this;this.axios.get("/dept/list").then(function(e){200===e.status&&e.data.data.forEach(function(e){var o={value:e.deptId,label:e.deptName,children:[]};t.axios.get("/doctor/list",{params:{id:e.deptId}}).then(function(t){200===t.status&&t.data.data.forEach(function(t){console.log(t);var e={value:t.doctorId,label:t.doctorName};o.children.push(e)})}),t.options.push(o)})})},data:function(){return{loading:!1,selectValue:"",selectList:[],dialogFormVisible:!0,value:[],options:[],doctor:{doctorId:"",doctorName:"",deptId:"",receiver:"",info:""}}}},d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-dialog",{attrs:{title:"选择医生",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("div",{staticClass:"el-dialog-body",staticStyle:{"padding-left":"100px","padding-right":"100px"}},[[o("el-select",{staticStyle:{"padding-bottom":"15px",width:"100%"},attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":t.remoteMethod,loading:t.loading,change:t.selectTrigger(t.selectValue)},nativeOn:{click:function(e){return t.selectTrigger(t.selectValue)}},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},t._l(t.selectList,function(t){return o("el-option",{key:t.doctorId,attrs:{label:t.doctorName,value:t.doctorId}})}),1)],t._v(" "),o("el-cascader-panel",{attrs:{options:t.options},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],2),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)]),t._v(" "),o("el-form",{attrs:{model:t.doctor,"label-position":"right","label-width":"80px"}},[""!==t.doctor.doctorId?o("el-form-item",{attrs:{label:"医生姓名"}},[o("el-input",{model:{value:t.doctor.doctorName,callback:function(e){t.$set(t.doctor,"doctorName",e)},expression:"doctor.doctorName"}})],1):t._e(),t._v(" "),""!==t.doctor.doctorId?o("el-form-item",{attrs:{label:"医生科室"}},[o("el-select",{attrs:{placeholder:"科室调换"},model:{value:t.doctor.deptId,callback:function(e){t.$set(t.doctor,"deptId",e)},expression:"doctor.deptId"}},t._l(t.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1):t._e(),t._v(" "),""!==t.doctor.doctorId?o("el-form-item",{attrs:{label:"医生简介"}},[o("el-input",{model:{value:t.doctor.info,callback:function(e){t.$set(t.doctor,"info",e)},expression:"doctor.info"}})],1):t._e()],1),t._v(" "),o("div",{staticStyle:{right:"18%","margin-left":"75%"}},[o("el-button",{staticStyle:{position:"absolute",right:"25%"},attrs:{type:"warning"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("选择医生")]),t._v(" "),o("el-button",{staticStyle:{position:"absolute",right:"18%"},attrs:{type:"primary"},on:{click:t.updateDoctor}},[t._v("修 改")])],1)],1)},staticRenderFns:[]};var c={methods:{selectTrigger:function(t){console.log(t),this.list=this.selectList},remoteMethod:function(t){var e=this;this.loading=!0,this.axios.get("/order/getByOrderId",{params:{id:t}}).then(function(t){200===t.status&&(e.selectList=[],t=t.data.data,e.selectList.push(t),e.loading=!1)})},handleDelete:function(t){var e=this;this.axios.delete("/order?"+this.qs.stringify({id:t.orderId})).then(function(t){200===t.status&&200===(t=t.data).code?(e.$message({showClose:!0,message:"恭喜你，这是一条成功消息",type:"success"}),e.list.splice(e.list.findIndex(function(t){return t.orderId===e.editOrder.orderId}))):e.$message({showClose:!0,message:"错了哦，这是一条错误消息",type:"error"})})},updateOrder:function(){var t=this;this.axios({url:"/order",method:"patch",data:this.qs.stringify(this.editOrder)}).then(function(e){200===e.status&&200===(e=e.data).code?(t.$message({showClose:!0,message:"恭喜你，这是一条成功消息",type:"success"}),t.editDialogFormVisible=!1):t.$message({showClose:!0,message:"错了哦，这是一条错误消息",type:"error"})})},handleEdit:function(t){this.editDialogFormVisible=!0,this.editOrder=t},handleChange:function(){var t=this;this.doctor.doctorId=this.value[1],this.order.doctorId=this.doctor.doctorId,this.axios.get("/order/getByDoctorId",{params:{id:this.doctor.doctorId}}).then(function(e){200===e.status&&(e=e.data.data,t.list=[],e.forEach(function(e){t.list.push(e)}))})}},mounted:function(){var t=this;this.axios.get("/dept/list").then(function(e){200===e.status&&e.data.data.forEach(function(e){var o={value:e.deptId,label:e.deptName,children:[]};t.axios.get("/doctor/list",{params:{id:e.deptId}}).then(function(t){200===t.status&&t.data.data.forEach(function(t){console.log(t);var e={value:t.doctorId,label:t.doctorName};o.children.push(e)})}),t.options.push(o)})})},data:function(){return{loading:!1,selectList:[],selectValue:"",editDialogFormVisible:!1,dialogFormVisible:!0,value:[],options:[],list:[],editOrder:{orderId:"",name:"",year:"",tel:"",doctorId:""},order:{orderId:"",name:"",year:"",tel:"",doctorId:""},doctor:{doctorId:"",doctorName:"",deptId:"",receiver:""}}}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"padding-left":"50px","padding-right":"50px"}},[[o("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入挂号号码","remote-method":t.remoteMethod,loading:t.loading},nativeOn:{click:function(e){return t.selectTrigger(this)}},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},t._l(t.selectList,function(t){return o("el-option",{key:t.orderId,attrs:{label:t.orderId,value:t.orderId}})}),1)],t._v(" "),o("el-dialog",{attrs:{title:"选择医生",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("div",{staticClass:"el-dialog-body",staticStyle:{"padding-left":"100px","padding-right":"100px"}},[o("el-cascader-panel",{attrs:{options:t.options},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)]),t._v(" "),o("el-dialog",{attrs:{title:"修改挂号信息",visible:t.editDialogFormVisible},on:{"update:visible":function(e){t.editDialogFormVisible=e}}},[o("el-form",[o("el-form-item",{attrs:{label:"姓名"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.editOrder.name,callback:function(e){t.$set(t.editOrder,"name",e)},expression:"editOrder.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"年龄"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.editOrder.year,callback:function(e){t.$set(t.editOrder,"year",e)},expression:"editOrder.year"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"手机号"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.editOrder.tel,callback:function(e){t.$set(t.editOrder,"tel",e)},expression:"editOrder.tel"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.editDialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.updateOrder}},[t._v("确 定")])],1)],1),t._v(" "),o("el-table",{attrs:{data:t.list}},[o("el-table-column",{attrs:{prop:"orderId",label:"单号"}}),t._v(" "),o("el-table-column",{attrs:{prop:"name",label:"年龄"}}),t._v(" "),o("el-table-column",{attrs:{prop:"tel",label:"手机号"}}),t._v(" "),o("el-table-column",{attrs:{prop:"year",label:"年龄"}}),t._v(" "),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:"",size:"small"},on:{click:function(o){return t.handleEdit(e.row)}}}),t._v(" "),o("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"small"},on:{click:function(o){return t.handleDelete(e.row)}}})]}}])})],1),t._v(" "),o("div",[o("el-button",{staticStyle:{"margin-left":"92%","margin-top":"10px"},attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("选择医生")])],1)],2)},staticRenderFns:[]};var p={components:{OrderPage:o("VU/8")(s,l,!1,function(t){o("+95f")},"data-v-4ab5ead6",null).exports,DoctorPage:o("VU/8")(n,d,!1,function(t){o("T8SJ")},"data-v-d1019b18",null).exports,OrderList:o("VU/8")(c,u,!1,function(t){o("yLh1")},"data-v-4ca97afe",null).exports},mounted:function(){this.username=this.$cookies.get("username"),null===this.username&&this.$router.push({path:"/login"})},methods:{loginOut:function(){this.$cookies.remove("username"),this.$router.push({path:"/login"})},click:function(t){var e=this;this.s1=!1,this.s2=!1,this.s3=!1,1===t?this.s1=!0:2===t?this.s2=!0:3===t&&(this.s3=!0),this.hackReset=!1,this.$nextTick(function(){e.hackReset=!0})}},data:function(){return{s1:!0,s2:!1,s3:!1,username:""}}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-container",[o("el-header",{staticStyle:{height:"60px","text-align":"right","font-size":"24px",color:"#ffffff"}},[o("el-dropdown",[o("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px","text-align":"left"}}),t._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{nativeOn:{click:function(e){return t.loginOut(e)}}},[t._v("退出登陆")])],1)],1),t._v(" "),o("span",[t._v(t._s(t.username))])],1),t._v(" "),o("el-container",[o("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[o("el-menu",{attrs:{"default-openeds":["1"]}},[o("el-submenu",{attrs:{index:"1"}},[o("template",{slot:"title"},[o("i",{staticClass:"el-icon-message"}),t._v("挂号系统\n          ")]),t._v(" "),o("el-menu-item-group",[o("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.click(1)}}},[t._v("挂号")]),t._v(" "),o("el-menu-item",{attrs:{index:"1-2"},on:{click:function(e){return t.click(2)}}},[t._v("医生信息修改")]),t._v(" "),o("el-menu-item",{attrs:{index:"1-3"},on:{click:function(e){return t.click(3)}}},[t._v("挂号信息")])],1)],2)],1)],1),t._v(" "),o("el-main",[t.s1?o("div",{staticClass:"order_page"},[o("order-page")],1):t._e(),t._v(" "),t.s2?o("div",{staticClass:"order_page"},[o("doctor-page")],1):t._e(),t._v(" "),t.s3?o("div",{},[o("order-list")],1):t._e()])],1)],1)},staticRenderFns:[]};var f=o("VU/8")(p,m,!1,function(t){o("Jqc0")},"data-v-32f34992",null).exports;a.default.use(r.a);var h={name:"App",components:{Home:f}},g={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var v=o("VU/8")(h,g,!1,function(t){o("1ylB")},null,null).exports,b=o("/ocq"),y={name:"login",data:function(){return{userInfo:{username:"",password:""},show:!1}},methods:{doLogin:function(){var t=this;return""===this.userInfo.username?(alert("用户名不能为空"),!1):""===this.userInfo.password?(alert("密码名不能为空"),!1):void this.axios.post("/user/checkUser",this.qs.stringify(this.userInfo)).then(function(e){if(200===e.status)if(200===(e=e.data).code){var o=new Date;o.setTime(o.getTime()+864e5),t.$cookies.set("username",t.userInfo.username,{expires:7,path:"/"}),t.$router.replace("/")}else t.$notify({title:"提示信息",message:e.message,type:"error"});else t.$notify({title:"提示信息",message:"账号或密码错误",type:"error"})}).catch(function(t){console.log(t)})},doRegister:function(){var t=this;return""===this.userInfo.username?(alert("用户名不能为空"),!1):""===this.userInfo.password?(alert("密码名不能为空"),!1):void this.axios.post("/register",this.qs.stringify(this.userInfo)).then(function(e){200===e.status?200===(e=e.data).code?t.$notify({title:"提示信息",message:e.message,type:"success"}):t.$notify({title:"提示信息",message:e.message,type:"error"}):t.$notify({title:"提示信息",message:"账号或密码错误",type:"error"})}).catch(function(t){console.log(t)})}}},_={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"background-color":"#615a5a",height:"100%"}},[o("div",{staticClass:"login-box"},[o("el-main",[o("el-row",[o("el-col",{attrs:{span:8}},[o("el-input",{attrs:{id:"name",placeholder:"请输入帐号"},model:{value:t.userInfo.username,callback:function(e){t.$set(t.userInfo,"username",e)},expression:"userInfo.username"}},[o("template",{slot:"prepend"},[t._v("帐号")])],2)],1)],1),t._v(" "),o("el-row",[o("el-col",{attrs:{span:8}},[o("el-input",{attrs:{id:"password",type:"password",placeholder:"请输入密码"},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}},[o("template",{slot:"prepend"},[t._v("密码")])],2)],1)],1),t._v(" "),o("el-row",[o("el-col",{attrs:{span:8}},[o("el-button",{staticStyle:{width:"100%"},attrs:{id:"login",type:"primary"},on:{click:t.doLogin}},[t._v("登录")])],1)],1),t._v(" "),o("el-row",[o("el-col",{attrs:{span:8}},[o("el-button",{staticStyle:{width:"100%"},attrs:{id:"register",type:"warning"},on:{click:t.doRegister}},[t._v("注册")])],1)],1)],1)],1)])},staticRenderFns:[]};var x=o("VU/8")(y,_,!1,function(t){o("x996")},"data-v-5c57b299",null).exports;a.default.use(b.a);var I=new b.a({routes:[{path:"/",name:"Home",component:f},{path:"/login",name:"Login",component:x}]}),k=(o("SO90"),o("Muz9")),w=o.n(k),$=o("mw3O"),V=o.n($),O=o("2fY5"),F=o.n(O);a.default.use(F.a),w.a.defaults.baseURL="https://ngrok.zh1yu.com:888",w.a.defaults.withCredentials=!0,a.default.prototype.axios=w.a,a.default.prototype.qs=V.a,a.default.config.productionTip=!1,a.default.use(r.a),new a.default({el:"#app",router:I,components:{App:v},template:"<App/>"})},SO90:function(t,e){},T8SJ:function(t,e){},x996:function(t,e){},yLh1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c47e95b874b315934254.js.map