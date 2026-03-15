/*------------------------------------------*/
/* onclick in whatsApp*/
document.addEventListener("DOMContentLoaded", function () {
    let whatsApp = document.querySelector(".WhatsApp");
    if (whatsApp) {
        whatsApp.onclick = function (e) {
            e.preventDefault(); 
            window.open("https://wa.me/201222742431?text=Hello%20Martin", "_blank");
        };
    }
});
/*------------------------------------------*//
/*------------------------------------------*/
/*------------------------------------------*/
// الحصول على الموديل
const pcModel = document.getElementById("pc3d-model");

// الوضعية الأمامية المثالية (الشاشة في وجهك مباشرة)
const frontOrbit = "90deg 90deg 4m"; // الكاميرا أمام الموديل مباشرة مع zoom out
const transitionDuration = 800;      // مدة العودة بسلاسة (مللي ثانية)

let isInteracting = false;            // متغير لتتبع التفاعل

// عند تحميل الموديل
pcModel.addEventListener("load", () => {
  // ضبط الكاميرا في الوضع الأمامي مباشرة
    pcModel.cameraOrbit = frontOrbit;
    pcModel.interpolationDecay = 200;   // جعل الحركة أكثر سلاسة
    pcModel.jumpCameraToGoal();
});

// عند بدء السحب بالماوس
pcModel.addEventListener("camera-change", () => {
    if (!isInteracting) {
    isInteracting = true;
}
});

// عند رفع الماوس - العودة للوضع الأصلي
pcModel.addEventListener("pointerup", () => {
    if (isInteracting) {
    isInteracting = false;
    // العودة السلسة للوضع الأمامي
    setTimeout(() => {
        pcModel.cameraOrbit = frontOrbit;}, 100);}});

// عند خروج الماوس من الموديل - العودة للوضع الأصلي
pcModel.addEventListener("mouseleave", () => {
    if (isInteracting) {
        isInteracting = false;
        pcModel.cameraOrbit = frontOrbit;}});

/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/

const items = document.querySelectorAll(".tech-item");

items.forEach(item => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
