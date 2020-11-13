let sideMenu = document.querySelector(".smenu-lines");
let menuItem = document.querySelector(".menu-items");
let menuItems = document.querySelectorAll(".menu-item");
let lines = document.querySelectorAll(".smenu-lines");

sideMenu.addEventListener("click",toggleMenu);

function toggleMenu(){
    if (menuItem.classList.contains("show")){
        menuItem.classList.remove("show");
    }else{
        menuItem.classList.add("show"); 
    }

    for(let i=0; i<menuItems.length; i++){
        if(menuItems[i].classList.contains("visible")){
            menuItems[i].classList.remove("visible");
        }else{
            menuItems[i].classList.add("visible");
        }
    }

    for(let i=0; i<lines.length; i++){
        if(lines[i].classList.contains("rotate")){
            lines[i].classList.remove("rotate");
        }else{
            lines[i].classList.add("rotate");
        }
    }
}