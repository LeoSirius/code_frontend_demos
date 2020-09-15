var iconMenu = document.getElementById('icon-container-menu');
var profileBG = document.getElementById('profile-bg');


iconMenu.onclick = function(e) {
  e.currentTarget.classList.toggle('change');
  profileBG.classList.toggle('change');
}


iconMenu.addEventListener('click', handleClickMenu);