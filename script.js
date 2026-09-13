const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const header = document.querySelector("[data-header]");
const birdButton = document.querySelector("#bird-button");
const birdOpinion = document.querySelector("#bird-opinion");

const birdOpinions = [
  "Reject the null hypothesis. Accept one sunflower seed.",
  "The data are heteroscedastic. The pigeon is also upset.",
  "Increase the sample size until morale improves.",
  "Reviewer #2 requests a clearer figure and your lunch.",
  "The experiment is reproducible if the owl is available.",
  "This result is statistically significant to at least one duck.",
  "Try a steeper angle. The shoebill refuses to elaborate.",
];

let lastOpinion = -1;

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  siteNav?.classList.remove("is-open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  siteNav?.classList.toggle("is-open", !isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("is-scrolled", window.scrollY > 18),
  { passive: true },
);

birdButton?.addEventListener("click", () => {
  let nextOpinion = Math.floor(Math.random() * birdOpinions.length);
  if (birdOpinions.length > 1) {
    while (nextOpinion === lastOpinion) {
      nextOpinion = Math.floor(Math.random() * birdOpinions.length);
    }
  }
  lastOpinion = nextOpinion;
  birdOpinion.textContent = birdOpinions[nextOpinion];
});
