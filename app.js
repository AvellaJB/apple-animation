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
