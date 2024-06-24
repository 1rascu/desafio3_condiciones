let a = "pink";
let s = "orange";
let d = "lightblue";
let color = "white";

document.addEventListener("keydown", function(event) {
  switch(event.key) {
    case "a":
      color = a;
      break;
    case "A":
      color = a;
      break;
    case "s":
      color = s;
      break;
    case "S":
      color = s;
      break;
    case "d":
      color = d;
      break;
    case "D":
      color = d;
      break;  
     
  }
  document.getElementById("key").style.backgroundColor = color;
});


function crearNuevoDiv(ancho, alto, color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = ancho + 'px';
    nuevoDiv.style.height = alto + 'px';
    nuevoDiv.style.margin = '0 auto';
    nuevoDiv.style.display = 'inline-block'; 
    nuevoDiv.style.backgroundColor = color;
    document.getElementById('nuevoDiv').appendChild(nuevoDiv);
}

  document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        crearNuevoDiv(200, 200, 'purple');
    } else if (event.key === 'w') {
        crearNuevoDiv(200, 200, 'gray');
    } else if (event.key === 'e') {
        crearNuevoDiv(200, 200, 'brown');
    } else if (event.key === 'Q') {
        crearNuevoDiv(200, 200, 'purple');
    } else if (event.key === 'W') {
        crearNuevoDiv(200, 200, 'gray');
    } else if (event.key === 'E') {
        crearNuevoDiv(200, 200, 'brown');
    } 
});