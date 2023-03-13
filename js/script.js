// Scroll suave para link interno
const menuItems = document.querySelectorAll('.geral a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: to - 75,
        behavior: "smooth",
    });
}

const botaoCopiar = document.querySelectorAll(".botaoCopiar");
botaoCopiar.forEach(item => {
    item.addEventListener('click', ()=> {
        if(navigator.clipboard.writeText(item.value)) {
            item.id = "email-copiado_check"
            item.textContent = "Email copiado";
        }
    
        setInterval(()=> {
            item.id= "email-copiado_check";
            item.textContent = "Copiar email"
        }, 4000);
    })
})