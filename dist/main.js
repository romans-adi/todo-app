(()=>{"use strict";var e=document.querySelector(".top-navigation"),t=document.querySelector(".nav-toggle"),s=document.querySelectorAll(".nav-link"),a=document.getElementById("wrapper"),o=document.querySelector(".burger-line-top"),i=document.querySelector(".burger-line-bottom");function n(){var s="false"===e.getAttribute("data-visible");t.setAttribute("aria-expanded",s),e.setAttribute("data-visible",s),e.setAttribute("aria-expanded",s),a.className=s?"wrapper inactive":"wrapper",i.style.y=s?"45":"20",o.style.y=s?"45":"80"}a.addEventListener("click",(function(){"true"===e.getAttribute("data-visible")&&n()})),t.addEventListener("click",(function(){n()})),s.forEach((function(e){return e.addEventListener("click",(function(){n()}))}));var c=document.getElementById("projects-set");[{id:1,prName:"Portfolio",description:"Roman's Portfolio is a project that showcases his skills and tools used in previous works, providing information about his experience and expertise.",mobileImg:"assets/img/modal-illustration.png",desktopImg:"assets/img/modal-bg-desktop.png",mobileImgWebP:"assets/img/modal-illustration.webp",desktopImgWebP:"assets/img/modal-bg-desktop.webp",technologies:["CSS","JavaScript","HTML","Webpack","SCSS"],liveVersion:"https://romans-adi.github.io/romans-portfolio/",source:"https://github.com/romans-adi/romans-adi.github.io"},{id:2,prName:"To-Do List",description:"The Simple To Do List is a single-page application designed to help users add and remove tasks from a list. It features a class with well-defined methods and utilizes local storage to store data. The project is built using modular JavaScript and implements the latest ES6 syntax and features.",mobileImg:"assets/img/screenshots/todo-phone.jpg",desktopImg:"assets/img/screenshots/todo.png",mobileImgWebP:"assets/img/screenshots/todo-phone.webp",desktopImgWebP:"assets/img/screenshots/todo.webp",technologies:["CSS","JavaScript","HTML","Webpack","Jest"],liveVersion:"https://romans-adi.github.io/todo-app/",source:"https://github.com/romans-adi/todo-app"},{id:3,prName:"Awesome Books",description:"This project is a mid-fidelity single-page application (SPA) that enables users to add and remove books from a list.",mobileImg:"assets/img/screenshots/awesome-phone.jpg",desktopImg:"assets/img/screenshots/awesome.png",mobileImgWebP:"assets/img/screenshots/awesome-phone.webp",desktopImgWebP:"assets/img/screenshots/awesome.webp",technologies:["HTML","CSS","JavaScript","Webpack"],liveVersion:"https://romans-adi.github.io/todo-app/",source:"https://github.com/romans-adi/awesome-books"},{id:4,prName:"ValMusic",description:"This website presents a realistic and immersive representation of a software engineering studio, featuring multiple pages with interactive media that showcase the company's services and culture.",mobileImg:"assets/img/screenshots/valmusic-phone.jpg",desktopImg:"assets/img/screenshots/valmusic.png",mobileImgWebP:"assets/img/screenshots/valmusic-phone.webp",desktopImgWebP:"assets/img/screenshots/valmusic.webp",technologies:["HTML","CSS","JavaScript","PHP","jQuery","Tailwind"],liveVersion:"https://valmusic.co.uk/",source:"https://github.com/romans-adi/valmusic"},{id:5,prName:"LOL Draft 2023",description:"The project centers around a fictional event with all names, cities, and venues generated by free AI generators and/or the project author.",mobileImg:"assets/img/screenshots/lol-drafts-phone.jpg",desktopImg:"assets/img/screenshots/lol-draft.png",mobileImgWebP:"assets/img/screenshots/lol-drafts-phone.webp",desktopImgWebP:"assets/img/screenshots/lol-draft.webp",technologies:["HTML","CSS","JavaScript","Webpack"],liveVersion:"https://romans-adi.github.io/lol-draft-2023/",source:"https://github.com/romans-adi/lol-draft-2023"}].forEach((function(e){var t=document.createElement("div");t.classList="project-card",t.innerHTML='\n    <div class="project-card relative" id="'.concat(e.id,'">\n      <picture class="placeholder-img">\n        <h3 class="project-card-heading">').concat(e.prName,'</h3>\n        <source srcset="').concat(e.mobileImgWebP,'" type="image/webp" />\n        <source srcset="').concat(e.mobileImg,'" type="image" />\n        <img src="').concat(e.mobileImg,'" width="100%" alt="project-screenshot" class="project-screenshot project-0">\n      </picture>\n      <div class="project-card-content">\n        <button type="button" data-modal="modal-one" class="btn-success btn-see-project btn-open">See Project</button>\n      </div>\n    </div>\n    <div class="modal" id="modal-one">\n      <button class="modal-toggle btn-close">\n        <svg class="modal-close" viewBox="0 0 50 50" width="14" height="14">\n           <line x1="0" y1="0" x2="50" y2="50" />\n           <line x1="50" y1="0" x2="0" y2="50" />\n        </svg>\n      </button>\n      <div class="modal-bg modal-exit"></div>\n      <div class="modal-container">\n        <div class="img-container">\n          <img class="modal-mobile-img" src="').concat(e.mobileImg,'" alt="modal-illustration">\n          <img class="modal-desktop-img"  src="').concat(e.desktopImg,'" alt="modal-illustration">\n        </div>\n        <div class="modal-main-layout">\n          <div class="top">\n            <h3 class="modal-heading blue">').concat(e.prName,'</h3>\n            <ul class="tools-list">\n              ').concat(e.technologies.map((function(e){return'<li class="tool">'.concat(e,"</li>")})).join(""),"\n            </ul>\n          </div>\n          <p>").concat(e.description,'</p>\n          <div class="bottom">\n            <div class="modal-btn-group">\n              <a href="').concat(e.liveVersion,'" target=_blank>\n                <button type="button" class="btn-success btn-success-modal see-live">See Live</button>\n              </a>\n              <a href="').concat(e.source,'" target=_blank>\n                <button type="button" class="btn-success btn-success-modal source">See Source</button>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  '),c.appendChild(t)}));var r=document.querySelector(".project-card"),l=document.querySelector(".btn-close"),d=document.body,m=document.getElementById("modal-overlay");document.querySelectorAll("[data-modal]").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var s=document.getElementById(e.dataset.modal);s.classList.add("open"),s.classList.remove("hidden"),r.className="project-card",r.classList.remove("relative"),d.classList.add("disable-scroll"),m.classList.remove("hidden"),l.addEventListener("click",(function(e){e.preventDefault(),s.classList.add("hidden"),r.classList.add("relative"),d.classList.remove("disable-scroll"),m.classList.add("hidden"),s.classList.remove("open")}))}))}));var p=document.getElementById("contact-form");p.addEventListener("input",(function(){var e=document.getElementById("email").value,t=document.getElementById("email");e.match(/^[a-z]+@[a-z0-9-]+\.[a-z]{2,3}$/g)?t.classList.add("valid-input"):t.classList.remove("valid-input")})),p.addEventListener("submit",(function(e){var t,s=document.querySelector(".error");return document.getElementById("email").value.match(/^[a-z]+@[a-z0-9-]+\.[a-z]{2,3}$/g)||((t=s).classList.contains("transparent")&&(t.classList.remove("transparent"),t.classList.add("red")),e.preventDefault()),!0}));var u=document.querySelector("#username"),g=document.querySelector("#email"),v=document.querySelector("#message"),b=JSON.parse(localStorage.getItem("formData"))||{};b.name&&(u.value=b.name),b.email&&(g.value=b.email),b.comments&&(v.value=b.message),p.addEventListener("input",(function(e){b[e.target.name]=e.target.value,localStorage.setItem("formData",JSON.stringify(b))}));var h=JSON.parse(localStorage.getItem("formData"));h&&(g.value=h.email,v.value=h.message,u.value=h.username),p.addEventListener("submit",(function(){localStorage.clear()}))})();