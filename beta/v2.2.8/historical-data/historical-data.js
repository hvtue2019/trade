define(["exports","jquery","../windows/windows","../websockets/binary_websockets","moment","text!./historical-data.html","lodash","../instruments/instruments","timepicker","highstock-release/modules/offline-exporting","common/util","webtrader-charts","jquery-ui","css!./historical-data.css"],function(a,b,c,d,e,f,g,h){"use strict";function i(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(a,"__esModule",{value:!0}),a.init=a.createWindow=void 0;var j=i(b),k=i(c),l=(i(d),i(e)),m=i(f),n=i(g),o=null,p=function t(a,b,c){var d=h.getMarketData();if(!d||!d.length)return void n["default"].delay(function(){return t(a,b,c)},1e3);var e="<ul>"+d.map(function(a){return"<li><div>"+a.display_name+"</div><ul>"+a.submarkets.map(function(a){return"<li><div>"+a.display_name+"</div><ul>"+a.instruments.map(function(a){return"<li symbol='"+a.symbol+"'><div>"+a.display_name+"</div></li>"}).join("")+"</ul></li>"}).join("")+"</ul></li>"}).join("")+"</ul>",f=j["default"](e);f.find("li[symbol]").on("click",function(a){var b=j["default"](a.target).text(),d=j["default"](a.target).closest("li").attr("symbol");g.find(".title").text(b),c(d,b)});var g=j["default"]("<div class='instrument-dropdown'><div class='title'>"+b+"</div>");a.closest(".ui-dialog").append(g),g.append(f),f.menu()},q=function(a,b,c){var d=j["default"]('<div class=\'date-time\'>\n                    <input type="text" class="date" tab-index="-1" readonly></input>\n                    <input type="text" class="time" tab-index="-1" value="00:00" readonly></input>\n          </div>');b.closest(".ui-dialog").append(d),d.find(".date").datepicker({changeMonth:!0,numberOfMonths:1,changeYear:!0,dateFormat:"yy-mm-dd",beforeShow:function(b,c){n["default"].delay(function(){return c.dpDiv.css({marginLeft:"-60px",top:d.find(".date").offset().top+32,left:d.find(".date").offset().left,zIndex:1*a.closest(".ui-dialog").css("z-index")+100})})},minDate:l["default"].utc().subtract(1,"years").toDate(),maxDate:l["default"].utc().toDate(),currentText:"Today".i18n()}).datepicker("setDate","0"),d.find(".time").timepicker({showCloseButton:!1,beforeShow:function(a,b){return b.tpDiv.css({marginLeft:"-120px",marginTop:"6px",zIndex:101})},onSelect:function(){j["default"](this).change(),e()}});var e=function(){var a=d.find(".date").val(),b=d.find(".time").val(),e=1*l["default"](a+" "+b+" +0000","YYYY-MM-DD HH:mm Z").unix();c&&c(e)}},r=a.createWindow=function(a){var b=a,c=j["default"](m["default"]);a=j["default"].extend({title:"Historical Data For".i18n(),relativePosition:!0,dialogClass:"historical-data-dialog",close:function(){d.actions.destroy(),j["default"](this).dialog("destroy").remove(),o=null},resize:function(){return d&&d.actions.reflow()},width:700,height:400,open:function(){j["default"](this);j["default"](this).parent().promise().done(function(){return d.actions.reflow()})}},a),o=k["default"].createBlankWindow(c,a);var d=null,e=function(){d&&d.actions.destroy(),d=null,d=WebtraderCharts.chartWindow.addNewChart(c,b),d.actions.reflow(),d.events.anyChange=function(){b=d.data()}};e(),p(c,b.instrumentName,function(a,c){b.instrumentName=c,b.instrumentCode=a,e()}),q(o,c,function(a){b.start=a,e()});o.track({module_id:"historicalData",is_unique:!0,data:null});return o.dialog("open"),o},s=a.init=function(a){a.click(function(){o&&o.moveToTop()||r({instrumentCode:"frxAUDJPY",instrumentName:"AUD/JPY",timePeriod:"1d",type:"candlestick",showInstrumentName:!0,showOverlays:!1,indicators:[],overlays:[],start:1*l["default"].utc().subtract(1,"years").startOf("day").unix()})})};a["default"]={init:s}});