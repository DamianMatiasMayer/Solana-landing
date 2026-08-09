gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".testimonio",
{
    opacity: 0
},
{
    opacity: 1,
    ease: "none",
    scrollTrigger: {
        trigger: ".testimonio",

        start: "top bottom",
        end: "bottom bottom",

        scrub: true
    }
});


gsap.fromTo(".imagen-flotante",
    {
        x: 0,
        y: 0,
        rotation: -5
    },
    {
        x: 5,
        y: -4,
        rotation: -2,
        duration: 0.12,
        repeat: 3,
        yoyo: true,
        ease: "power2.inOut",

        scrollTrigger: {
            trigger: ".sobremi",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    }
);