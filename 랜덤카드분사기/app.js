const random = document.querySelector(".random");
const setting = document.querySelector(".setting");
const body = document.querySelector('body')
const cards = document.querySelectorAll(".card");


function resize(){

    cardSetting()
}


function cardSetting() {
  cards.forEach((cardEl, i) => {
    gsap.to(cardEl,
         {
            x: window.innerWidth/2-130 +i*-10 ,
            y: window.innerHeight/2-300 +i*20 ,
            ease:'back.out',
            scale:0.5
         });
  });
}

function cardRandom() {
  cards.forEach((cardEl, i) => {
    gsap.to(cardEl, {
      rotate:0,
      scale:0.3,
      x: (Math.random() * window.innerWidth) / 1.2 - 100,
      y: (Math.random() * window.innerHeight) / 1.4,
      scale:1,
      force3D:true,
     
      ease: "power2.in",
    });
  });
}

window.addEventListener('resize',resize)
window.addEventListener('load',resize)
random.addEventListener("click", cardRandom);
setting.addEventListener('click',cardSetting)