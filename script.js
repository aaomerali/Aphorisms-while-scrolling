let box = document.querySelectorAll(".content");
let sec = document.querySelectorAll(".sec");


window.onscroll = () => {

    let Scrol = window.scrollY;
    

    sec.forEach(s => {
        

        let top = s.offsetTop - 400;
        Scrol >= top ? s.classList.add("active") : s.classList.remove("active");

        
    });
    

    console.log(window.scrollY , top);
}