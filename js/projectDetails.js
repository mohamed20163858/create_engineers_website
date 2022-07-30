const projectsArray = [
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    'featured image': ['images/projectDesktop.png', 'images/projectMobile.jpeg'],
    technologies: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
    'link to source': 'https://github.com/mohamed20163858/my-portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    'featured image': ['images/projectDesktop.png', 'images/projectMobile.jpeg'],
    technologies: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
    'link to source': 'https://github.com/mohamed20163858/my-portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    'featured image': ['images/projectDesktop.png', 'images/projectMobile.jpeg'],
    technologies: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
    'link to source': 'https://github.com/mohamed20163858/my-portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    'featured image': ['images/projectDesktop.png', 'images/projectMobile.jpeg'],
    technologies: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
    'link to source': 'https://github.com/mohamed20163858/my-portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    'featured image': ['images/projectDesktop.png', 'images/projectMobile.jpeg'],
    technologies: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
    'link to source': 'https://github.com/mohamed20163858/my-portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    'featured image': ['images/projectDesktop.png', 'images/projectMobile.jpeg'],
    technologies: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
    'link to source': 'https://github.com/mohamed20163858/my-portfolio',
  },
];
const portfolio = document.querySelector('#portoflio');
const popup = document.createElement('div');
const main1 = document.querySelector('main');
const header1 = document.querySelector('header');
popup.classList.add('project-pop-up-window');
let index;
popup.innerHTML = `
        <div>
            <img src="images/closeDesktop.png" alt="close-icon">
            <div class="close-item">
                <img src="images/closeWhite.png" alt="close-icon">
            </div>
            <h2></h2>
            <ul>
            </ul>
            <p></p>
            <div class="buttons">
                <button type="submit" class="button-style">See Live <img src="images/live.png" alt="live-icon"></button>
                <button type="submit" class="button-style">See Source <img src="images/githubWhite.png" alt="github-icon"></button>
            </div>
    `;
popup.classList.add('hidden');
document.body.appendChild(popup);
function addPopupWindow() {
  popup.classList.remove('hidden');
  main1.style.opacity = 0.1;
  header1.style.opacity = 0.1;
}
function closePopupWindow() {
  popup.classList.add('hidden');
  main1.style.opacity = 1;
  header1.style.opacity = 1;
}
function redirectLive() {
  window.location.href = projectsArray[index]['link to live version'];
}

function redirectSource() {
  window.location.href = projectsArray[index]['link to source'];
}
function checkWindowSize() {
  const backgroundImage = document.querySelector('.project-pop-up-window .close-item');
  if (window.innerWidth < 768) {
    backgroundImage.style.backgroundImage = `url(${projectsArray[index]['featured image'][1]})`;
  } else {
    backgroundImage.style.backgroundImage = `url(${projectsArray[index]['featured image'][0]})`;
  }
}
function popupWindowAction() {
  addPopupWindow();
  const h2 = document.querySelector('.project-pop-up-window h2');
  const p = document.querySelector('.project-pop-up-window p');
  const ulPopup = document.querySelector('.project-pop-up-window ul');
  const backgroundImage = document.querySelector('.project-pop-up-window .close-item');
  const button1 = document.querySelector('.project-pop-up-window .buttons button:first-of-type');
  const button2 = document.querySelector('.project-pop-up-window .buttons button:last-of-type');
  const x = matchMedia('(max-width: 767px)');
  if (x.matches) {
    backgroundImage.style.backgroundImage = `url(${projectsArray[index]['featured image'][1]})`;
  } else {
    backgroundImage.style.backgroundImage = `url(${projectsArray[index]['featured image'][0]})`;
  }
  h2.textContent = projectsArray[index].name;
  p.textContent = projectsArray[index].description;
  ulPopup.innerHTML = '';
  for (let j = 0; j < projectsArray[index].technologies.length; j += 1) {
    const li = document.createElement('li');
    li.textContent = projectsArray[index].technologies[j];
    ulPopup.appendChild(li);
  }
  const close1 = document.querySelector('.project-pop-up-window > div > img');
  const close2 = document.querySelector('.project-pop-up-window > div > div > img');
  close1.addEventListener('click', closePopupWindow);
  close2.addEventListener('click', closePopupWindow);
  button1.addEventListener('click', redirectLive);
  button2.addEventListener('click', redirectSource);
  window.addEventListener('resize', checkWindowSize);
}
for (let i = 0; i < projectsArray.length; i += 1) {
  index = i;
  const card = document.createElement('div');
  const cardDetials = document.createElement('div');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');
  const button = document.createElement('button');
  button.classList.add('button-style');
  button.textContent = 'See Project';
  card.classList.add('card', 'container-2');
  cardDetials.classList.add('project-details');
  h3.textContent = projectsArray[i].name;
  for (let j = 0; j < projectsArray[i].technologies.length; j += 1) {
    const li = document.createElement('li');
    li.textContent = projectsArray[i].technologies[j];
    ul.appendChild(li);
  }
  cardDetials.appendChild(h3);
  cardDetials.appendChild(ul);
  cardDetials.appendChild(button);
  card.appendChild(cardDetials);
  portfolio.appendChild(card);
  button.addEventListener('click', popupWindowAction);
}