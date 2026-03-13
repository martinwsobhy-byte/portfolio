/*------------------------------------------*/
/* onclick in whatsApp*/
document.addEventListener("DOMContentLoaded", function () {
    let whatsApp = document.querySelector(".WhatsApp");
    whatsApp.onclick = function (e) {
        e.preventDefault(); 
        window.open("https://wa.me/201274261631?text=Hello%20Martin", "_blank");
    };
});
/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/




let rows = document.querySelectorAll(".about-row");

window.addEventListener("scroll", function(){

rows.forEach(row => {

let position = row.getBoundingClientRect().top;
let screenHeight = window.innerHeight;

if(position < screenHeight - 100){
row.classList.add("show");
}else{
row.classList.remove("show");
}

});

});