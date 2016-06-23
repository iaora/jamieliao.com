$(document).ready(function(){

  if (location.hash == ''){
    $('#name').addClass('animated fadeIn').arctext({radius: 300});
    $('#image-cropper').addClass('animated fadeIn');
    $('#schooltitle').addClass('animated fadeIn').arctext({radius: 300, dir: -1});
    $('#frontabout').addClass('animated fadeInUp');
    $('#frontprojects').addClass('animated fadeInUp');
    $('#frontexperience').addClass('animated fadeInUp');
    $('#frontresume').addClass('animated fadeInUp');
  }else{
    $('#name').hide();
    $('#schooltitle').hide();
    $('#image-cropper').hide();
    $('#row').hide();
    $('#frontabout').hide();
    $('#frontprojects').hide();
    $('#frontexperience').hide();
    $('#frontresume').hide();
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
    $('#name').removeClass('fadeIn').addClass('animated fadeOut');
    $('#schooltitle').removeClass('fadeIn').addClass('animated fadeOut');
    $('#image-cropper').removeClass('fadeIn').addClass('animated fadeOut');
    $('#row').addClass('animated fadeOutDown');
    $('#name').hide();
    $('#schooltitle').hide();
    $('#image-cropper').hide();
    $('#row').hide();
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
