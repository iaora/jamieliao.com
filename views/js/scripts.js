$(document).ready(function(){

  if (location.href == "iaora.github.io/"){
    $('#name').addClass('animated fadeInLeft');
  }else{
    $('#name').addClass('animated fadeOutLeft');

    $('navbar').addClass('animated  fadeInRight');
  }




  function animationHover(element, animation){
    element = $(element);
    element.hover(
      function() {
        element.addClass('animated ' + animation);
      },
      function(){
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
          element.removeClass('animated ' + animation);
        }, 2000);
      }
    );
  };

  function animationClick(element, animation){
    element = $(element);
    element.click(
      function() {
        element.addClass('animated ' + animation);
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
          element.removeClass('animated ' + animation);
        }, 2000);
      }
    );
  };

});
