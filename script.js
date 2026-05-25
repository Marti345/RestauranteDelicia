const modal = document.getElementById("modal");
const btn = document.querySelectorAll(".explorar");
const cerrar = document.getElementById("cerrar");
const comprar = document.getElementById("comprar");
comprar.onclick = function() {
    alert("Compra en proceso")
}



  //  document.getElementById("data-nutricion").textContent = this.dataset.nutricion;
btn.forEach(botones => {
    botones.addEventListener("click",function() {
        document.getElementById("data-nombre").textContent = this.dataset.nombre;
        document.getElementById("data-precio").textContent = this.dataset.precio;
        document.getElementById("data-descripcion").textContent = this.dataset.descripcion;
    document.getElementById("data-calorias").textContent = this.dataset.calorias;
        document.getElementById("data-proteina").textContent = this.dataset.proteina;
        document.getElementById("data-carbohidratos").textContent = this.dataset.carbohidratos;
        document.getElementById("data-grasas").textContent = this.dataset.grasas;

        document.getElementById("data-img").src = this.dataset.img;
        document.getElementById("data-img2").src = this.dataset.img2
    modal.style.display = "block";
    });
    
});

cerrar.onclick = function() {
    modal.style.display = "none";

}

window.onclick = function(event) {
   if(event.target == modal) {
    modal.style.display = "none";
}
}