$(document).ready(function(){

  var hash;

  if (location.hash == ''){
    $('#name').addClass('animated fadeInLeft');
    $('#frontabout').addClass('animated fadeInUp');
    $('#frontprojects').addClass('animated fadeInUp');
    $('#frontexperience').addClass('animated fadeInUp');
    $('#frontresume').addClass('animated fadeInUp');
  }


  if(location.hash == "#about"){
    console.log("hi");
    setTimeout(function() {
      $('#about').css('display', 'block');
      $('#about').addClass('animated fadeInRight');
    }, 0);
  }else if(location.hash == "projects"){

  }else if(location.hash == "#experience"){

  }else{}
 


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
  
function moveMain(){
    $('#name').removeClass('fadeInLeft').addClass('animated fadeOutRight');
    $('#row').addClass('animated fadeOutDown');
    //$('#frontprojects').addClass('animated fadeOutDown');
    //$('#frontexperience').addClass('animated fadeOutDown');
    //$('#frontresume').addClass('animated fadeOutDown');

    setTimeout(function() {
      $('#bar').css('display', 'block');
      $('#navbar').addClass('animated fadeInRight');
    }, 0);
    
    setTimeout(function(){
      $('#name').css('display', 'none');
      $('#row').css('display', 'none');
    }, 700);
};
