particlesJS.load(
  "particles-js",
  "https://raw.githubusercontent.com/woof-os/reimagined-site/main/assets/particles.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
  duration: 10, // the scene should last for a scroll distance of 10px
  offset: 10, // start this scene after scrolling for 10px
})
  .setClassToggle("#reveal", "visible") // add class to reveal
  .addTo(controller); // assign the scene to the controller
