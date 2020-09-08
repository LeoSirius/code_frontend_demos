
var toolContainer = document.getElementById('toolContainer');

// var toggleArrowClass = function(targetDOM) {
//   if 
// }

var changeToolIcon = function(e) {
  console.log(e.target.classList)
  console.log(e.target.classList);
  e.target.classList.add('arrow')

};
toolContainer.addEventListener('click', changeToolIcon);