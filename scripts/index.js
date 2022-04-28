particlesJS.load(
  "particles-js",
  "https://raw.githubusercontent.com/woof-os/reimagined-site/main/assets/particles.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  offset: 5,
})
  .setClassToggle("#hide", "invisible")
  .addTo(controller);

new ScrollMagic.Scene({
  offset: 200,
})
  .setClassToggle("#hide-logo-div", "invisible")
  .addTo(controller);

new ScrollMagic.Scene({
  duration: 360 * 2,
})
  .addTo(controller)
  // .addIndicators()
  .on("update", (e) => {
    console.log(e);
    const logo = document.getElementById("main-logo");
    const subLogo = document.getElementById("header-logo");
    // rotate according to e.progress.toFixed(3)
    const deg = (e.scrollPos / e.endPos) * 180;
    logo.style.transform = `rotate(${deg}deg)`;
    subLogo.style.transform = `rotate(${deg}deg)`;
  });

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onLeave",
    duration: "200%", // this works just fine with duration 0 as well
    // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
    // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
  },
});

// get all slides
var slides = document.querySelectorAll("section");

// create scene for every slide
for (var i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: slides[i],
  })
    .setPin(slides[i], { pushFollowers: false })
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
}
