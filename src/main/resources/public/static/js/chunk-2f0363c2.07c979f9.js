(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f0363c2"],{"3c34":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container documentation-container"},[i("a",{staticClass:"document-btn",attrs:{target:"_blank",href:"https://252956.github.io/"}},[t._v("Documentation")]),t._v(" "),i("a",{staticClass:"document-btn",attrs:{target:"_blank",href:"https://github.com/252956/vue-link-admin/"}},[t._v("Github Repository")]),t._v(" "),i("dropdown-menu",{staticStyle:{float:"left","margin-left":"50px"},attrs:{items:t.articleList,title:"系列文章"}})],1)},a=[],s=i("7c70"),c={name:"Documentation",components:{DropdownMenu:s["a"]},data:function(){return{articleList:[{title:"基础篇",href:"https://juejin.im/post/59097cd7a22b9d0065fb61d2"},{title:"登录权限篇",href:"https://juejin.im/post/591aa14f570c35006961acac"},{title:"实战篇",href:"https://juejin.im/post/593121aa0ce4630057f70d35"},{title:"vue-admin-template 篇",href:"https://juejin.im/post/595b4d776fb9a06bbe7dba56"},{title:"v4.0 篇",href:"https://juejin.im/post/5c92ff94f265da6128275a85"},{title:"自行封装 component",href:"https://segmentfault.com/a/1190000009090836"},{title:"优雅的使用 icon",href:"https://juejin.im/post/59bb864b5188257e7a427c09"},{title:"webpack4（上）",href:"https://juejin.im/post/59bb864b5188257e7a427c09"},{title:"webpack4（下）",href:"https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc"}]}}},r=c,o=(i("d949"),i("2877")),u=Object(o["a"])(r,n,a,!1,null,"6c35cc78",null);e["default"]=u.exports},"4ba3":function(t,e,i){"use strict";var n=i("b560"),a=i.n(n);a.a},"7c70":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"share-dropdown-menu",class:{active:t.isActive}},[i("div",{staticClass:"share-dropdown-menu-wrapper"},[i("span",{staticClass:"share-dropdown-menu-title",on:{click:function(e){return e.target!==e.currentTarget?null:t.clickTitle(e)}}},[t._v(t._s(t.title))]),t._v(" "),t._l(t.items,function(e,n){return i("div",{key:n,staticClass:"share-dropdown-menu-item"},[e.href?i("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.title))]):i("span",[t._v(t._s(e.title))])])})],2)])},a=[],s={props:{items:{type:Array,default:function(){return[]}},title:{type:String,default:"vue"}},data:function(){return{isActive:!1}},methods:{clickTitle:function(){this.isActive=!this.isActive}}},c=s,r=(i("4ba3"),i("2877")),o=Object(r["a"])(c,n,a,!1,null,null,null);e["a"]=o.exports},b22b:function(t,e,i){},b560:function(t,e,i){},d949:function(t,e,i){"use strict";var n=i("b22b"),a=i.n(n);a.a}}]);