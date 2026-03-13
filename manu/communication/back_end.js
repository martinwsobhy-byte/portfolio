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