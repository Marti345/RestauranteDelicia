const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensajes")
const tabla = document.getElementById("Tablabody");
const btn = document.getElementById("Enviar");

btn.addEventListener("click",function(){
    
        const valornombre = nombre.value.trim();
        const valorcorreo = correo.value.trim();
        const valormensaje = mensaje.value.trim();

        if(valornombre  =="" || valorcorreo == ""||valormensaje=="") {
            alert("Hay campos vacios, por favor llena todos")
            return;
        }
const fila = document.createElement("tr");

const celdanombre = document.createElement("th");
const celdagmail = document.createElement("th");
const celdamensaje = document.createElement("th");

celdanombre.textContent = valornombre;
celdagmail.textContent = valorcorreo;
celdamensaje.textContent = valormensaje;

fila.appendChild(celdanombre);
fila.appendChild(celdagmail);
fila.appendChild(celdamensaje);
fila.inertHTML = `
<td>{{valornombre}}</td>
<td>{{valorcorreo}}</td>
<td>{{valormensaje}}</td>
`;

tabla.appendChild(fila);

nombre.value ="";
correo.value="";
mensaje.value="";


    })
