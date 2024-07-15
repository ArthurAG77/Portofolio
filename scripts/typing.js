document.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#name", {
    speed: 40,
    strings: "Oi sou o Arthur",
    afterComplete: function (instance) {
      instance.destroy();
      new TypeIt("#stack", {
        speed: 55,
        strings: "FULLSTACK",
        afterComplete: function (instance) {  
          document.getElementById("github").classList.remove("hidden");
          document.getElementById("github").classList.add("visible");

          document.getElementById("linkedin").classList.remove("hidden");
          document.getElementById("linkedin").classList.add("visible");

          instance.destroy();

          new TypeIt("#dev", {
            speed: 75,
            strings: "DEVELOPER",
            afterComplete: function (instance){
              document.getElementById("scroll-down").classList.remove("hidden")
              document.getElementById("scroll-down").classList.add("visible")
            }
          }).go();
        },
      }).go();
    },
  }).go();
});
