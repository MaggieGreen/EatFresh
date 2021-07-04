$(document).ready(function(){

    // $("#switch")
    //     .button()
    //     .click(function(){
    //
    //         $("#panel").toggle("slide");
    //     });
});

$(".toggle").click(function() {
    $(this).toggleClass("on");
    // $(".menuShow").slideToggle();
});

$( function() {
    $( ".menu" ).menu();

    // $( "#number" )
    //     .selectmenu()
    //     .selectmenu( "menuWidget" )
    //     .addClass( "overflow" );

    $( "#tabs" ).tabs();

    $( "#datepicker" ).datepicker();

    $( "#tabsB" ).tabs();

    $( ".datepicker" ).datepicker();
} );


// $( function() {
//     $( "#datepicker" ).datepicker();
// } );
//
// $( function() {
//     $( "#tabs" ).tabs();
// } );


