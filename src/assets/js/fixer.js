// call all functions for fix
window.addEventListener('load', () => {

    fix_hamburger_menu();

})


// fix hamburger menù
function fix_hamburger_menu() {
    console.log("ciaooo");
    document.querySelector('.burger-btn').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('active');
    });
    document.querySelector('.sidebar-hide').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('active');
    
    });
}

