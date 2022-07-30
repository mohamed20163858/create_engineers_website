const speakersArray = [
  {
    name: 'Mohamed Saleh',
    title: 'CEO of Creative Engineers and Company Machine Learning Specialist',
    description: "Mohamed is originally a communication engineer he gained his electrical engineering BA degree in 2016 and a master's degree in computer science from Arizona State University in 2020. Mohamed is a very technical guy who has expertise in various fields: Machine Learning, web development, embedded systems, and RF.",
    image: 'images/me.jpeg',
  },
  {
    name: 'Mostafa Hemada',
    title: 'CTO of Creative Engineers and Company VLSI Specialist',
    description: 'Mostafa is one of the most talented engineers in electronics Digital design he graduated from Zewail City university in 2018 with a BA in nanoelectronics engineering.Mostafa has a very good experience in using Matlab,  Simulink, and synopsis tools',
    image: 'images/mybro.jpg',
  },
  {
    name: 'Ahmed Kamal',
    title: 'Cryptography company specialist',
    description: 'Ahmed Kamal graduated from menoufia university with BA in communication and electronics engineering in 2013 he also got a master degree in communication engineering in 2022. ahmed has a very good expertise in dealing with ciscio devices and has a very good foundation in networking in general beside he has a very good expertise in cryptography and a very active researcher in that field his recent work was inventing new compression encryption scheme technique to be used in IOT devices.',
    image: 'images/kemo.jpg',
  },
  {
    name: 'Mostafa Elhadad',
    title: 'Electrical Power engineering specialist',
    description: 'Mostafa Elhadad graduted from Alexandria university with BA in Electrical Engineering in 2017. Mostafa has a very good Applicaple expertise with dealing with Siemiens devices and programs he also has a very good experience with using PLC, Scada and classical control. he also can literaly mentor building any power system in any scale start from home to big factories!',
    image: 'images/elhadad.jpg',
  },
  {
    name: 'Ahmed Abdelmagid',
    title: 'Networking company specialist',
    description: 'Ahmed graduated from cairo university in 2013 with a BA in communication and electronics engineering. Ahmed has experience with dealing with various technoliges related to different engineering fields he worked with classical control, PLC, RF devices, Cisco devices and iot devices',
    image: 'images/geda.jpg',
  },
  {
    name: 'Omar Alsherbini',
    title: 'backend company specialist',
    description: 'Omar graduated from zewail city in 2018 with a BA in nanotechology engineering and he is now enrolled in a master degree program in university of bolina in italy. Omar is a very active and hard-working engineer he leaded a team of backend enginners in a start up company based in US before he has a very good experince with dealing with backend and frontend tools like docker ,kafka ,php ,elgg framework ,django ,mysql, html ,css, vanilla javascript and react he also has an excellent experience in desgining electronic chips and research work ',
    image: 'images/omar.jpg',
  },
  {
    name: 'Mahmoud Al-Boshnaqi',
    title: 'Mechanical Engineering company specialist',
    description: 'Mahmoud graduated from Alexandria university in 2016 with BA in mechancial enginnering. Mahmoud is our company engine he literally has a professional experience in installing any mechanical devices and mentor them in any scale he is very good also in desgining any mechancial system using mechanical tools like Autocad , Simulink and SolidWorks . he always has his hand dirty in deisging complex systems like robtic arms , 3D printers, quadcopters,..etc he is also very professional in fluid mechanics as well',
    image: 'images/bshbsh.jpg',
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
