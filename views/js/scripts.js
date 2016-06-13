$(document).ready(function(){

  if (location.hash == ''){
    $('#name').addClass('animated fadeInLeft');
    $('#frontabout').addClass('animated fadeInUp');
    $('#frontprojects').addClass('animated fadeInUp');
    $('#frontexperience').addClass('animated fadeInUp');
    $('#frontresume').addClass('animated fadeInUp');
  }else{
    $('#name').addClass('animated fadeOutRight');
    $('#frontabout').addClass('animated fadeOutDown');
    $('#frontprojects').addClass('animated fadeOutDown');
    $('#frontexperience').addClass('animated fadeOutDown');
    $('#frontresume').addClass('animated fadeOutDown');
    
    $('#navbar').delay(800).css('display', 'initial');
    $('#navbar').delay(900).addClass('animated fadeInRight');
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
