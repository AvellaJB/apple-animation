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
