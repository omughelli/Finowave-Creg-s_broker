function displayMenu(){
    
    let displayMenuBtn = document.getElementById("menu_btn");
    let closeMenuBtn = document.getElementById("close_menu_btn");
    let menu = document.getElementById("moblie_view_menu");

    displayMenuBtn.addEventListener('click', ()=>{
        menu.style.display = "flex";
    })
    closeMenuBtn.addEventListener('click', ()=>{
        menu.style.display = "none";
    })

}
displayMenu();