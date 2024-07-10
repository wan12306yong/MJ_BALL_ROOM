(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b184fd5"],{"4e25":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e._self._c;return t("el-form",{ref:"genInfoForm",attrs:{model:e.info,rules:e.rules,"label-width":"150px"}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{prop:"templateType"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v("生成模板")]),t("el-select",{on:{change:e.tplSelectChange},model:{value:e.info.templateType,callback:function(t){e.$set(e.info,"templateType",t)},expression:"info.templateType"}},e._l(this.getDictDatas(e.DICT_TYPE.INFRA_CODEGEN_TEMPLATE_TYPE),(function(e){return t("el-option",{key:parseInt(e.value),attrs:{label:e.label,value:parseInt(e.value)}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{prop:"templateType"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v("前端类型")]),t("el-select",{model:{value:e.info.frontType,callback:function(t){e.$set(e.info,"frontType",t)},expression:"info.frontType"}},e._l(this.getDictDatas(e.DICT_TYPE.INFRA_CODEGEN_FRONT_TYPE),(function(e){return t("el-option",{key:parseInt(e.value),attrs:{label:e.label,value:parseInt(e.value)}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{prop:"scene"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v("生成场景")]),t("el-select",{model:{value:e.info.scene,callback:function(t){e.$set(e.info,"scene",t)},expression:"info.scene"}},e._l(this.getDictDatas(e.DICT_TYPE.INFRA_CODEGEN_SCENE),(function(e){return t("el-option",{key:parseInt(e.value),attrs:{label:e.label,value:parseInt(e.value)}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 上级菜单 "),t("el-tooltip",{attrs:{content:"分配到指定菜单下，例如 系统管理",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("treeselect",{attrs:{"append-to-body":!0,options:e.menus,normalizer:e.normalizer,"show-count":!0,placeholder:"请选择系统菜单"},model:{value:e.info.parentMenuId,callback:function(t){e.$set(e.info,"parentMenuId",t)},expression:"info.parentMenuId"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{prop:"moduleName"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 模块名 "),t("el-tooltip",{attrs:{content:"模块名，即一级目录，例如 system、infra、tool 等等",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-input",{model:{value:e.info.moduleName,callback:function(t){e.$set(e.info,"moduleName",t)},expression:"info.moduleName"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{prop:"businessName"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 业务名 "),t("el-tooltip",{attrs:{content:"业务名，即二级目录，例如 user、permission、dict 等等",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-input",{model:{value:e.info.businessName,callback:function(t){e.$set(e.info,"businessName",t)},expression:"info.businessName"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{prop:"className"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 类名称 "),t("el-tooltip",{attrs:{content:"类名称（首字母大写），例如SysUser、SysMenu、SysDictData 等等",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-input",{model:{value:e.info.className,callback:function(t){e.$set(e.info,"className",t)},expression:"info.className"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{prop:"classComment"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 类描述 "),t("el-tooltip",{attrs:{content:"用作类描述，例如 用户",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-input",{model:{value:e.info.classComment,callback:function(t){e.$set(e.info,"classComment",t)},expression:"info.classComment"}})],1)],1),"1"===e.info.genType?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{prop:"genPath"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 自定义路径 "),t("el-tooltip",{attrs:{content:"填写磁盘绝对路径，若不填写，则生成到当前Web项目下",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-input",{model:{value:e.info.genPath,callback:function(t){e.$set(e.info,"genPath",t)},expression:"info.genPath"}},[t("el-dropdown",{attrs:{slot:"append"},slot:"append"},[t("el-button",{attrs:{type:"primary"}},[e._v(" 最近路径快速选择 "),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{nativeOn:{click:function(t){e.info.genPath="/"}}},[e._v("恢复默认的生成基础路径")])],1)],1)],1)],1)],1):e._e()],1),t("el-row",{directives:[{name:"show",rawName:"v-show",value:"tree"===e.info.tplCategory,expression:"info.tplCategory === 'tree'"}]},[t("h4",{staticClass:"form-header"},[e._v("其他信息")]),t("el-col",{attrs:{span:12}},[t("el-form-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 树编码字段 "),t("el-tooltip",{attrs:{content:"树显示的编码字段名， 如：dept_id",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.info.treeCode,callback:function(t){e.$set(e.info,"treeCode",t)},expression:"info.treeCode"}},e._l(e.info.columns,(function(e,l){return t("el-option",{key:l,attrs:{label:e.columnName+"："+e.columnComment,value:e.columnName}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 树父编码字段 "),t("el-tooltip",{attrs:{content:"树显示的父编码字段名， 如：parent_Id",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.info.treeParentCode,callback:function(t){e.$set(e.info,"treeParentCode",t)},expression:"info.treeParentCode"}},e._l(e.info.columns,(function(e,l){return t("el-option",{key:l,attrs:{label:e.columnName+"："+e.columnComment,value:e.columnName}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 树名称字段 "),t("el-tooltip",{attrs:{content:"树节点的显示名称字段名， 如：dept_name",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.info.treeName,callback:function(t){e.$set(e.info,"treeName",t)},expression:"info.treeName"}},e._l(e.info.columns,(function(e,l){return t("el-option",{key:l,attrs:{label:e.columnName+"："+e.columnComment,value:e.columnName}})})),1)],1)],1)],1),t("el-row",{directives:[{name:"show",rawName:"v-show",value:"sub"===e.info.tplCategory,expression:"info.tplCategory === 'sub'"}]},[t("h4",{staticClass:"form-header"},[e._v("关联信息")]),t("el-col",{attrs:{span:12}},[t("el-form-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 关联子表的表名 "),t("el-tooltip",{attrs:{content:"关联子表的表名， 如：sys_user",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.subSelectChange},model:{value:e.info.subTableName,callback:function(t){e.$set(e.info,"subTableName",t)},expression:"info.subTableName"}},e._l(e.tables,(function(e,l){return t("el-option",{key:l,attrs:{label:e.tableName+"："+e.tableComment,value:e.tableName}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 子表关联的外键名 "),t("el-tooltip",{attrs:{content:"子表关联的外键名， 如：user_id",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.info.subTableFkName,callback:function(t){e.$set(e.info,"subTableFkName",t)},expression:"info.subTableFkName"}},e._l(e.subColumns,(function(e,l){return t("el-option",{key:l,attrs:{label:e.columnName+"："+e.columnComment,value:e.columnName}})})),1)],1)],1)],1)],1)},n=[],o=(l("b0c0"),l("ca17")),r=l.n(o),s=(l("542c"),{name:"BasicInfoForm",components:{Treeselect:r.a},props:{info:{type:Object,default:null},tables:{type:Array,default:null},menus:{type:Array,default:[]}},data:function(){return{subColumns:[],rules:{templateType:[{required:!0,message:"请选择生成模板",trigger:"blur"}],scene:[{required:!0,message:"请选择生成场景",trigger:"blur"}],frontType:[{required:!0,message:"请选择前端类型",trigger:"blur"}],moduleName:[{required:!0,message:"请输入生成模块名",trigger:"blur"}],businessName:[{required:!0,message:"请输入生成业务名",trigger:"blur"}],businessPackage:[{required:!0,message:"请输入生成业务包",trigger:"blur"}],className:[{required:!0,message:"请输入生成类名称",trigger:"blur"}],classComment:[{required:!0,message:"请输入生成类描述",trigger:"blur"}]}}},created:function(){},watch:{"info.subTableName":function(e){this.setSubTableColumns(e)}},methods:{normalizer:function(e){return e.children&&!e.children.length&&delete e.children,{id:e.id,label:e.name,children:e.children}},subSelectChange:function(e){this.info.subTableFkName=""},tplSelectChange:function(e){if(1!==e)return this.$modal.msgError("暂时不考虑支持【树形】和【主子表】的代码生成。原因是：导致 vm 模板过于复杂，不利于胖友二次开发"),!1;"sub"!==e&&(this.info.subTableName="",this.info.subTableFkName="")},setSubTableColumns:function(e){for(var t in this.tables){var l=this.tables[t].tableName;if(e===l){this.subColumns=this.tables[t].columns;break}}}}}),i=s,u=l("2877"),c=Object(u["a"])(i,a,n,!1,null,null,null);t["default"]=c.exports},a068:function(e,t,l){"use strict";l.r(t);l("b0c0");var a=function(){var e=this,t=e._self._c;return t("el-card",[t("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"基本信息",name:"basic"}},[t("basic-info-form",{ref:"basicInfo",attrs:{info:e.table}})],1),t("el-tab-pane",{attrs:{label:"字段信息",name:"cloum"}},[t("el-table",{ref:"dragTable",attrs:{data:e.columns,"row-key":"columnId","max-height":e.tableHeight}},[t("el-table-column",{attrs:{label:"字段列名",prop:"columnName","min-width":"10%","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"字段描述","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-input",{model:{value:l.row.columnComment,callback:function(t){e.$set(l.row,"columnComment",t)},expression:"scope.row.columnComment"}})]}}])}),t("el-table-column",{attrs:{label:"物理类型",prop:"dataType","min-width":"10%","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"Java类型","min-width":"11%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-select",{model:{value:l.row.javaType,callback:function(t){e.$set(l.row,"javaType",t)},expression:"scope.row.javaType"}},[t("el-option",{attrs:{label:"Long",value:"Long"}}),t("el-option",{attrs:{label:"String",value:"String"}}),t("el-option",{attrs:{label:"Integer",value:"Integer"}}),t("el-option",{attrs:{label:"Double",value:"Double"}}),t("el-option",{attrs:{label:"BigDecimal",value:"BigDecimal"}}),t("el-option",{attrs:{label:"LocalDateTime",value:"LocalDateTime"}}),t("el-option",{attrs:{label:"Boolean",value:"Boolean"}})],1)]}}])}),t("el-table-column",{attrs:{label:"java属性","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-input",{model:{value:l.row.javaField,callback:function(t){e.$set(l.row,"javaField",t)},expression:"scope.row.javaField"}})]}}])}),t("el-table-column",{attrs:{label:"插入","min-width":"4%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-checkbox",{attrs:{"true-label":"true","false-label":"false"},model:{value:l.row.createOperation,callback:function(t){e.$set(l.row,"createOperation",t)},expression:"scope.row.createOperation"}})]}}])}),t("el-table-column",{attrs:{label:"编辑","min-width":"4%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-checkbox",{attrs:{"true-label":"true","false-label":"false"},model:{value:l.row.updateOperation,callback:function(t){e.$set(l.row,"updateOperation",t)},expression:"scope.row.updateOperation"}})]}}])}),t("el-table-column",{attrs:{label:"列表","min-width":"4%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-checkbox",{attrs:{"true-label":"true","false-label":"false"},model:{value:l.row.listOperationResult,callback:function(t){e.$set(l.row,"listOperationResult",t)},expression:"scope.row.listOperationResult"}})]}}])}),t("el-table-column",{attrs:{label:"查询","min-width":"4%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-checkbox",{attrs:{"true-label":"true","false-label":"false"},model:{value:l.row.listOperation,callback:function(t){e.$set(l.row,"listOperation",t)},expression:"scope.row.listOperation"}})]}}])}),t("el-table-column",{attrs:{label:"查询方式","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-select",{model:{value:l.row.listOperationCondition,callback:function(t){e.$set(l.row,"listOperationCondition",t)},expression:"scope.row.listOperationCondition"}},[t("el-option",{attrs:{label:"=",value:"="}}),t("el-option",{attrs:{label:"!=",value:"!="}}),t("el-option",{attrs:{label:">",value:">"}}),t("el-option",{attrs:{label:">=",value:">="}}),t("el-option",{attrs:{label:"<",value:"<>"}}),t("el-option",{attrs:{label:"<=",value:"<="}}),t("el-option",{attrs:{label:"LIKE",value:"LIKE"}}),t("el-option",{attrs:{label:"BETWEEN",value:"BETWEEN"}})],1)]}}])}),t("el-table-column",{attrs:{label:"允许空","min-width":"5%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-checkbox",{attrs:{"true-label":"true","false-label":"false"},model:{value:l.row.nullable,callback:function(t){e.$set(l.row,"nullable",t)},expression:"scope.row.nullable"}})]}}])}),t("el-table-column",{attrs:{label:"显示类型","min-width":"12%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-select",{model:{value:l.row.htmlType,callback:function(t){e.$set(l.row,"htmlType",t)},expression:"scope.row.htmlType"}},[t("el-option",{attrs:{label:"文本框",value:"input"}}),t("el-option",{attrs:{label:"文本域",value:"textarea"}}),t("el-option",{attrs:{label:"下拉框",value:"select"}}),t("el-option",{attrs:{label:"单选框",value:"radio"}}),t("el-option",{attrs:{label:"复选框",value:"checkbox"}}),t("el-option",{attrs:{label:"日期控件",value:"datetime"}}),t("el-option",{attrs:{label:"图片上传",value:"imageUpload"}}),t("el-option",{attrs:{label:"文件上传",value:"fileUpload"}}),t("el-option",{attrs:{label:"富文本控件",value:"editor"}})],1)]}}])}),t("el-table-column",{attrs:{label:"字典类型","min-width":"12%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},model:{value:l.row.dictType,callback:function(t){e.$set(l.row,"dictType",t)},expression:"scope.row.dictType"}},e._l(e.dictOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.type}})})),1)]}}])}),t("el-table-column",{attrs:{label:"示例","min-width":"10%"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-input",{model:{value:l.row.example,callback:function(t){e.$set(l.row,"example",t)},expression:"scope.row.example"}})]}}])})],1)],1),t("el-tab-pane",{attrs:{label:"生成信息",name:"genInfo"}},[t("gen-info-form",{ref:"genInfo",attrs:{info:e.table,tables:e.tables,menus:e.menus}})],1)],1),t("el-form",{attrs:{"label-width":"100px"}},[t("el-form-item",{staticStyle:{"text-align":"center","margin-left":"-100px","margin-top":"10px"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("提交")]),t("el-button",{on:{click:function(t){return e.close()}}},[e._v("返回")])],1)],1)],1)},n=[],o=l("2909"),r=(l("14d9"),l("d3b7"),l("3ca3"),l("ddb0"),l("d81d"),l("a434"),l("4e82"),l("b4c2")),s=l("ed45"),i=l("a6dc"),u=l("f271"),c=l("4e25"),m=l("aa47"),p={name:"GenEdit",components:{basicInfoForm:u["default"],genInfoForm:c["default"]},data:function(){return{activeName:"cloum",tableHeight:document.documentElement.scrollHeight-245+"px",tables:[],columns:[],dictOptions:[],menus:[],table:{}}},created:function(){var e=this,t=this.$route.params&&this.$route.params.tableId;t&&(Object(r["d"])(t).then((function(t){e.table=t.data.table,e.columns=t.data.columns})),Object(s["e"])().then((function(t){e.dictOptions=t.data})),Object(i["e"])().then((function(t){var l;e.menus=[],(l=e.menus).push.apply(l,Object(o["a"])(e.handleTree(t.data,"id")))})))},methods:{submitForm:function(){var e=this,t=this.$refs.basicInfo.$refs.basicInfoForm,l=this.$refs.genInfo.$refs.genInfoForm;Promise.all([t,l].map(this.getFormPromise)).then((function(a){var n=a.every((function(e){return!!e}));if(n){var o={};o.table=Object.assign({},t.model,l.model),o.columns=e.columns,o.params={treeCode:o.treeCode,treeName:o.treeName,treeParentCode:o.treeParentCode,parentMenuId:o.parentMenuId},Object(r["i"])(o).then((function(t){e.$modal.msgSuccess("修改成功！"),e.close()}))}else e.$modal.msgError("表单校验未通过，请重新检查提交内容")}))},getFormPromise:function(e){return new Promise((function(t){e.validate((function(e){t(e)}))}))},close:function(){this.$tab.closeOpenPage({path:"/infra/codegen",query:{t:Date.now(),pageNum:this.$route.query.pageNum}})}},mounted:function(){var e=this,t=this.$refs.dragTable.$el.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];m["default"].create(t,{handle:".allowDrag",onEnd:function(t){var l=e.columns.splice(t.oldIndex,1)[0];for(var a in e.columns.splice(t.newIndex,0,l),e.columns)e.columns[a].sort=parseInt(a)+1}})}},f=p,b=l("2877"),d=Object(b["a"])(f,a,n,!1,null,null,null);t["default"]=d.exports},a6dc:function(e,t,l){"use strict";l.d(t,"d",(function(){return n})),l.d(t,"e",(function(){return o})),l.d(t,"c",(function(){return r})),l.d(t,"a",(function(){return s})),l.d(t,"f",(function(){return i})),l.d(t,"b",(function(){return u}));var a=l("b775");function n(e){return Object(a["a"])({url:"/system/menu/list",method:"get",params:e})}function o(){return Object(a["a"])({url:"/system/menu/list-all-simple",method:"get"})}function r(e){return Object(a["a"])({url:"/system/menu/get?id="+e,method:"get"})}function s(e){return Object(a["a"])({url:"/system/menu/create",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/system/menu/update",method:"put",data:e})}function u(e){return Object(a["a"])({url:"/system/menu/delete?id="+e,method:"delete"})}},b4c2:function(e,t,l){"use strict";l.d(t,"e",(function(){return n})),l.d(t,"d",(function(){return o})),l.d(t,"i",(function(){return r})),l.d(t,"h",(function(){return s})),l.d(t,"g",(function(){return i})),l.d(t,"c",(function(){return u})),l.d(t,"f",(function(){return c})),l.d(t,"a",(function(){return m})),l.d(t,"b",(function(){return p}));var a=l("b775");function n(e){return Object(a["a"])({url:"/infra/codegen/table/page",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/infra/codegen/detail?tableId="+e,method:"get"})}function r(e){return Object(a["a"])({url:"/infra/codegen/update",method:"put",data:e})}function s(e){return Object(a["a"])({url:"/infra/codegen/sync-from-db?tableId="+e,method:"put"})}function i(e){return Object(a["a"])({url:"/infra/codegen/preview?tableId="+e,method:"get"})}function u(e){return Object(a["a"])({url:"/infra/codegen/download?tableId="+e,method:"get",responseType:"blob"})}function c(e){return Object(a["a"])({url:"/infra/codegen/db/table/list",method:"get",params:e})}function m(e){return Object(a["a"])({url:"/infra/codegen/create-list",method:"post",data:e})}function p(e){return Object(a["a"])({url:"/infra/codegen/delete?tableId="+e,method:"delete"})}},ed45:function(e,t,l){"use strict";l.d(t,"f",(function(){return n})),l.d(t,"d",(function(){return o})),l.d(t,"a",(function(){return r})),l.d(t,"g",(function(){return s})),l.d(t,"b",(function(){return i})),l.d(t,"c",(function(){return u})),l.d(t,"e",(function(){return c}));var a=l("b775");function n(e){return Object(a["a"])({url:"/system/dict-type/page",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/system/dict-type/get?id="+e,method:"get"})}function r(e){return Object(a["a"])({url:"/system/dict-type/create",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/system/dict-type/update",method:"put",data:e})}function i(e){return Object(a["a"])({url:"/system/dict-type/delete?id="+e,method:"delete"})}function u(e){return Object(a["a"])({url:"/system/dict-type/export",method:"get",params:e,responseType:"blob"})}function c(){return Object(a["a"])({url:"/system/dict-type/list-all-simple",method:"get"})}},f271:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e._self._c;return t("el-form",{ref:"basicInfoForm",attrs:{model:e.info,rules:e.rules,"label-width":"150px"}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"表名称",prop:"tableName"}},[t("el-input",{attrs:{placeholder:"请输入仓库名称"},model:{value:e.info.tableName,callback:function(t){e.$set(e.info,"tableName",t)},expression:"info.tableName"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"表描述",prop:"tableComment"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.info.tableComment,callback:function(t){e.$set(e.info,"tableComment",t)},expression:"info.tableComment"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{prop:"className"}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 实体类名称 "),t("el-tooltip",{attrs:{content:"默认去除表名的前缀。如果存在重复，则需要手动添加前缀，避免 MyBatis 报 Alias 重复的问题。",placement:"top"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.info.className,callback:function(t){e.$set(e.info,"className",t)},expression:"info.className"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"作者",prop:"author"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.info.author,callback:function(t){e.$set(e.info,"author",t)},expression:"info.author"}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea",rows:3},model:{value:e.info.remark,callback:function(t){e.$set(e.info,"remark",t)},expression:"info.remark"}})],1)],1)],1)],1)},n=[],o={name:"BasicInfoForm",props:{info:{type:Object,default:null}},data:function(){return{rules:{tableName:[{required:!0,message:"请输入表名称",trigger:"blur"}],tableComment:[{required:!0,message:"请输入表描述",trigger:"blur"}],className:[{required:!0,message:"请输入实体类名称",trigger:"blur"}],author:[{required:!0,message:"请输入作者",trigger:"blur"}]}}}},r=o,s=l("2877"),i=Object(s["a"])(r,a,n,!1,null,null,null);t["default"]=i.exports}}]);