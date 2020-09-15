var iconMenu = document.getElementById('icon-container-menu');
// console.log(iconMenu)


iconMenu.onclick = function(e) {
  e.currentTarget.classList.toggle('change');
}


// iconMenu.addEventListener('click', handleClickMenu);