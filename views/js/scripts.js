$(document).ready(function(){

  animationClick('#name', 'zoomIn');

  function animationClick(element, animation){
    element = $(element);
    element.click(
      function() {
        element.addClass('animated ' + animation);
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
          element.removeClass('animated ' + animation);
        }, 2000);
      });
  }
)};
