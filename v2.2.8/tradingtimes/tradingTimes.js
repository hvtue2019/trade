define(["exports","jquery","windows/windows","websockets/binary_websockets","navigation/menu","lodash","moment","../common/marketUtils","datatables","jquery-growl"],function(a,b,c,d,e,f,g,h){"use strict";function i(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(a,"__esModule",{value:!0}),a.init=void 0;var j=i(b),k=i(c),l=i(d),m=i(e),n=(i(f),i(g)),o=null,p=null,q=function(a){a=a||[];var b=[],c={};return a.filter(function(a){var b=(local_storage.get("authorize")||{}).loginid||"";return/MF/gi.test(b)&&"Volatility Indices"!==a.name||/MLT/gi.test(b)&&"Volatility Indices"===a.name||/MX/gi.test(b)&&"Volatility Indices"===a.name||!/MF/gi.test(b)&&!/MLT/gi.test(b)&&!/MX/gi.test(b)}).forEach(function(a){b.push(a.display_name),c[a.display_name]=[],a.submarkets.forEach(function(b){return c[a.display_name].push(b.display_name)})}),{market_names:b,submarket_names:c,getRowsFor:function(b,c){var d=a.filter(function(a){return a.display_name==b})[0],e=d&&d.submarkets.filter(function(a){return a.display_name==c})[0].instruments,f=(e||[]).map(function(a){return[a.display_name,a.times.open[0],a.times.close[0],a.times.settlement||a.settlement||"-",a.events&&a.events.length>0?a.events.map(function(a){var b=a.descrip,c=a.dates;return b+": "+c}).join("<br>"):"-"]});return f}}},r=a.init=function(a){require(["css!tradingtimes/tradingTimes.css"]),a.click(function(){p?p.moveToTop():(p=k["default"].createBlankWindow(j["default"]("<div/>"),{title:"Trading Times".i18n(),dialogClass:"tradingTimes",width:800,height:400}),p.track({module_id:"tradingTimes",is_unique:!0,data:null}),p.dialog("open"),require(["text!tradingtimes/tradingTimes.html"],s))})},s=function(a){a=j["default"](a).i18n();var b=a.filter(".trading-times-sub-header");o=a.filter("table"),a.appendTo(p),o=o.dataTable({data:[],columnDefs:[{className:"dt-body-center dt-header-center",targets:[0,1,2,3,4]}],paging:!1,ordering:!1,searching:!0,processing:!0}),o.parent().addClass("hide-search-input"),o.api().columns().every(function(){var a=this;j["default"]("input",this.header()).on("keyup change",function(){a.search()!==this.value&&a.search(this.value).draw()})});var c=null,d=null,e=null,f=function(a){var f=function(a,b,c){var d=a.getRowsFor(b,c);o.api().rows().remove(),o.api().rows.add(d),o.api().draw()},g=function(a){function g(){var a=j["default"](this).val();n[a]&&d.update_list(Object.keys(n[a])),f(i,c.val(),d.val())}var i=q(m["default"].extractFilteredMarkets(a[0])),l=local_storage.get("active_symbols"),n=h.getMarketsSubmarkets(l),o=h.getOrderedMarkets(l);if(!j["default"].isEmptyObject(n)){if(null==c){var p=j["default"]("<select />");p.appendTo(b),c=k["default"].makeSelectmenu(p,{list:o,inx:0}),c.off("selectmenuchange",g),c.on("selectmenuchange",g)}else c.update_list(o),c.off("selectmenuchange",g),c.on("selectmenuchange",g);if(null==d){var r=j["default"]("<select />");r.appendTo(b),d=k["default"].makeSelectmenu(r,{list:Object.keys(n[c.val()]),inx:0,changed:e}),d.off("selectmenuchange",g),d.on("selectmenuchange",g)}else d.update_list(Object.keys(n[c.val()])),d.off("selectmenuchange",g),d.on("selectmenuchange",g);f(i,c.val(),d.val())}},i=function(){var b={trading_times:a},c=j["default"]("#"+o.attr("id")+"_processing");c.show(),Promise.all([l["default"].cached.send(b)]).then(function(a){g(a),c.hide()})["catch"](function(a){j["default"].growl.error({message:a.message}),c.hide()})};i(),require(["websockets/binary_websockets"],function(a){a.events.on("login",i),a.events.on("logout",i)})};f(n["default"].utc().format("YYYY-MM-DD"));var g=n["default"].utc().add(1,"years").toDate();p.addDateToHeader({title:"Date: ",date:n["default"].utc().toDate(),changed:f,maxDate:g})};a["default"]={init:r}});