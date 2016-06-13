$(document).ready(function(){

  if (location.href == "http://iaora.github.io/"){
    $('#name').addClass('animated bounceIn');
  }

  animationClick('#about', 'tada');
  animationClick('#projects', 'tada');
  animationClick('#experience', 'tada');

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
