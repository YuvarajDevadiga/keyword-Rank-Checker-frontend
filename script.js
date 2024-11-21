var box = document.querySelector(".box");
var hero = document.querySelector(".hero");

// gsap.to(hero, {
//   duration: 1,
//   scale: 40,
//   scrollTrigger: {
//     scroller: "body",
//     trigger: hero,
//     markers: true,
//     start: "top 10%",
//     end: "bottom 60%",
//     scrub: 4,
//     pin: true,
//   },
// });

gsap.registerPlugin(ScrollTrigger);

gsap.to(hero, {
  duration: 1,
  scale: 50,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1",
    // markers: true,
    start: "top 0%",
    end: "bottom 60%",
    scrub: 4,
    pin: true,
    onLeave: () => {
      ScrollTrigger.refresh();
    },
  },
});

var page2 = document.querySelector(".page2");
gsap.to(page2, {
  duration: 1,
  backgroundColor: "#B7CBDD",
  color: "#097BE4",
  scrollTrigger: {
    scroller: "body",
    trigger: page2,
    // markers: true,
    start: "top 40%",
    end: "bottom 100%",
    scrub: 2,
    // pin: true,
  },
  onUpdate: (self) => {
    gsap.set(page2.querySelector(".page2-text p"), {
      color: "#097BE4",
    });

    gsap.set(page2.querySelectorAll(".page2-text p span"), {
      color: "#394B5D",
    });
  },
});

var page3_div = document.querySelector(".page3-content");
gsap.to(page3_div, {
  duration: 1,
  borderTopLeftRadius: "100%",
  borderTopRightRadius: "100%",
  border: "1px solid black",
  scrollTrigger: {
    scroller: "body",
    trigger: page3_div,
    // markers: true,
    start: "top 60%",
    end: "bottom 80%",
    scrub: 2,
  },
});

// const page3_div = document.querySelector(".page3-content");

// // Create a GSAP timeline
// const tl = gsap.timeline({
//   scrollTrigger: {
//     scroller: "body",
//     trigger: page3_div,
//     markers: true,
//     start: "top 70%",
//     end: "bottom 100%",
//     scrub: true,
//   },
// });

// // Step 1: Animate the border radius to form the circle
// tl.to(page3_div, {
//   duration: 0.3,
//   borderTopLeftRadius: "30%",
//   borderTopRightRadius: "30%",
// });
// tl.to(page3_div, {
//   duration: 0.2,
//   border: "2px solid black",
// });
// tl.to(page3_div, {
//   duration: 0.2,
//   border: "3px solid black", // Transition to semi-dark
//   borderTopLeftRadius: "100%",
//   borderTopRightRadius: "100%",
// });
