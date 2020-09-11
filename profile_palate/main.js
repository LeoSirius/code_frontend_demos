
var toolContainer = document.getElementById('toolContainer');
var whiteBg = document.getElementById('whiteBg');
var iconGithub = document.getElementById('iconGithub');

var angle = 0;

var toggleArrowClass = function(e) {
  angle += 180;
  e.target.style.transform = 'rotate(' + angle + 'deg)';
  e.target.style.transition = 'all 0.5s';


  if (e.target.classList.contains('arrow')) {
    // close and hide icon

    e.target.style.background = "url(./icons/three-lines.png) no-repeat";
    e.target.style.backgroundSize = "100%";
    e.target.classList.remove('arrow');

    whiteBg.style.opacity = "0";

    // iconGithub.style.animationDirection = 'reverse'
    iconGithub.style.animation = "icon-fly-github 0.5s linear reverse forwards";
  } else {
    // open and show icon

    e.target.style.background = "url(./icons/arrow.png) no-repeat";
    e.target.style.backgroundSize = "100%";
    e.target.classList.add('arrow');

    whiteBg.style.opacity = "0.8";

    iconGithub.style.animation = "icon-fly-github 0.5s linear forwards";
    // iconGithub.style.animationDirection = ''
    // iconGithub.style.animationFillMode = 'forwards';
    // iconGithub.style.visibility = 'visible';

  }

};


toolContainer.addEventListener('click', toggleArrowClass);