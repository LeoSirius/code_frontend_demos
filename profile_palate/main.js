
var toolContainer = document.getElementById('toolContainer');


var angle = 0;

var toggleArrowClass = function(e) {
  angle += 180;
  e.target.style.transform = 'rotate(' + angle + 'deg)';
  console.log('e.target.style.transform = ', e.target.style.transform)
  e.target.style.transition = 'all 0.5s';

  if (e.target.classList.contains('arrow')) {
    e.target.classList.remove('arrow');
  } else {
    e.target.classList.add('arrow');
  }
};
toolContainer.addEventListener('click', toggleArrowClass);