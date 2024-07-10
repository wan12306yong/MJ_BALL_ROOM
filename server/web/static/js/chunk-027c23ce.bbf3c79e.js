(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-027c23ce"],{"1e8b":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[t("el-input",{model:{value:e.user.nickname,callback:function(t){e.$set(e.user,"nickname",t)},expression:"user.nickname"}})],1),t("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[t("el-input",{attrs:{maxlength:"11"},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{maxlength:"50"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),t("el-form-item",{attrs:{label:"性别"}},[t("el-radio-group",{model:{value:e.user.sex,callback:function(t){e.$set(e.user,"sex",t)},expression:"user.sex"}},[t("el-radio",{attrs:{label:1}},[e._v("男")]),t("el-radio",{attrs:{label:2}},[e._v("女")])],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},a=[],i=s("c0c7"),o={props:{user:{type:Object}},data:function(){return{rules:{nickname:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],mobile:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|456789][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(i["l"])(e.user).then((function(t){e.$modal.msgSuccess("修改成功")}))}))},close:function(){this.$tab.closePage()}}},n=o,l=s("2877"),u=Object(l["a"])(n,r,a,!1,null,null,null);t["default"]=u.exports},"1f06":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("el-table",{attrs:{data:e.socialUsers,"show-header":!1}},[t("el-table-column",{attrs:{label:"社交平台",align:"left",width:"120"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("img",{staticStyle:{height:"20px","vertical-align":"middle"},attrs:{src:s.row.img}}),e._v(" "+e._s(s.row.title)+" ")]}}])}),t("el-table-column",{attrs:{label:"操作",align:"left"},scopedSlots:e._u([{key:"default",fn:function(s){return[s.row.openid?t("div",[e._v(" 已绑定 "),t("el-button",{attrs:{size:"large",type:"text"},on:{click:function(t){return e.unbind(s.row)}}},[e._v("(解绑)")])],1):t("div",[e._v(" 未绑定 "),t("el-button",{attrs:{size:"large",type:"text"},on:{click:function(t){return e.bind(s.row)}}},[e._v("(绑定)")])],1)]}}])})],1)},a=[],i=s("5530"),o=(s("14d9"),s("ac1f"),s("5319"),s("c9d9")),n=s("7ded"),l=s("b775");function u(e,t,s){return Object(l["a"])({url:"/system/social-user/bind",method:"post",data:{type:e,code:t,state:s}})}function c(e,t){return Object(l["a"])({url:"/system/social-user/unbind",method:"delete",data:{type:e,openid:t}})}var d={props:{user:{type:Object},getUser:{type:Function},setActiveTab:{type:Function}},data:function(){return{}},computed:{socialUsers:function(){var e=[];for(var t in o["f"]){var s=Object(i["a"])({},o["f"][t]);if(e.push(s),this.user.socialUsers)for(var r in this.user.socialUsers)if(s.type===this.user.socialUsers[r].type){s.openid=this.user.socialUsers[r].openid;break}}return e}},created:function(){var e=this,t=this.$route.query.type,s=this.$route.query.code,r=this.$route.query.state;s&&u(t,s,r).then((function(t){e.$modal.msgSuccess("绑定成功"),e.$router.replace("/user/profile"),e.getUser(),e.setActiveTab("userSocial")}))},methods:{bind:function(e){var t=location.origin+"/user/profile?type="+e.type;Object(n["k"])(e.type,encodeURIComponent(t)).then((function(e){window.location.href=e.data}))},unbind:function(e){var t=this;c(e.type,e.openid).then((function(s){t.$modal.msgSuccess("解绑成功"),e.openid=void 0}))},close:function(){this.$tab.closePage()}}},p=d,f=s("2877"),m=Object(f["a"])(p,r,a,!1,null,null,null);t["default"]=m.exports},"4c1b":function(e,t,s){"use strict";s.r(t);s("b0c0"),s("a15b"),s("d81d");var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6,xs:24}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("个人信息")])]),t("div",[t("div",{staticClass:"text-center"},[t("userAvatar",{attrs:{user:e.user}})],1),t("ul",{staticClass:"list-group list-group-striped"},[t("li",{staticClass:"list-group-item"},[t("svg-icon",{attrs:{"icon-class":"user"}}),e._v("用户名称 "),t("div",{staticClass:"pull-right"},[e._v(e._s(e.user.username))])],1),t("li",{staticClass:"list-group-item"},[t("svg-icon",{attrs:{"icon-class":"phone"}}),e._v("手机号码 "),t("div",{staticClass:"pull-right"},[e._v(e._s(e.user.mobile))])],1),t("li",{staticClass:"list-group-item"},[t("svg-icon",{attrs:{"icon-class":"email"}}),e._v("用户邮箱 "),t("div",{staticClass:"pull-right"},[e._v(e._s(e.user.email))])],1),t("li",{staticClass:"list-group-item"},[t("svg-icon",{attrs:{"icon-class":"tree"}}),e._v("所属部门 "),e.user.dept?t("div",{staticClass:"pull-right"},[e._v(e._s(e.user.dept.name))]):e._e()],1),t("li",{staticClass:"list-group-item"},[t("svg-icon",{attrs:{"icon-class":"tree"}}),e._v("所属岗位 "),e.user.posts?t("div",{staticClass:"pull-right"},[e._v(e._s(e.user.posts.map((function(e){return e.name})).join(",")))]):e._e()],1),t("li",{staticClass:"list-group-item"},[t("svg-icon",{attrs:{"icon-class":"peoples"}}),e._v("所属角色 "),e.user.roles?t("div",{staticClass:"pull-right"},[e._v(e._s(e.user.roles.map((function(e){return e.name})).join(",")))]):e._e()],1),t("li",{staticClass:"list-group-item"},[t("svg-icon",{attrs:{"icon-class":"date"}}),e._v("创建日期 "),t("div",{staticClass:"pull-right"},[e._v(e._s(e.parseTime(e.user.createTime)))])],1)])])])],1),t("el-col",{attrs:{span:18,xs:24}},[t("el-card",[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("基本资料")])]),t("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[t("el-tab-pane",{attrs:{label:"基本资料",name:"userinfo"}},[t("userInfo",{attrs:{user:e.user}})],1),t("el-tab-pane",{attrs:{label:"修改密码",name:"resetPwd"}},[t("resetPwd",{attrs:{user:e.user}})],1),t("el-tab-pane",{attrs:{label:"社交信息",name:"userSocial"}},[t("userSocial",{attrs:{user:e.user,getUser:e.getUser,setActiveTab:e.setActiveTab}})],1)],1)],1)],1)],1)],1)},a=[],i=s("9429"),o=s("1e8b"),n=s("ee46"),l=s("1f06"),u=s("c0c7"),c={name:"Profile",components:{userAvatar:i["default"],userInfo:o["default"],resetPwd:n["default"],userSocial:l["default"]},data:function(){return{user:{},roleGroup:{},postGroup:{},activeTab:"userinfo"}},created:function(){this.getUser()},methods:{getUser:function(){var e=this;Object(u["f"])().then((function(t){e.user=t.data}))},setActiveTab:function(e){this.activeTab=e}}},d=c,p=s("2877"),f=Object(p["a"])(d,r,a,!1,null,null,null);t["default"]=f.exports},6725:function(e,t,s){"use strict";s("785d")},"785d":function(e,t,s){},9429:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"user-info-head",on:{click:function(t){return e.editCropper()}}},[t("img",{staticClass:"img-circle img-lg",attrs:{src:e.options.img,title:"点击上传头像"}})]),t("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.open=t},opened:e.modalOpened,close:function(t){return e.closeDialog()}}},[t("el-row",[t("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e.visible?t("vue-cropper",{ref:"cropper",attrs:{img:e.options.img,info:!0,autoCrop:e.options.autoCrop,autoCropWidth:e.options.autoCropWidth,autoCropHeight:e.options.autoCropHeight,fixedBox:e.options.fixedBox},on:{realTime:e.realTime}}):e._e()],1),t("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[t("div",{staticClass:"avatar-upload-preview"},[t("img",{style:e.previews.img,attrs:{src:e.previews.url}})])])],1),t("br"),t("el-row",[t("el-col",{attrs:{lg:2,md:2}},[t("el-upload",{attrs:{action:"#","http-request":e.requestUpload,"show-file-list":!1,"before-upload":e.beforeUpload}},[t("el-button",{attrs:{size:"small"}},[e._v(" 选择 "),t("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),t("el-col",{attrs:{lg:{span:1,offset:2},md:2}},[t("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(t){return e.changeScale(1)}}})],1),t("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[t("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(t){return e.changeScale(-1)}}})],1),t("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[t("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(t){return e.rotateLeft()}}})],1),t("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[t("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(t){return e.rotateRight()}}})],1),t("el-col",{attrs:{lg:{span:2,offset:6},md:2}},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.uploadImg()}}},[e._v("提 交")])],1)],1)],1)],1)},a=[],i=s("4360"),o=s("7e79"),n=s("c0c7"),l={components:{VueCropper:o["VueCropper"]},props:{user:{type:Object}},data:function(){return{open:!1,visible:!1,title:"修改头像",options:{img:i["a"].getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{editCropper:function(){this.open=!0},modalOpened:function(){this.visible=!0},requestUpload:function(){},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},changeScale:function(e){e=e||1,this.$refs.cropper.changeScale(e)},beforeUpload:function(e){var t=this;if(-1===e.type.indexOf("image/"))this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{var s=new FileReader;s.readAsDataURL(e),s.onload=function(){t.options.img=s.result}}},uploadImg:function(){var e=this;this.$refs.cropper.getCropBlob((function(t){var s=new FormData;s.append("avatarFile",t),Object(n["n"])(s).then((function(t){e.open=!1,i["a"].commit("SET_AVATAR",t.data),e.$modal.msgSuccess("修改成功"),e.visible=!1}))}))},realTime:function(e){this.previews=e},closeDialog:function(){this.options.img=i["a"].getters.avatar}}},u=l,c=(s("6725"),s("2877")),d=Object(c["a"])(u,r,a,!1,null,"594153c9",null);t["default"]=d.exports},c0c7:function(e,t,s){"use strict";s.d(t,"i",(function(){return i})),s.d(t,"h",(function(){return o})),s.d(t,"e",(function(){return n})),s.d(t,"a",(function(){return l})),s.d(t,"k",(function(){return u})),s.d(t,"c",(function(){return c})),s.d(t,"d",(function(){return d})),s.d(t,"j",(function(){return p})),s.d(t,"b",(function(){return f})),s.d(t,"f",(function(){return m})),s.d(t,"l",(function(){return b})),s.d(t,"m",(function(){return g})),s.d(t,"n",(function(){return v})),s.d(t,"g",(function(){return h}));var r=s("b775"),a=s("c38a");function i(e){return Object(r["a"])({url:"/system/user/page",method:"get",params:e})}function o(){return Object(r["a"])({url:"/system/user/list-all-simple",method:"get"})}function n(e){return Object(r["a"])({url:"/system/user/get?id="+Object(a["j"])(e),method:"get"})}function l(e){return Object(r["a"])({url:"/system/user/create",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/system/user/update",method:"put",data:e})}function c(e){return Object(r["a"])({url:"/system/user/delete?id="+e,method:"delete"})}function d(e){return Object(r["a"])({url:"/system/user/export",method:"get",params:e,responseType:"blob"})}function p(e,t){var s={id:e,password:t};return Object(r["a"])({url:"/system/user/update-password",method:"put",data:s})}function f(e,t){var s={id:e,status:t};return Object(r["a"])({url:"/system/user/update-status",method:"put",data:s})}function m(){return Object(r["a"])({url:"/system/user/profile/get",method:"get"})}function b(e){return Object(r["a"])({url:"/system/user/profile/update",method:"put",data:e})}function g(e,t){var s={oldPassword:e,newPassword:t};return Object(r["a"])({url:"/system/user/profile/update-password",method:"put",data:s})}function v(e){return Object(r["a"])({url:"/system/user/profile/update-avatar",method:"put",data:e})}function h(){return Object(r["a"])({url:"/system/user/get-import-template",method:"get",responseType:"blob"})}},c9d9:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"e",(function(){return a})),s.d(t,"d",(function(){return i})),s.d(t,"c",(function(){return o})),s.d(t,"b",(function(){return n})),s.d(t,"f",(function(){return l}));s("ac1f"),s("00b4"),s("5319"),s("4d63"),s("c607"),s("2c3e"),s("25f0");var r={ENABLE:0,DISABLE:1},a={DIR:1,MENU:2,BUTTON:3},i={ALL:1,DEPT_CUSTOM:2,DEPT_ONLY:3,DEPT_AND_CHILD:4,DEPT_SELF:5},o={INIT:0,NORMAL:1,STOP:2},n={INIT:0,DONE:1,IGNORE:2},l={DINGTALK:{title:"钉钉",type:20,source:"dingtalk",img:"https://s1.ax1x.com/2022/05/22/OzMDRs.png"},WECHAT_ENTERPRISE:{title:"企业微信",type:30,source:"wechat_enterprise",img:"https://s1.ax1x.com/2022/05/22/OzMrzn.png"}}},ee46:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[t("el-input",{attrs:{placeholder:"请输入旧密码",type:"password","show-password":""},model:{value:e.user.oldPassword,callback:function(t){e.$set(e.user,"oldPassword",t)},expression:"user.oldPassword"}})],1),t("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[t("el-input",{attrs:{placeholder:"请输入新密码",type:"password","show-password":""},model:{value:e.user.newPassword,callback:function(t){e.$set(e.user,"newPassword",t)},expression:"user.newPassword"}})],1),t("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[t("el-input",{attrs:{placeholder:"请确认密码",type:"password","show-password":""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},a=[],i=(s("d9e2"),s("c0c7")),o={data:function(){var e=this,t=function(t,s,r){e.user.newPassword!==s?r(new Error("两次输入的密码不一致")):r()};return{test:"1test",user:{oldPassword:void 0,newPassword:void 0,confirmPassword:void 0},rules:{oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:t,trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(i["m"])(e.user.oldPassword,e.user.newPassword).then((function(t){e.$modal.msgSuccess("修改成功")}))}))},close:function(){this.$tab.closePage()}}},n=o,l=s("2877"),u=Object(l["a"])(n,r,a,!1,null,null,null);t["default"]=u.exports}}]);