(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-885826fa"],{"2f88":function(e,t,i){"use strict";var s=i("5c99"),n=i.n(s);n.a},4381:function(e,t,i){"use strict";i("ac4d"),i("8a81"),i("ac6a");var s=i("4360"),n={inserted:function(e,t,i){var n=t.value,r=s["a"].getters&&s["a"].getters.permissions;if(!(n&&n instanceof Array&&n.length>0&&r))throw new Error("need permissions! Like v-permission=\"['/rest/user/list']\"");var a=!1,o=!0,l=!1,c=void 0;try{for(var u,p=r[Symbol.iterator]();!(o=(u=p.next()).done);o=!0){var m=u.value;if(m.url===n[0]){a=!0;break}}}catch(d){l=!0,c=d}finally{try{o||null==p.return||p.return()}finally{if(l)throw c}}a||e.remove()}},r=function(e){e.directive("permission",n)};window.Vue&&(window["permission"]=n,Vue.use(r)),n.install=r;t["a"]=n},"5c99":function(e,t,i){},b9e5:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{staticStyle:{"margin-top":"30px",width:"550px"},attrs:{"label-width":"120px","label-position":"left"}},[i("el-form-item",[i("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{data:e.permissions,props:e.defaultProps,"node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node,n=t.data;return i("span",{staticClass:"custom-tree-node"},[i("span",[e._v(e._s(s.label))]),e._v(" "),i("span",[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/rest/permission/add"],expression:"['/rest/permission/add']"}],attrs:{type:"text",size:"mini"},on:{click:function(){return e.handleCreate(n)}}},[e._v("添加")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/rest/permission/add"],expression:"['/rest/permission/add']"}],attrs:{type:"text",size:"mini"},on:{click:function(){return e.handleEdit(s,n)}}},[e._v("编辑")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/rest/permission/add"],expression:"['/rest/permission/add']"}],attrs:{type:"text",size:"mini"},on:{click:function(){return e.handleDelete(n)}}},[e._v("删除")])],1)])}}])})],1)],1),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑":"新增"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{attrs:{model:e.permission,"label-width":"80px","label-position":"left"}},[i("el-form-item",{attrs:{label:"上级权限"}},[i("span",[e._v(e._s(e.permission.parentName))])]),e._v(" "),i("el-form-item",{attrs:{label:"权限名"}},[i("el-input",{attrs:{placeholder:"权限名"},model:{value:e.permission.name,callback:function(t){e.$set(e.permission,"name",t)},expression:"permission.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"权限类型"}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},model:{value:e.permission.types,callback:function(t){e.$set(e.permission,"types",t)},expression:"permission.types"}},e._l(e.typesOptions,function(e){return i("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"url"}},[i("el-input",{attrs:{placeholder:"url"},model:{value:e.permission.url,callback:function(t){e.$set(e.permission,"url",t)},expression:"permission.url"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"排序"}},[i("el-input",{attrs:{placeholder:"排序"},model:{value:e.permission.sorts,callback:function(t){e.$set(e.permission,"sorts",t)},expression:"permission.sorts"}})],1)],1),e._v(" "),i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.confirmPermission}},[e._v("确定")])],1)],1)],1)},n=[],r=(i("7f7f"),i("96cf"),i("3b8d")),a=i("4381"),o=i("fe22"),l=i("ed08"),c=(i("61f7"),{id:"",name:"",parentId:"",parentName:"",url:"",types:"",sorts:""}),u={name:"Permission",directives:{permission:a["a"]},data:function(){return{defaultProps:{children:"childrens",label:"name"},permission:Object.assign({},c),permissions:[],dialogVisible:!1,dialogType:"new",typesOptions:[{label:"菜单",key:0},{label:"功能权限",key:1}]}},created:function(){this.getPermissions()},methods:{getPermissions:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["c"])();case 2:t=e.sent,this.permissions=[{id:0,name:"权限树",childrens:t.result}];case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleCreate:function(e){this.dialogType="new",this.dialogVisible=!0,this.permission=Object.assign({},c),this.permission.parentId=e.id,this.permission.parentName=e.name},handleEdit:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,i){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.dialogType="edit",this.dialogVisible=!0,this.permission=Object(l["c"])(i),s=t.parent.data,this.permission.parentId=s.id,this.permission.parentName=s.name;case 6:case"end":return e.stop()}},e,this)}));function t(t,i){return e.apply(this,arguments)}return t}(),confirmPermission:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="edit"===this.dialogType,!t){e.next=6;break}return e.next=4,Object(o["e"])(this.permission);case 4:e.next=8;break;case 6:return e.next=8,Object(o["a"])(this.permission);case 8:this.dialogVisible=!1,this.$message({showClose:!0,message:"保存成功",type:"success"}),this.getPermissions();case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleDelete:function(e){var t=this;this.$confirm("确认删除?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,Object(o["b"])(e.id);case 2:t.$message({showClose:!0,message:"删除成功",type:"success"}),t.getPermissions();case 4:case"end":return i.stop()}},i)}))).catch(function(e){console.error(e)})}}},p=u,m=(i("2f88"),i("2877")),d=Object(m["a"])(p,s,n,!1,null,null,null);t["default"]=d.exports},fe22:function(e,t,i){"use strict";i.d(t,"c",function(){return n}),i.d(t,"d",function(){return r}),i.d(t,"a",function(){return a}),i.d(t,"e",function(){return o}),i.d(t,"b",function(){return l});var s=i("b775");function n(){return Object(s["a"])({url:"/rest/permission/all",method:"get"})}function r(e){return Object(s["a"])({url:"/rest/permission/allByRole/".concat(e),method:"get"})}function a(e){return Object(s["a"])({url:"/rest/permission/add",method:"post",data:e})}function o(e){return Object(s["a"])({url:"/rest/permission/update",method:"post",data:e})}function l(e){return Object(s["a"])({url:"/rest/permission/delete",method:"get",params:{id:e}})}}}]);