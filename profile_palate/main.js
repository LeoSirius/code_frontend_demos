
var toolContainer = document.getElementById('toolContainer');

// var toggleArrowClass = function(targetDOM) {
//   if 
// }

var toggleArrowClass = function(e) {
  e.target.style.transform = 'rotate(-180deg)';

  if (e.target.classList.contains('arrow')) {
    e.target.classList.remove('arrow');
  } else {
    e.target.classList.add('arrow');
  }
};
toolContainer.addEventListener('click', toggleArrowClass);