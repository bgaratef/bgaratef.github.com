let elementList = document.querySelectorAll(".fa-star");
    elementList.forEach(function(element){
        element.addEventListener('click',function(){
            element.classList.remove("far");
            element.classList.add("fas");
        })
    })


let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    Close.addEventListener('click',function(ev){
        ev.preventDefault();
        /*content.classList.remove("animated");
        content.classList.remove("fadeInRight");
        content.classList.add("animated");
        content.classList.add("fadeOutRight");
        setTimeout(() => {
            location.href="/";
        }, 1000);*/
       
    })
})
