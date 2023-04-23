
let app = document.getElementById('typewriter');

let typewriter = new typewriter(app,{
    loop: true,
    delay: 75,
});

typewriter
   .pauseFort(2500)
   .typewriter('Desarrollo sitios web y escribo articulos sobre pogramacion.')
   .pauseFort(200)
   .deleteChars(10)
   .start();