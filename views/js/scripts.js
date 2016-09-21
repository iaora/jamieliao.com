$(document).ready(function(){

  if (location.hash == ''){
    $('#front-name').hide();
    $('#front-button').hide();
    $('#about').hide();
    $('#projects').hide();
    $('#experience').hide();

    $('#bar').hide();
    $('#menu').hide();

    setTimeout(function(){
      $('#front-name').show();
      $('#front-name').addClass('animated fadeIn');
    }, 500);
    setTimeout(function(){
      $('#front-button').show();
      $('#front-button').addClass('animated fadeIn');
    }, 1000);

  }else{
    $('#frontcontent').hide();
    $('#row-front').hide();
    $('#bar').css('display', 'block');
  }

  if(location.hash == "#about"){
    $('#about').show();
  }else if(location.hash == "#projects"){
    $('#projects').show();
  }else if(location.hash == "#experience"){
    $('#experience').show();
  }else{
    //error 404

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
  
function moveMain(){
    $('#frontcontent').removeClass('fadeIn').addClass('animated fadeOut');
    $('#row-front').addClass('animated fadeOutDown');
    //$('#frontprojects').addClass('animated fadeOutDown');
    //$('#frontexperience').addClass('animated fadeOutDown');
    //$('#frontresume').addClass('animated fadeOutDown');

    setTimeout(function() {
      $('#bar').css('display', 'block');
      $('#navbar').addClass('animated fadeInRight');
    }, 0);
    
    setTimeout(function(){
      $('#front-name').css('display', 'none');
      $('#front-button').css('display', 'none');
      $('#row-front').css('display', 'none');
    }, 300);
};


function loadAbout(){
  hideProjects();
  hideExperience();
  setTimeout(function() {
    $('#about').show();
    $('#about').css('display', 'block');
    $('#about').removeClass('fadeOut').addClass('animated fadeIn');
  }, 500);
};

function hideAbout(){
  $('#about').removeClass('fadeIn').addClass('fadeOut');
  setTimeout(function() {
    $('#about').hide();
  }, 500);
};

function loadProjects(){
  hideAbout();
  hideExperience();
  setTimeout(function() {
    $('#projects').show();
    $('#projects').css('display', 'block');
    $('#projects').removeClass('fadeOut').addClass('animated fadeIn');
  }, 500);

};

function hideProjects(){
    $('#projects').removeClass('fadeIn').addClass('fadeOut');
  setTimeout(function() {
    $('#projects').hide();
  }, 500);
};


function loadExperience(){
  hideAbout();
  hideProjects();
  setTimeout(function() {
    $('#experience').show();
    $('#experience').css('display', 'block');
    $('#experience').removeClass('fadeOut').addClass('animated fadeIn');
  }, 500);

};

function hideExperience(){
    $('#experience').removeClass('fadeIn').addClass('fadeOut');
  setTimeout(function() {
    $('#experience').hide();
  }, 500);
};
