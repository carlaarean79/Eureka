import "./styles.css";

const inpuContras = document.getElementById("contrasena");
const btn = document.getElementById("btn");
const para = document.getElementById("para");
const para2 = document.getElementById("para3");

let clave = "eureka";
let intentosIngClave = 3;
let contrasena = inpuContras.value;
let contador = 0;

btn.addEventListener("click", function () {
  clave = "eureka";
  contrasena = inpuContras.value;
  intentosIngClave = 3;

  while (contador <= intentosIngClave) {
    if (contrasena === clave) {
      para.innerText = "¡Bienvenido!";
      console.log("Bienvenido");
    } else {
      para.innerText = "Clave ingresada incorrecta";
      console.log("Clave ingresada incorrecta");
    }
    contador++;
    if (contador === 4) {
      para2.innerText = "Su límite de intentos se ha agotado";
      console.log("Su límite de intentos se ha agotado");
    }
    break;
  }
});
