
var toolContainer = document.getElementById('toolContainer');
var whiteBg = document.getElementById('whiteBg');
console.log(whiteBg)


var angle = 0;

var toggleArrowClass = function(e) {
  angle += 180;
  e.target.style.transform = 'rotate(' + angle + 'deg)';
  e.target.style.transition = 'all 0.5s';


  if (e.target.classList.contains('arrow')) {
    // remove arrow and white bg and icons

    e.target.style.background = "url(./icons/three-lines.png) no-repeat";
    e.target.style.backgroundSize = "100%";
    e.target.classList.remove('arrow');

    whiteBg.style.opacity = "0";
  } else {
    // show arrow and white bg and icons

    e.target.style.background = "url(./icons/arrow.png) no-repeat";
    e.target.style.backgroundSize = "100%";
    e.target.classList.add('arrow');

    whiteBg.style.opacity = "0.8";
  }

};


toolContainer.addEventListener('click', toggleArrowClass);