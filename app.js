let scrollcon = document.querySelector('.gallery');
let backbtn = document.getElementById('backbtn');
let forwardbtn = document.getElementById('forwardbtn');

scrollcon.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    scrollcon.scrollLeft +=evt.deltaY;
     scrollcon.style.scrollBehavior = "auto";
});

forwardbtn.addEventListener("click", () => {
    scrollcon.style.scrollBehavior = "smooth";
    scrollcon.scrollLeft += 900;
});

backbtn.addEventListener("click", () => {
    scrollcon.style.scrollBehavior = "smooth";
    scrollcon.scrollLeft -= 900;
});
