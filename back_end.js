/*------------------------------------------*/
/* onclick in whatsApp*/
document.addEventListener("DOMContentLoaded", function () {
    let whatsApp = document.querySelector(".WhatsApp");
    whatsApp.onclick = function (e) {
        e.preventDefault(); 
        window.open("https://wa.me/201222742431?text=Hello%20Martin", "_blank");
    };
});
/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/

// الكلمات اللي هتظهر بتأثير الكتابة
const heroTexts = ["Web Developer ...", "Frontend Developer ...", "Backend Developer ..."];

let textIndex = 0;     // رقم الكلمة
let charIndex = 0;     // رقم الحرف
let isDeleting = false; // هل بيمسح ولا بيكتب

const typingElement = document.querySelector("#home-hero .home-typing");

function typeEffect() {

    const currentText = heroTexts[textIndex];

    if (!isDeleting) {
        // بيكتب
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1200); // يستنى قبل ما يمسح
        }

    } else {
        // بيمسح
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;
            if (textIndex === heroTexts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();


/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/