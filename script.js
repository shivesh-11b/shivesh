const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
gsap.from(".nlink", {
    stagger: .2,
    y:10,
    duration: 1,
    opacity:0
})
Shery.textAnimate("#headings h1" , {

    style: 2,
    y:10,
    delay:0.1,
    duration: 7,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier:0.1,
  });
  gsap.from(".anim2", {
    y:10,
    opacity:0,
    stagger:.3,
    duration:2
  })
  Shery.imageEffect("#imgntext img", {
    style: 3,
    debug: true
  })
  Shery.imageEffect("#susimagewrapper",{
    style:3,
    debug:true
  })