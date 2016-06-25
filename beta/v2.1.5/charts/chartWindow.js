define(["jquery","windows/windows","text!charts/chartWindow.html","lodash","jquery.dialogextend"],function(a,b,c,d){"use strict";function e(){a(this).find(".chartSubContainer").width(a(this).width()-10),a(this).find(".chartSubContainer").height(a(this).height()-15);var b="#"+a(this).find(".chartSubContainer").attr("id");require(["charts/charts"],function(a){a.triggerReflow(b)})}return{addNewWindow:function(f){var g=f;f=a.extend({title:f.instrumentName+" ("+f.timePeriod+")",close:function(){var b=a(this).attr("id"),c=a("#"+b+"_chart"),d=c.data("timePeriod"),e=c.data("instrumentCode");a(this).dialog("destroy"),require(["charts/charts"],function(a){a.destroy({containerIDWithHash:"#"+b+"_chart",timePeriod:d,instrumentCode:e})})},resize:e},f);var h=b.createBlankWindow(c,f),i=h.attr("id");h.find("div.chartSubContainerHeader").attr("id",i+"_header").end().find("div.chartSubContainer").attr("id",i+"_chart").end(),require(["charts/charts"],function(a){a.drawChart("#"+i+"_chart",f,f.resize.bind(h)),require(["charts/chartOptions","charts/tableView"],function(a,b){var c=b.init(h);a.init(i,f.timePeriod,f.type,c.show,f.instrumentName)})}),g.indicators=g.indicators||[],g.overlays=g.overlays||[];var j=h.track({module_id:"chartWindow",is_unique:!1,data:g});return h.on("chart-type-changed",function(a,b){g.type=b,j(g)}),h.on("chart-indicators-changed",function(a,b){g.indicators=b.get_indicators(),j(g)}),h.on("chart-overlay-add",function(a,b){g.overlays.push(b),j(g)}),h.on("chart-overlay-remove",function(a,b){d.remove(g.overlays,b),j(g)}),h.dialog("open"),h},totalWindows:function(){return a("div.webtrader-dialog").length},triggerResizeEffects:function(a){e.call(a)}}});