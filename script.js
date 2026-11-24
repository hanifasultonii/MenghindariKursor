
const tombol = document.getElementById("tombol");

tombol.addEventListener("mouseover", function(event) {

    const maxX = window.innerWidth - tombol.offsetWidth;
    const maxY = window.innerHeight - tombol.offsetHeight;

    const posisiX = Math.random() * maxX;
    const posisiY = Math.random() * maxY;

    tombol.style.left = posisiX + "px";
    tombol.style.top = posisiY + "px";

});
