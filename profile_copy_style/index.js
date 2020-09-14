var iconMenu = document.getElementById('icon-container-menu');


var handleClickMenu = function(e) {
  console.log(e.target)
  e.target.classList.toggle('change');
}


iconMenu.addEventListener('click', handleClickMenu);