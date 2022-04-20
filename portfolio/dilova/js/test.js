/**
 * Created by roman_000 on 11.03.2016.
 */
jQuery(document).ready(function(){
//    $("#slider").slider({
//        min: 0,
//        max: 1000,
//        values: [0,1000],
//        range: true,
//        stop: function(event, ui) {
//            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
//            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
//
//        },
//        slide: function(event, ui){
//            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
//            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
//        }
//    });
//
//    $("input#minCost").change(function(){
//
//        var value1=jQuery("input#minCost").val();
//        var value2=jQuery("input#maxCost").val();
//
//        if(parseInt(value1) > parseInt(value2)){
//            value1 = value2;
//            jQuery("input#minCost").val(value1);
//        }
//        jQuery("#slider").slider("values",0,value1);
//    });
//
//
//    $("input#maxCost").change(function(){
//
//        var value1=jQuery("input#minCost").val();
//        var value2=jQuery("input#maxCost").val();
//
//        if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}
//
//        if(parseInt(value1) > parseInt(value2)){
//            value2 = value1;
//            jQuery("input#maxCost").val(value2);
//        }
//        jQuery("#slider").slider("values",1,value2);
//    });
//
//
//
//// фильтрация ввода в поля
//    $('input').keypress(function(event){
//        var key, keyChar;
//        if(!event) var event = window.event;
//
//        if (event.keyCode) key = event.keyCode;
//        else if(event.which) key = event.which;
//
//        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
//        keyChar=String.fromCharCode(key);
//
//        if(!/\d/.test(keyChar))	return false;
//
//    });
//    $(function() {
//        $( "#slider-range" ).slider({
//            range: true,
//            min: 0,
//            max: 500,
//            values: [ 75, 300 ],
//            slide: function( event, ui ) {
//                $("#amount1" ).val( ui.values[ 0 ]);
//                $("#amount2").val(ui.values[ 1 ]);
//            }
//        });
//        //$( "#amount" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ) +
//        //    " - до " + $( "#slider-range" ).slider( "values", 1 ) + " руб.");
//    });
//    $("#amount2").change(function(){
//        var value1=$("#amount1").val();
//        var value2=$("#amount2").val();
//        if (value2 > 500) { value2 = 500; $("#amount2").val(500)}
//        if(parseInt(value1) > parseInt(value2)){
//            value2 = value1;
//            $("#amount2").val(value2);
//        }
//        $("#slider-range").slider("values",1,value2);
//    });
//
//    $("#amount1").change(function(){
//        var value1=$("#amount1").val();
//        var value2=$("#amount2").val();
//        if (value2 > 500) { value2 = 500; $("#amount2").val(500)}
//        if(parseInt(value1) > parseInt(value2)){
//            value1 = value2;
//            $("#amount1").val(value1);
//        }
//        $("#slider-range").slider("values",0,value1);
//    });
    $( "div#range-slider" ).rangeslider();
});