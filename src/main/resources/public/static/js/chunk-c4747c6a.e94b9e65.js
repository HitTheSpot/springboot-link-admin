(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4747c6a"],{4708:function(s,a,e){"use strict";var t=e("768d"),r=e.n(t);r.a},"768d":function(s,a,e){},b6da:function(s,a,e){},d8ea:function(s,a,e){"use strict";var t=e("b6da"),r=e.n(t);r.a},ecac:function(s,a,e){"use strict";e.r(a);var t=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"app-container"},[s.userinfo?e("div",[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6,xs:24}},[e("el-card",{staticStyle:{"margin-bottom":"20px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[s._v("个人中心")])]),s._v(" "),e("div",{staticClass:"user-profile"},[e("div",{staticClass:"box-center"},[e("pan-thumb",{attrs:{image:s.userinfo.avatar,height:"100px",width:"100px",hoverable:!1}},[e("div",[s._v("Hello")]),s._v("\n                "+s._s(s.userinfo.vserName)+"\n              ")])],1),s._v(" "),e("div",{staticClass:"box-center"},[e("div",{staticClass:"user-name text-center"},[s._v(s._s(s.userinfo.vserName))]),s._v(" "),e("div",{staticClass:"user-role text-center text-muted"},[s._v(s._s(s._f("uppercaseFirst")(s.roles.join(" | "))))])])]),s._v(" "),e("div",{staticClass:"user-bio"},[e("div",{staticClass:"user-skills user-bio-section"},[e("div",{staticClass:"user-bio-section-header"},[e("svg-icon",{attrs:{"icon-class":"skill"}}),s._v(" "),e("span",[s._v("基本信息")])],1),s._v(" "),e("div",{staticClass:"user-bio-section-body"},[e("div",{staticClass:"progress-item"},[e("span",[s._v("姓名")]),s._v(" "),e("span",[s._v(s._s(s.userinfo.vserName))])]),s._v(" "),e("div",{staticClass:"progress-item"},[e("span",[s._v("账号")]),s._v(" "),e("span",[s._v(s._s(s.userinfo.name))])]),s._v(" "),e("div",{staticClass:"progress-item"},[e("span",[s._v("部门")]),s._v(" "),e("span",[s._v(s._s(s.userinfo.deptName))])]),s._v(" "),e("div",{staticClass:"progress-item"},[e("span",[s._v("邮箱")]),s._v(" "),e("span",[s._v(s._s(s.userinfo.email))])]),s._v(" "),e("div",{staticClass:"progress-item"},[e("span",[s._v("手机")]),s._v(" "),e("span",[s._v(s._s(s.userinfo.mobile))])])])])])])],1),s._v(" "),e("el-col",{attrs:{span:18,xs:24}},[e("el-card",[e("el-tabs",{model:{value:s.activeTab,callback:function(a){s.activeTab=a},expression:"activeTab"}},[e("el-tab-pane",{attrs:{label:"个人页",name:"个人页"}},[e("activity")],1),s._v(" "),e("el-tab-pane",{attrs:{label:"修改密码",name:"修改密码"}},[e("el-form",{ref:"passwordForm",attrs:{model:s.passwordForm,rules:s.passwordRules}},[e("el-form-item",{attrs:{label:"原密码",prop:"oldPassword"}},[e("el-input",{attrs:{name:"oldPassword"},model:{value:s.passwordForm.oldPassword,callback:function(a){s.$set(s.passwordForm,"oldPassword",a)},expression:"passwordForm.oldPassword"}})],1),s._v(" "),e("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[e("el-input",{attrs:{name:"newPassword"},model:{value:s.passwordForm.newPassword,callback:function(a){s.$set(s.passwordForm,"newPassword",a)},expression:"passwordForm.newPassword"}})],1),s._v(" "),e("el-form-item",{attrs:{label:"确认密码",prop:"confirmNewPassword"}},[e("el-input",{attrs:{name:"confirmNewPassword"},model:{value:s.passwordForm.confirmNewPassword,callback:function(a){s.$set(s.passwordForm,"confirmNewPassword",a)},expression:"passwordForm.confirmNewPassword"}})],1),s._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:s.submitPassword}},[s._v("修改")])],1)],1)],1)],1)],1)],1)],1)],1):s._e()])},r=[],i=e("db72"),o=e("4360"),n=e("5c96"),l=e("2f62"),c=e("b3f4"),d=e("3cbc"),v=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"user-activity"},[e("div",{staticClass:"post"},[e("div",{staticClass:"user-block"},[e("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg"+s.avatarPrefix}}),s._v(" "),e("span",{staticClass:"username text-muted"},[s._v("Captain American")]),s._v(" "),e("span",{staticClass:"description"},[s._v("Sent you a message - yesterday")])]),s._v(" "),e("p",[s._v("\n      Lorem ipsum represents a long-held tradition for designers,\n      typographers and the like. Some people hate it and argue for\n      its demise, but others ignore the hate as they create awesome\n      tools to help create filler text for everyone from bacon lovers\n      to Charlie Sheen fans.\n    ")]),s._v(" "),e("ul",{staticClass:"list-inline"},[s._m(0),s._v(" "),e("li",[e("span",{staticClass:"link-black text-sm"},[e("svg-icon",{attrs:{"icon-class":"like"}}),s._v("\n          Like\n        ")],1)])])]),s._v(" "),e("div",{staticClass:"post"},[e("div",{staticClass:"user-block"},[e("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg"+s.avatarPrefix}}),s._v(" "),e("span",{staticClass:"username"},[s._v("Spider Man")]),s._v(" "),e("span",{staticClass:"description"},[s._v("Posted 4 photos - 2 days ago")])]),s._v(" "),e("div",{staticClass:"user-images"},[e("el-carousel",{attrs:{interval:6e3,type:"card",height:"220px"}},s._l(s.carouselImages,function(a){return e("el-carousel-item",{key:a},[e("img",{staticClass:"image",attrs:{src:a+s.carouselPrefix}})])}),1)],1),s._v(" "),e("ul",{staticClass:"list-inline"},[s._m(1),s._v(" "),e("li",[e("span",{staticClass:"link-black text-sm"},[e("svg-icon",{attrs:{"icon-class":"like"}}),s._v(" Like")],1)])])])])},p=[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("li",[e("span",{staticClass:"link-black text-sm"},[e("i",{staticClass:"el-icon-share"}),s._v("\n          Share\n        ")])])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("li",[e("span",{staticClass:"link-black text-sm"},[e("i",{staticClass:"el-icon-share"}),s._v(" Share")])])}],m="?imageView2/1/w/80/h/80",u="?imageView2/2/h/440",f={data:function(){return{carouselImages:["https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg","https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg","https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg","https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg"],avatarPrefix:m,carouselPrefix:u}}},w=f,_=(e("d8ea"),e("2877")),b=Object(_["a"])(w,v,p,!1,null,"f7e86aa8",null),g=b.exports,h={name:"Profile",components:{PanThumb:d["a"],Activity:g},data:function(){var s=function(s,a,e){a.length<6?e(new Error("密码长度不能小于6")):e()};return{activeTab:"个人页",passwordForm:{oldPassword:"",newPassword:"",confirmNewPassword:""},passwordRules:{oldPassword:[{required:!0,trigger:"blur",validator:s}],newPassword:[{required:!0,trigger:"blur",validator:s}],confirmNewPassword:[{required:!0,trigger:"blur",validator:s}]}}},computed:Object(i["a"])({},Object(l["b"])(["userinfo","roles"])),created:function(){},methods:{submitPassword:function(){var s=this;this.$refs.passwordForm.validate(function(a){if(!a)return console.log("error submit!!"),!1;s.loading=!0,Object(c["e"])(s.passwordForm).then(function(a){s.loading=!1,n["MessageBox"].confirm("密码修改成功, 为确保安全,请重新登录","提示",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){o["a"].dispatch("user/resetToken").then(function(){location.reload()})})})})}}},C=h,x=(e("4708"),Object(_["a"])(C,t,r,!1,null,"2a00fa51",null));a["default"]=x.exports}}]);