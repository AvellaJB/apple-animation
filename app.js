//Introduction au scrool trigger :
/* On crée une timeline et dans la timeline on a : 
trigger : qui est l'élément qui va trigger l'animation
start : a partir de quand une fois que le trigger est passé est-ce que l'animation va commencer
end : quand l'animation va terminer (ici 100% veux dire une fois qu'on a scrollé 100% du trigger (le trigger étant un div))
markers : true qui permet de repérer le début et la fin des animations. 
scrub : qui est l'animation en pourcentage de scroll. Si on ne mets pas scrub l'animation prendra en compte une duration. */

/* const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    markers: true,
    scrub: true,
  },
});

tlIntro.fromTo("nav", { opacity: 1 }, { opacity: 0 }); */

//Pin the first page.
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

//Highlight page 2

const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    markers: { startColor: "black", endColor: "black" },
    scrub: true,
    start: "-40%",
    end: "40%",
  },
});

tlH.fromTo(
  ".highlight",
  { color: "rgba(255,255,255,0.4)" },
  { color: "rgba(255,255,255,1)", stagger: 1 }
);

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    markers: { startColor: "blue", endColor: "blue" },
    scrub: true,
    start: "-20%",
    end: "60%",
  },
});

tlHRemove.to(".highlight", { color: "rgba(255,255,255,0.4)", stagger: 1 });

//page 3
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-25%",
    end: "30%",
    scrub: true,
  },
});

tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");
tlSplit.fromTo(
  ".product-text-left",
  { x: "50%", opacity: 0 },
  { x: "0%", opacity: 1 },
  "<"
);
tlSplit.fromTo(
  ".product-text-right",
  { x: "-50%", opacity: 0 },
  { x: "0%", opacity: 1 },
  "<"
);

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    pin: true,
    pinSpacing: false,
    start: "0%",
    end: "100%",
  },
});

//Carrousel

const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue";
let topIndex = 2;

swatches.forEach((swatch, index) => {
  //On récupère les coordonnées du téléphone sur la page (ils sont tous display mais cachés en dehors de la page.)
  const coord = slides[index].getBoundingClientRect().left;
  swatch.addEventListener("click", (e) => {
    //quand on clique sur la pastille on récupère le nom de l'attribu de la pastille.
    let swatchName = e.target.getAttribute("swatch");
    let closeUp = document.querySelector("." + swatchName);

    //check si on est sur la même swatch que celle cliquée pour eviter un fading bizarre.
    if (currentSwatch === swatchName) return;
    gsap.set(closeUp, { zIndex: topIndex });
    gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });
    //Increment zIndex;

    //galery :
    gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });

    topIndex++;
    currentSwatch = swatchName;
  });
});
