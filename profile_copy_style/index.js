var iconMenu = document.getElementById('icon-container-menu');
var profileBG = document.getElementById('profile-bg');
var profileContent = document.getElementById('profile-content');


iconMenu.onclick = function(e) {
  e.currentTarget.classList.toggle('change');
  profileBG.classList.toggle('change');
  profileContent.classList.toggle('change');
}


iconMenu.addEventListener('click', handleClickMenu);