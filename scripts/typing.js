document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#name", {
        speed: 95,
        strings: "Oi sou o Arthur",
        afterComplete: function(instance) {
            instance.destroy();
            new TypeIt("#stack", {
                speed: 90,
                strings: "FULLSTACK",
                afterComplete: function(instance){
                    instance.destroy();
                    new TypeIt("#dev", {
                        speed: 85,
                        strings: "DEVELOPER",
                    }).go()
                }
            }).go()
        }
    }).go()
})
