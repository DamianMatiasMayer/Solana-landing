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