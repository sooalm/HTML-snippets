
window.onload = function () {
const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');

if(menuOpen) {
    menuOpen.addEventListener('click',function(){
        if(menu){
            menu.setAttribute('data-open','')
        }
    });
}else console.log("menuOpen is null")

if(menuClose){
    menuClose.addEventListener('click',function(){
        if(menu){
            menu.removeAttribute('data-open');
        }
    })
}else console.log("menuClose is null")

}