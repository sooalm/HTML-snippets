window.onload = function () {

const htmlOpen = document.getElementById("html-tab");
const cssOpen = document.getElementById("css-tab");

const htmlMenu = document.getElementById("html-text");
const cssMenu = document.getElementById("css-text");

if(htmlOpen){
    htmlOpen.addEventListener('click',function(){
        if(htmlMenu){
           // cssMenu.setAttribute('data-open','');
          //  htmlMenu.removeAttribute('data-open','');
          cssMenu.classList.add('data-open');
          htmlMenu.classList.remove('data-open');

          htmlOpen.classList.add('--underlined');
          cssOpen.classList.remove('--underlined');
        }
    })
}

if(cssOpen){
    cssOpen.addEventListener('click',function(){
        if(cssMenu){
           // htmlMenu.setAttribute('data-open','');
          //  cssMenu.removeAttribute('data-open','');
          htmlMenu.classList.add('data-open');
          cssMenu.classList.remove('data-open');
          
          cssOpen.classList.add('--underlined');
          htmlOpen.classList.remove('--underlined');
        }
    })
}



const sideButt = document.getElementById("sideButt");
const sidebar = document.getElementById("sidebar");

if(sideButt){
    sideButt.addEventListener('click',function(){
        if(sidebar){
           // cssMenu.setAttribute('data-open','');
          //  htmlMenu.removeAttribute('data-open','');
          sidebar.classList.toggle('sidebar--on_off');
          sideButt.classList.toggle('sidebar__button--white');
        }
    })
}


}