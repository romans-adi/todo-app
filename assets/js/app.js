// BURGER

const topNav = document.querySelector('.top-navigation');
const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav-link');
const wrapper = document.getElementById('wrapper');
const burgerLineTop = document.querySelector('.burger-line-top');
const burgerLineBottom = document.querySelector('.burger-line-bottom');

function toggleBurger() {
  const width = window.innerWidth;
  const visibility = topNav.getAttribute('data-visible');
  if (visibility === 'false' && width < 768) {
    navToggle.setAttribute('aria-expanded', true);
    topNav.setAttribute('data-visible', true);
    topNav.setAttribute('aria-expanded', true);
    wrapper.className = 'wrapper inactive';
    burgerLineBottom.style.y = ('45');
    burgerLineTop.style.y = ('45');
  } else if (visibility === 'true') {
    navToggle.setAttribute('aria-expanded', false);
    topNav.setAttribute('data-visible', false);
    topNav.setAttribute('aria-expanded', false);
    wrapper.className = 'wrapper';
    burgerLineBottom.style.y = ('20');
    burgerLineTop.style.y = ('80');
  }
}

wrapper.addEventListener('click', () => {
  const visibility = topNav.getAttribute('data-visible');
  if (visibility === 'true') {
    toggleBurger();
  }
});

navToggle.addEventListener('click', () => {
  toggleBurger();
});

navLink.forEach((navLink) => navLink.addEventListener('click', () => {
  toggleBurger();
}));

// CREATING OBJECT

const container = document.getElementById('projects-set');

const projects = [
  {
    id: 1,
    prName: 'Portfolio',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    mobileImg: 'assets/img/modal-illustration.png',
    desktopImg: 'assets/img/modal-bg-desktop.png',
    mobileImgWebP: 'assets/img/modal-illustration.webp',
    desktopImgWebP: 'assets/img/modal-bg-desktop.webp',
    technologies: ['CSS', 'JavaScript', 'HTML'],
    liveVersion: 'https://romans-adi.github.io/',
    source: 'https://github.com/romans-adi/romans-adi.github.io',
  },

  {
    id: 2,
    prName: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    mobileImg: 'assets/img/modal-illustration.png',
    desktopImg: 'assets/img/modal-bg-desktop.png',
    mobileImgWebP: 'assets/img/modal-illustration.webp',
    desktopImgWebP: 'assets/img/modal-bg-desktop.webp',
    technologies: ['Ruby on Rail', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    prName: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    mobileImg: 'assets/img/modal-illustration.png',
    desktopImg: 'assets/img/modal-bg-desktop.png',
    mobileImgWebP: 'assets/img/modal-illustration.webp',
    desktopImgWebP: 'assets/img/modal-bg-desktop.webp',
    technologies: ['Ruby on Rail', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    prName: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    mobileImg: 'assets/img/modal-illustration.png',
    desktopImg: 'assets/img/modal-bg-desktop.png',
    mobileImgWebP: 'assets/img/modal-illustration.webp',
    desktopImgWebP: 'assets/img/modal-bg-desktop.webp',
    technologies: ['Ruby on Rail', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    prName: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    mobileImg: 'assets/img/modal-illustration.png',
    desktopImg: 'assets/img/modal-bg-desktop.png',
    mobileImgWebP: 'assets/img/modal-illustration.webp',
    desktopImgWebP: 'assets/img/modal-bg-desktop.webp',
    technologies: ['Ruby on Rail', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 6,
    prName: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    mobileImg: 'assets/img/modal-illustration.png',
    desktopImg: 'assets/img/modal-bg-desktop.png',
    mobileImgWebP: 'assets/img/modal-illustration.webp',
    desktopImgWebP: 'assets/img/modal-bg-desktop.webp',
    technologies: ['Ruby on Rail', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },
];

// CREATING CARDS

projects.forEach((project) => {
  const card = document.createElement('div');
  card.classList = 'project-card';
  const content = `
<div class="project-card relative" id="${project.id}">
<picture class="placeholder-img">
<source srcset="${project.mobileImgWebP}" type="image/webp" />
<source srcset="${project.mobileImg}" type="image/png" />
<img src="${project.mobileImg}" width="100%" alt="project-screenshot"
  class="project-screenshot project-0">
</picture>
<div class="project-card-content">
<h3 class="project-card-heading">${project.prName}</h3>
<ul id="tools-list" class="tools-list px-5">
${project.technologies.map((tool) => `<li class="tool">${tool}</li>`).join('')}
</ul>
<button type="button" data-modal="modal-one" class="btn-success btn-see-project btn-open">See Project</button>
</div>
</div>
<div class="modal" id="modal-one">
<button class="modal-toggle btn-close">
<svg class="modal-close" viewBox="0 0 50 50" width="14" height="14">
   <line x1="0" y1="0" x2="50" y2="50" />
   <line x1="50" y1="0" x2="0" y2="50" />
</svg>
</button>
  <div class="modal-bg modal-exit"></div>
  <div class="modal-container">
<div class="img-container">
<img class="modal-mobile-img" src="${project.mobileImg}" alt="modal-illustration">
<img class="modal-desktop-img"  src="${project.desktopImg}" alt="modal-illustration">
</div>
<div class="modal-main-layout">
<div class="top">
 <h3 class="modal-heading blue">${project.prName}</h3>
   <ul class="tools-list">
   ${project.technologies.map((tool) => `<li class="tool">${tool}</li>`).join('')}
   </ul></div>
 <p>
 ${project.description}
</p>
<p>
${project.description}
 </p>
 <div class="bottom">
 <div class="modal-btn-group">
 <a href="${project.liveVersion} "target=_blank">
 <button type="button" class="btn-success btn-success-modal see-live">See Live</button>
 </a>
 <a href="${project.source} "target=_blank">
 <button type="button" class="btn-success btn-success-modal source">See Source</button>
 </a>
 </div>
 </div>
 </div>
          </div>
          </div>
          </div>
`;
  container.innerHTML += content;
});

// MODAL WINDOW

const projectCard = document.querySelector('.project-card');
const closeModalBtn = document.querySelector('.btn-close');
const myBody = document.body;
const modalOverlay = document.getElementById('modal-overlay');
const modals = document.querySelectorAll('[data-modal]');

modals.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    modal.classList.remove('hidden');
    projectCard.className = 'project-card';
    projectCard.classList.remove('relative');
    myBody.classList.add('disable-scroll');
    modalOverlay.classList.remove('hidden');
    closeModalBtn.addEventListener('click', (event) => {
      event.preventDefault();
      modal.classList.add('hidden');
      projectCard.classList.add('relative');
      myBody.classList.remove('disable-scroll');
      modalOverlay.classList.add('hidden');
      modal.classList.remove('open');
    });
  });
});
