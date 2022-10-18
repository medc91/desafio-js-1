let elementQuantity = document.querySelector("#cantidad");
let elementColor= document.querySelector("#color");
let button =document.querySelector("#Boton");
let  detailColor = document.querySelector(".detalle-color");
let detailQuantity=document.querySelector("#detalle");
let totalPrice=document.querySelector("#Total");



button.addEventListener('click', () => {
    console.log("me diste click");
    console.log("elementColor.value");
    console.log("elementQuantity.value");
    detailColor.style.backgroundColor = elementColor.value;
    detailQuantity.textContent="Cantidad: " + elementQuantity.value;
    totalPrice.textContent = "Total: $" + elementQuantity.value * 104990;
})