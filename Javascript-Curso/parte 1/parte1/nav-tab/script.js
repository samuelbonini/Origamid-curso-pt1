const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.tabcontent section');

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo');
  })
  tabContent[index].classList.add('ativo');
}