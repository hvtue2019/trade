define(["jquery","jquery-ui","color-picker"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,e){var f=function(a,b,c,d){this.level=a,this.stroke=b,this.strokeWidth=c,this.dashStyle=d};require(["text!charts/indicators/bop/bop_level.html"],function(g){var h="#cd0a0a";g=a(g),g.appendTo("body"),g.find("input[type='button']").button(),g.find("#bop_level_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#bop_level_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted},ok:function(b,c){a("#bop_level_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted}}),g.dialog({autoOpen:!1,resizable:!1,width:280,modal:!0,my:"center",at:"center",of:window,buttons:[{text:"Ok",click:function(){return isNumericBetween(g.find(".bop_level_input_width_for_level").val(),parseInt(g.find(".bop_level_input_width_for_level").attr("min")),parseInt(g.find(".bop_level_input_width_for_level").attr("max")))?(d&&d([new f(parseFloat(g.find(".bop_level_input_width_for_level").val()),h,parseInt(g.find("#bop_level_strokeWidth").val()),g.find("#bop_level_dashStyle").val())]),void b.call(g)):void require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+g.find(".bop_level_input_width_for_level").attr("min")+" to "+g.find(".bop_level_input_width_for_level").attr("max")+" is allowed for "+g.find(".bop_level_input_width_for_level").closest("tr").find("td:first").text()+"!"})})}},{text:"Cancel",click:function(){b.call(this)}}]}),a.isFunction(e)&&e(c,d)})}var d=void 0;return{open:function(b,e){return d=e,0==a(".bop_level").length?void c(b,this.open):void a(".bop_level").dialog("open")}}});