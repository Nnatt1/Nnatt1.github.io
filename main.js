let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Programadora web capaz de ayudarte a la creación de tus nuevos proyectos.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
