$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
    $("i",this).toggleClass("glyphicon-chevron-left glyphicon-chevron-right");
  });
  
$('.navbar-collapse .dropdown li a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
  
});