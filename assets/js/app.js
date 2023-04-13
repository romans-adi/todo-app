const topNav = document.querySelector(".top-navigation");
const navToggle = document.querySelector(".nav-toggle");
const navLink = document.querySelectorAll(".nav-link");
const wrapper = document.getElementById("wrapper");

function toggleBurger() {
  let width = window.innerWidth;
  const visibility = topNav.getAttribute("data-visible");
  if (visibility === "false" && width < 768) {
    navToggle.setAttribute("aria-expanded", true);
    topNav.setAttribute("data-visible", true);
    topNav.setAttribute("aria-expanded", true);
    wrapper.className = "wrapper inactive";
  } else if (visibility === "true") {
    navToggle.setAttribute("aria-expanded", false);
    topNav.setAttribute("data-visible", false);
    topNav.setAttribute("aria-expanded", false);
    wrapper.className = "wrapper";
  }
}

wrapper.addEventListener("click", () => {
  const visibility = topNav.getAttribute("data-visible");
  if (visibility == "true") {
    toggleBurger();
  }
});

navToggle.addEventListener("click", () => {
  toggleBurger();
});

navLink.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    toggleBurger();
  })
);

// PROJECTS

const container = document.getElementById("projects-set");

let projects = [
  {
    id: 1,
    prName: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImg: "ffff",
    technologies: ["Ruby on Rail", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },

  {
    id: 2,
    prName: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImg: "ffff",
    technologies: ["Ruby on Rail", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 3,
    prName: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImg: "ffff",
    technologies: ["Ruby on Rail", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 4,
    prName: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImg: "ffff",
    technologies: ["Ruby on Rail", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 5,
    prName: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImg: "ffff",
    technologies: ["Ruby on Rail", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 6,
    prName: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImg: "ffff",
    technologies: ["Ruby on Rail", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
];

function createList(toolsArr) {
  toolsArr.forEach((tool) => {
    let toolItem = document.createElement("li");
    toolItem.classList.add("tool");
    let text = document.createTextNode(`${tool}`);
    toolItem.appendChild(text).textContent;
  });
}

projects.forEach(function (project) {
  const card = document.createElement("div");
  card.classList = "project-card";
  const content = `
<div class="project-card relative" id="${project["id"]}">
<picture class="placeholder-img">
<source srcset="assets/img/img-placeholder.webp" />
<img src="assets/img/img-placeholder.png" width="100%" alt="project-screenshot"
  class="project-screenshot project-0">
</picture>
<div class="project-card-content">
<h3 class="project-card-heading">${project["prName"]}</h3>
<ul id="tools-list" class="tools-list">
${createList(project["technologies"])}

</ul>
<button type="button" data-modal="modal-one" class="btn-success btn-see-project btn-open">See Project</button>
</div>
</div>
<div class="modal" id="modal-one">
  <div class="modal-bg modal-exit"></div>
  <div class="modal-container">
<button class="modal-toggle btn-close">
<svg class="modal-close" viewBox="0 0 50 50" width="14" height="14">
   <line x1="0" y1="0" x2="50" y2="50" />
   <line x1="50" y1="0" x2="0" y2="50" />
</svg>
</button>
<img class="modal-mobile-img" src="assets/img/modal-illustration.png" alt="modal-illustration">
<img class="modal-desktop-img"  src="assets/img/modal-bg-desktop.png" alt="modal-illustration">
<div class="modal-main-layout">
<div class=modal-secondary-layout>
 <h3 class="modal-heading blue">${project["prName"]}</h3>
   <ul class="tools-list">
     <li class="tool">${project["technologies"][0]}</li>
     <li class="tool">${project["technologies"][1]}</li>
     <li class="tool">${project["technologies"][2]}</li>
     <li class="tool">${project["technologies"][3]}</li>
   </ul>
 <p>
 ${project["description"]}
</p>
<p>
${project["description"]}
 </p>
 </div>
 <div class="modal-btn-group">
 <button type="button" class="btn-success btn-success-modal see-live">See Live</button>
 <button type="button" class="btn-success btn-success-modal source">See Source</button>
 </div>
 </div>
          </div>
          </div>
          </div>
`;
  container.innerHTML += content;
});

// MODAL WINDOW

const projectCard = document.querySelector(".project-card");
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const myBody = document.body;
const modalOverlay = document.getElementById("modal-overlay");
const techList = document.getElementsByClassName("tools-list");

let w = document.body.scrollWidth;
let h = document.body.scrollHeight;

modalOverlay.style.height = `${h}px`;
modalOverlay.style.width = `${w}px`;

const modals = document.querySelectorAll("[data-modal]");

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    modal.classList.remove("hidden");
    projectCard.className = "project-card";
    projectCard.classList.remove("relative");
    myBody.classList.add("disable-scroll");
    modalOverlay.classList.remove("hidden");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      closeModalBtn.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.add("hidden");
        projectCard.classList.add("relative");
        myBody.classList.remove("disable-scroll");
        modalOverlay.classList.add("hidden");
        modal.classList.remove("open");
      });
    });
  });
});


// VALIDATION

const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
