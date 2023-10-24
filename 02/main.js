const trocarTemaBtn = document.getElementById('trocar-tema-btn');
const body = document.body;

trocarTemaBtn.addEventListener('click', () => {
    body.classList.toggle('tema-escuro');
});
