const menu = document.querySelector('.home .landing-page img');
const home = document.querySelector('.home');
const footer = document.querySelector('footer');
const ul = document.createElement('ul');
ul.classList.add('menu-decoration', 'hidden');
ul.innerHTML = `
<img src="images/Close.png" alt="close-icon">
<li><a href="index.html">Home</a></li>
<li><a href="about.html">About</a></li>
<li><a href="index.html">Program</a></li>
<li><a href="index.html">Sponsors</a></li>
<li><a href="index.html">News</a></li>
<li><a href="index.html">Campaign</a></li>
`;
document.body.appendChild(ul);
function addMenu() {
  ul.classList.remove('hidden');
  home.classList.add('hidden');
  footer.classList.add('hidden');
}
function removeMenu() {
  ul.classList.add('hidden');
  home.classList.remove('hidden');
  footer.classList.remove('hidden');
}

function menuAction() {
  addMenu();
  const closeTab = document.querySelector('.menu-decoration img');
  const listItems = document.querySelectorAll('.menu-decoration li');
  for (let i = 0; i < listItems.length; i += 1) {
    const li = listItems[i];
    li.addEventListener('click', removeMenu);
  }
  closeTab.addEventListener('click', removeMenu);
}
menu.addEventListener('click', menuAction);
