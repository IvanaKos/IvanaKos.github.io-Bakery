//Responsive menu

const mainHeader = document.getElementById("main-header");
const hamburgerBtn = mainHeader.querySelector("#js-hamburger");
const topLine = mainHeader.querySelector("#js-top-line");
const centerLine = mainHeader.querySelector("#js-center-line");
const bottomLine = mainHeader.querySelector("#js-bottom-line");
const navOverlay = mainHeader.querySelector("#nav-overlay");

const mediaQuery = "only screen and (max-width: 768px)";
const mediaQueryList = window.matchMedia(mediaQuery);

function openNav(event) {
  mediaQueryList.addEventListener("change", openNav);
  if (event.matches) {
    navOverlay.style.width = "100%";
  } else {
    navOverlay.style.width = "35%";
  }
}

function closeNav() {
  navOverlay.style.width = "0%";
}

function activateMenu() {
  topLine.classList.toggle("active");
  centerLine.classList.toggle("active");
  bottomLine.classList.toggle("active");

  let activeBtn = topLine.classList.contains("active");

  if (activeBtn) {
    openNav(mediaQueryList);
  } else {
    closeNav();
  }
}

hamburgerBtn.addEventListener("click", activateMenu);

function resetMenu() {
  if (window.innerWidth > 1200) {
    topLine.classList.remove("active");
    centerLine.classList.remove("active");
    bottomLine.classList.remove("active");
    closeNav();
  }
}

window.addEventListener("resize", resetMenu);

//END Responsive menu