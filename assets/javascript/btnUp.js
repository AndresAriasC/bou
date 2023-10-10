document.getElementById('up').addEventListener('click', scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));

    }
}
buttonUp = document.getElementById('up');

window.onscroll = function (){
    var scroll = document.documentElement.scrollTop;
    if(scroll > 80){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 80){
        buttonUp.style.transform = "scale(0)";
    }
}