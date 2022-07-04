const header = document.querySelector("header")
const hiddenNav = document.querySelector(".hide")

const imgGallery = document.querySelector("#img-gallery")
function scroll(){
    if(document.documentElement.scrollTop > 175 && window.innerWidth >= 990){
        header.style.visibility = "none"
        hiddenNav.style.display = "flex";
        hiddenNav.style.position = "fixed";
        hiddenNav.style.animation = 'fadeIn 1s';
    }else{
        header.style.display = ""
        hiddenNav.style.display = "";
        hiddenNav.style.position = "";
        hiddenNav.style.animation = '';
    }
    if(document.documentElement.scrollTop > 3500){
        imgGallery.style.animation = 'fadeIn 1s';
        imgGallery.style.visibility = 'visible';
    }
}

window.onscroll = function(){scroll()}



const dropM = document.querySelector('.click-hide')
function revealM(){
    dropM.classList.toggle('click-hide')
}