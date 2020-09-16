var iconMenu = document.getElementById('icon-container-menu');
var profileBG = document.getElementById('profile-bg');
var profileContent = document.getElementById('profile-content');
var profileFooter = document.getElementById('profile-footer');


iconMenu.onclick = function(e) {
  iconMenu.classList.toggle('change');
  profileBG.classList.toggle('change');
  profileContent.classList.toggle('change');
  profileFooter.classList.toggle('change');

  if (profileContent.classList.contains('change')) {
    // show profile
  } else {
    // hide profile
  }
}

iconMenu.addEventListener('click', handleClickMenu);
