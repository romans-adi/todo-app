const topNav = document.querySelector('.top-navigation');
const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav-link');
const wrapper = document.getElementById("wrapper");

function toggleBurger () {
  const visibility = topNav.getAttribute('data-visible');
  if (visibility === "false") {
    navToggle.setAttribute("aria-expanded", true)
    topNav.setAttribute("data-visible", true);
    topNav.setAttribute("aria-expanded", true);
    wrapper.className = ("wrapper inactive");
    }
    else if (visibility === "true") {
      navToggle.setAttribute("aria-expanded", false)
      topNav.setAttribute('data-visible', false);
      topNav.setAttribute("aria-expanded", false);
      wrapper.className = ("wrapper");
    }
};

wrapper.addEventListener("click", () => {
  const visibility = topNav.getAttribute('data-visible');
  if (visibility == 'true') {
    toggleBurger();
  }
})

navToggle.addEventListener("click", () => {
 toggleBurger();
});

navLink.forEach(navLink => navLink.addEventListener("click", () => {
toggleBurger();
}))
