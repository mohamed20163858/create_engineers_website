const speakersArray = [
  {
    name: 'Yochai Benkler',
    title: 'Executive Director of Tech specialist',
    description: 'Musa founded a fellowship with the sole purpose of training aspiring software developers and easing their journey into software development.',
    image: 'images/me.jpeg',
  },
  {
    name: 'Yochai Benkler',
    title: 'Executive Director of Tech specialist',
    description: 'Musa founded a fellowship with the sole purpose of training aspiring software developers and easing their journey into software development.',
    image: 'images/mybro.jpg',
  },
  {
    name: 'Yochai Benkler',
    title: 'Executive Director of Tech specialist',
    description: 'Musa founded a fellowship with the sole purpose of training aspiring software developers and easing their journey into software development.',
    image: 'images/me.jpeg',
  },
];
const featuredSpeakers = document.querySelector('.featured-speakers');
const title = document.createElement('div');
const speakers = document.createElement('div');
title.classList.add('black', 'title');
title.innerHTML = `
<h2>Featured Speakers</h2>
<hr>
`;
speakers.classList.add('speakers');
featuredSpeakers.appendChild(title);
for (let i = 0; i < speakersArray.length; i += 1) {
  const speaker = document.createElement('div');
  const images = document.createElement('div');
  const image = document.createElement('div');
  const info = document.createElement('div');
  speaker.classList.add('speaker');
  images.classList.add('images');
  image.classList.add(`image${i}`);
  image.style.cssText = `
  background-image: url(${speakersArray[i].image});
  background-size: cover;
  width: 100%;
  height: 100%;
  `;
  images.appendChild(image);
  info.classList.add('info');
  const h3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const hr = document.createElement('hr');
  const p2 = document.createElement('p');
  h3.textContent = speakersArray[i].name;
  p1.textContent = speakersArray[i].title;
  p2.textContent = speakersArray[i].description;
  info.appendChild(h3);
  info.appendChild(p1);
  info.appendChild(hr);
  info.appendChild(p2);
  speaker.appendChild(images);
  speaker.appendChild(info);
  speakers.appendChild(speaker);
}
featuredSpeakers.appendChild(speakers);
console.log(featuredSpeakers);