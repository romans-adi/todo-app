const topNav = document.querySelector('.top-navigation');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener("click", () => {
  const visibility = topNav.getAttribute('data-visible');
  if (visibility === "false") {
    topNav.setAttribute("data-visible", true);
    topNav.setAttribute("aria-expanded", true)
  }
    else if (visibility === "true") {
      topNav.setAttribute('data-visible', false);
      topNav.setAttribute("aria-expanded", false)
    }
});
