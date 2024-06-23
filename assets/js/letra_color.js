let a = "pink";
let s = "orange";
let d = "lightblue";
let q = "purple";
let w = "gray";
let e = "brown";
let color = "white";


function crearDiv() {
    let div = document.createElement("div");
    div.setAttribute("id", "miDiv");
    div.textContent = "¡Nuevo div creado!";
    document.body.appendChild(div);
  }

 

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
    nuevoDiv.style.backgroundColor = color;
    document.body.appendChild(nuevoDiv);
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