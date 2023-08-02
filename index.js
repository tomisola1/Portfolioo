const logo = document.getElementById('logo')
const navbar = document.getElementById('navbar-container')

window.onscroll = function() {navScroll()};

const navScroll = () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.padding = "5px 5px"
        logo.style.fontSize = "22px"
    }else {
        navbar.style.padding = "20px 5px"
        logo.style.fontSize = "28px"
    }
    
}
