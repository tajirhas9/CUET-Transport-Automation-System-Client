(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccef37e0"],{"14fd":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r("1da1"),a=r("d4ec"),i=r("bee2"),c=r("262e"),o=r("2caf"),u=(r("7db0"),r("d3b7"),r("b0c0"),r("96cf"),r("9ab4")),s=r("6fc5"),l=r("0613"),d=r("e55c"),p=function(e){Object(c["a"])(r,e);var t=Object(o["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.apply(this,arguments),e.buses=[],e}return Object(i["a"])(r,[{key:"SET_BUSES",value:function(e){this.buses=e}},{key:"getBuses",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d["d"])();case 3:t=e.sent,r=t.data,this.SET_BUSES(r.buses),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),Error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"addNewBus",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d["b"])(t);case 3:return e.next=5,this.getBuses();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateBus",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,r=this.buses.find((function(e){return e.id===t.id})),!r){e.next=8;break}return n={id:t.id,name:t.data.name||r.name,status:t.data.status||r.status},e.next=6,Object(d["e"])(n);case 6:return e.next=8,this.getBuses();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}()}]),r}(s["d"]);Object(u["a"])([s["c"]],p.prototype,"SET_BUSES",null),Object(u["a"])([s["a"]],p.prototype,"getBuses",null),Object(u["a"])([s["a"]],p.prototype,"addNewBus",null),Object(u["a"])([s["a"]],p.prototype,"updateBus",null),p=Object(u["a"])([Object(s["b"])({dynamic:!0,store:l["a"],name:"bus"})],p);var f=Object(s["e"])(p)},"4f6e":function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("1da1"),a=r("d4ec"),i=r("bee2"),c=r("262e"),o=r("2caf"),u=(r("96cf"),r("9ab4")),s=r("6fc5"),l=r("0613"),d=r("b32d"),p=function(e){return Object(d["a"])({url:"/drivers",method:"get",params:e})},f=function(e){Object(c["a"])(r,e);var t=Object(o["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.apply(this,arguments),e.drivers=[],e}return Object(i["a"])(r,[{key:"SET_DRIVERS",value:function(e){this.drivers=e}},{key:"getDrivers",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,r=t.data,this.SET_DRIVERS(r.drivers),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),Error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()}]),r}(s["d"]);Object(u["a"])([s["c"]],f.prototype,"SET_DRIVERS",null),Object(u["a"])([s["a"]],f.prototype,"getDrivers",null),f=Object(u["a"])([Object(s["b"])({dynamic:!0,store:l["a"],name:"driver"})],f);var h=Object(s["e"])(f)},a113:function(e,t,r){"use strict";var n,a=r("1da1"),i=r("d4ec"),c=r("bee2"),o=r("262e"),u=r("2caf"),s=(r("96cf"),r("4de4"),r("d3b7"),r("7db0"),r("b0c0"),r("99af"),r("9ab4")),l=r("1b40"),d=r("d30a"),p=r("66dc"),f=r("5bba"),h=(r("493c"),r("e75d")),b=r("e8ae"),v=r("21a6"),m=r.n(v),x=r("b047"),y=r.n(x),O=r("6b87");(function(e){e[e["Entity"]=1]="Entity",e[e["EntityChild"]=2]="EntityChild",e[e["EntityStock"]=4]="EntityStock",e[e["Model"]=8]="Model",e[e["Driver"]=16]="Driver",e[e["Platform"]=32]="Platform",e[e["PlatformAttr"]=64]="PlatformAttr",e[e["PlatformProtocol"]=128]="PlatformProtocol"})(n||(n={}));var k=function(e){Object(o["a"])(r,e);var t=Object(u["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.dataGridRefKey="",e.gridTableId=-1,e.loadPanelPosition={of:"#gridContainer"},e.listLoading=!1,e.popUpTitleState="New",e.titleLockState=!1,e.editorTypeLockState=!1,e.tableName="",e.isEditorTypeInsert=!0,e.pageSizes=[10,25,50,100],e.clickedRowIdState=-1,e.clearFilterTriggered=null,e.statusOptions=[{id:0,name:"Inactive"},{id:1,name:"Active"}],e}return Object(c["a"])(r,[{key:"getEditAccess",get:function(){return Object(O["a"])()}},{key:"clickedRowId",get:function(){return this.clickedRowIdState},set:function(e){this.clickedRowIdState=e}},{key:"popUpTitle",get:function(){return this.popUpTitleState},set:function(e){this.popUpTitleState=e}},{key:"titleLocked",get:function(){return this.titleLockState},set:function(e){this.titleLockState=e}},{key:"editorTypeLock",get:function(){return this.editorTypeLockState},set:function(e){this.editorTypeLockState=e}},{key:"dataGrid",get:function(){var e=this.dataGridRefKey,t=this.$refs[e];return t.$_instance}},{key:"filterByDriver",value:function(){try{this.dataGrid.filter(["driverid","=",this.driverId])}catch(e){console.error(e)}}},{key:"initFilter",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:void 0!==this.driverId?this.filterByDriver():this.clearFilter();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getLookups",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"clearFilter",value:function(){this.dataGrid.clearFilter();try{this.driverId=void 0}catch(e){console.log(e)}}},{key:"exportGrid",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r="".concat(this.tableName,".xlsx"),n=new b["Workbook"],a=n.addWorksheet("Main sheet"),Object(h["a"])({worksheet:a,component:t.component}).then((function(){n.xlsx.writeBuffer().then((function(e){m.a.saveAs(new Blob([e],{type:"application/octet-stream"}),r)}))})),t.cancel=!0;case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"onEditCanceling",value:function(e){this.titleLocked=!1,this.editorTypeLock=!1}},{key:"onEditorPrepared",value:function(e){var t=this,r=y()((function(e){t.titleLocked||(t.popUpTitle=e,t.titleLocked=!0)}),200),n=y()((function(e){t.editorTypeLock||(t.isEditorTypeInsert=e,t.editorTypeLock=!0),console.log("is editor type insert: ".concat(t.isEditorTypeInsert))}),200);try{e.row.isNewRow?(r("New "+this.tableName),n(!0)):(r("Update "+this.tableName),n(!1))}catch(e){}}},{key:"onInitNewRow",value:function(e){e.data.status=1}},{key:"onToolbarPreparing",value:function(e){var t=this,r=e.toolbarOptions.items.find((function(e){return"groupPanel"===e.name})),n={location:"after",widget:"dxButton",options:{icon:"filter",text:"Clear Filter",onClick:function(){t.clearFilter(),t.clearFilterTriggered=!0}}},a=e.toolbarOptions.items.find((function(e){return"searchPanel"===e.name})),i=e.toolbarOptions.items.find((function(e){return"addRowButton"===e.name})),c=e.toolbarOptions.items.find((function(e){return"columnChooserButton"===e.name})),o=e.toolbarOptions.items.find((function(e){return"exportButton"===e.name}));try{var u=[];c&&u.push(c),n&&u.push(n),a&&u.push(a),r&&u.push(r),i&&u.push(i),u.push(o),e.toolbarOptions.items=u}catch(e){console.log(e)}}},{key:"created",value:function(){this.getLookups()}},{key:"mounted",value:function(){this.initFilter()}},{key:"OnDriverIdChange",value:function(e,t){console.log("[vueDevex mixin] driver id props changed from ".concat(t," to ").concat(e)),e?this.filterByDriver():this.clearFilter()}}]),r}(l["c"]);Object(s["a"])([Object(l["b"])()],k.prototype,"driverId",void 0),Object(s["a"])([Object(l["d"])("driverId")],k.prototype,"OnDriverIdChange",null),k=Object(s["a"])([Object(l["a"])({name:"VueDevex",components:{DxDataGrid:d["DxDataGrid"],DxColumn:d["DxColumn"],DxGrouping:d["DxGrouping"],DxGroupPanel:d["DxGroupPanel"],DxPager:d["DxPager"],DxPaging:d["DxPaging"],DxSearchPanel:d["DxSearchPanel"],DxEditing:d["DxEditing"],DxLookup:d["DxLookup"],DxLoadPanel:f["DxLoadPanel"],DxExport:d["DxExport"],DxPopup:d["DxPopup"],DxForm:d["DxForm"],DxItem:p["DxItem"],DxRequiredRule:d["DxRequiredRule"],DxEmailRule:d["DxEmailRule"],DxPatternRule:d["DxPatternRule"],DxAsyncRule:d["DxAsyncRule"],DxButton:d["DxButton"],DxFilterRow:d["DxFilterRow"],DxMasterDetail:d["DxMasterDetail"],DxColumnChooser:d["DxColumnChooser"],DxSummary:d["DxSummary"],DxTotalItem:d["DxTotalItem"],DxScrolling:d["DxScrolling"]}})],k),t["a"]=k},af097:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("1da1"),a=r("d4ec"),i=r("bee2"),c=r("262e"),o=r("2caf"),u=(r("96cf"),r("9ab4")),s=r("6fc5"),l=r("0613"),d=r("b32d"),p=function(e){return Object(d["a"])({url:"/bus-routes",method:"get",params:e})},f=function(e){Object(c["a"])(r,e);var t=Object(o["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.apply(this,arguments),e.busRoutes=[],e}return Object(i["a"])(r,[{key:"SET_BUS_ROUTES",value:function(e){this.busRoutes=e}},{key:"getRoutes",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,r=t.data,console.log(r),this.SET_BUS_ROUTES(r.routes),e.next=12;break;case 9:throw e.prev=9,e.t0=e["catch"](0),Error(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()}]),r}(s["d"]);Object(u["a"])([s["c"]],f.prototype,"SET_BUS_ROUTES",null),Object(u["a"])([s["a"]],f.prototype,"getRoutes",null),f=Object(u["a"])([Object(s["b"])({dynamic:!0,store:l["a"],name:"busRoutes"})],f);var h=Object(s["e"])(f)},e55c:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"f",(function(){return u})),r.d(t,"e",(function(){return s}));var n=r("b32d"),a=function(e){return Object(n["a"])({url:"/buses",method:"get",params:e})},i=function(e){return Object(n["a"])({url:"/schedule",method:"get",params:e})},c=function(e){return Object(n["a"])({url:"/buses",method:"post",data:e})},o=function(e){return Object(n["a"])({url:"/schedule",method:"post",data:e})},u=function(e){return Object(n["a"])({url:"/schedule",method:"put",data:e})},s=function(e){return Object(n["a"])({url:"/buses",method:"put",data:e})}},faeb:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r("1da1"),a=r("d4ec"),i=r("bee2"),c=r("262e"),o=r("2caf"),u=(r("7db0"),r("d3b7"),r("96cf"),r("9ab4")),s=r("6fc5"),l=r("0613"),d=r("e55c"),p=function(e){Object(c["a"])(r,e);var t=Object(o["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.apply(this,arguments),e.schedule=[],e}return Object(i["a"])(r,[{key:"SET_BUS_SCHEDULE",value:function(e){this.schedule=e}},{key:"getBusSchedules",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d["c"])();case 3:t=e.sent,r=t.data,this.SET_BUS_SCHEDULE(r.schedule),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),Error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"addBusSchedule",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d["a"])(t);case 3:return e.next=5,this.getBusSchedules();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateBusScedule",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,r=this.schedule.find((function(e){return e.id===t.id})),!r){e.next=8;break}return n={id:t.id,bus:t.data.bus||r.bus,driver:t.data.driver||r.driver,route:t.data.busRoute||r.route,datetime:t.data.datetime||r.datetime},e.next=6,Object(d["f"])(n);case 6:return e.next=8,this.getBusSchedules();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}()}]),r}(s["d"]);Object(u["a"])([s["c"]],p.prototype,"SET_BUS_SCHEDULE",null),Object(u["a"])([s["a"]],p.prototype,"getBusSchedules",null),Object(u["a"])([s["a"]],p.prototype,"addBusSchedule",null),Object(u["a"])([s["a"]],p.prototype,"updateBusScedule",null),p=Object(u["a"])([Object(s["b"])({dynamic:!0,store:l["a"],name:"schedule"})],p);var f=Object(s["e"])(p)}}]);