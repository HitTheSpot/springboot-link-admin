(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b34a829"],{"84fe":function(t,e,r){},b851:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"errPage-container"},[r("div",{staticStyle:{margin:"5px"},attrs:{slot:"title"},slot:"title"},[r("span",{staticStyle:{"padding-right":"10px"}},[t._v("Error Log")]),t._v(" "),r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-delete"},on:{click:t.clearAll}},[t._v("Clear All")]),t._v(" "),r("p")],1),t._v(" "),r("el-table",{attrs:{data:t.errorLogs,border:""}},[r("el-table-column",{attrs:{label:"Message"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[r("div",[r("span",{staticClass:"message-title"},[t._v("Msg:")]),t._v(" "),r("el-tag",{attrs:{type:"danger"}},[t._v(t._s(a.err.message))])],1),t._v(" "),r("br"),t._v(" "),r("div",[r("span",{staticClass:"message-title",staticStyle:{"padding-right":"10px"}},[t._v("Info:")]),t._v(" "),r("el-tag",{attrs:{type:"warning"}},[t._v(t._s(a.vm.$vnode.tag)+" error in "+t._s(a.info))])],1),t._v(" "),r("br"),t._v(" "),r("div",[r("span",{staticClass:"message-title",staticStyle:{"padding-right":"16px"}},[t._v("Url:")]),t._v(" "),r("el-tag",{attrs:{type:"success"}},[t._v(t._s(a.url))])],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"Stack"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.err.stack))]}}])})],1)],1)},s=[],n={name:"ErrorLog",data:function(){return{}},computed:{errorLogs:function(){return this.$store.getters.errorLogs}},methods:{clearAll:function(){this.$store.dispatch("errorLog/clearErrorLog")}}},l=n,i=(r("ea61"),r("2877")),o=Object(i["a"])(l,a,s,!1,null,"56ecab30",null);e["default"]=o.exports},ea61:function(t,e,r){"use strict";var a=r("84fe"),s=r.n(a);s.a}}]);