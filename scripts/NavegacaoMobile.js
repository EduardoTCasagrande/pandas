class NavegacaoMobile {
    constructor(menuMobile, navLista, navLinks) {
        this.menuMobile = document.querySelector(menuMobile);
        this.navLista = document.querySelector(navLista);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {

            link.style.animation 
            ? (link.style.animation = "") 
            : (link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    handleClick(){
        this.navLista.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickListener() {
        this.menuMobile.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.menuMobile) {
            this.addClickListener();
        }
        return this;
    }
}
const navegacaoMobile = new NavegacaoMobile(
    ".menu-mobile",
    ".nav-lista",
    ".nav-lista li"
);
navegacaoMobile.init();