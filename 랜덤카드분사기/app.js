const random = document.querySelector(".random");
const random2 = document.querySelector(".random2");
const random3 = document.querySelector(".random3");
const setting = document.querySelector(".setting");
const $button = document.querySelectorAll(".button");
const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");

let pageNumber = 0;

function pageNumCheck() {
  $button.forEach((btnEl, i) => {
    btnEl.addEventListener("click", () => {
      pageNumber = i;
      pageNumFocus();
      cardRandom();
    });
  });

  function pageNumFocus() {
    for (let i = 0; i < $button.length; i++) {
      $button[i].classList.remove("active");
    }
    $button[pageNumber].classList.add("active");
  }
}
pageNumCheck();

function cardSetting() {
  cards.forEach((cardEl, i) => {
    gsap.to(cardEl, {
      rotateY:0, rotateZ:0, rotateX:0,
      x: window.innerWidth / 2 - 130 + i * -10,
      y: window.innerHeight / 2 - 300 + i * 20,
      ease: "back.out",
      scale: 0.5,
    });
  });
}

function cardRandom() {
  if (pageNumber === 0)
    cards.forEach((cardEl, i) => {
      gsap.to(cardEl, {
        rotateY:0, rotateZ:0, rotateX:0,
        scale: 0.3,
        x: (Math.random() * window.innerWidth) / 1.2 - 100,
        y: (Math.random() * window.innerHeight) / 1.4,
        scale: 1,
        ease: "back2.in",
      });
    });

  else if (pageNumber === 1)
    cards.forEach((cardEl, i) => {
      gsap.to(cardEl, {
        rotateZ: Math.floor(Math.random()*160),
        rotateY:Math.floor(Math.random()*60),
        x: (Math.random() * window.innerWidth) / 1.2 - 100,
        y: (Math.random() * window.innerHeight) / 1.4,
        scale: 1,
        ease: "back.in",
      });
    });

    else if(pageNumber ===2)
    cards.forEach((cardEl, i) => {
      gsap.to(cardEl, {
        perspective:600,
        rotateZ: Math.floor(Math.random()*160),
        rotateY:Math.floor(Math.random()*60),
        x: (Math.random() * window.innerWidth) / 1.2 - 100,
        y: (Math.random() * window.innerHeight) / 1.4,
        scale: 1,
        ease: "back.in",
      });
    });
}

window.addEventListener("resize", resize);
window.addEventListener("load", resize);
setting.addEventListener("click", cardSetting);

function resize() {
  cardSetting();
}
