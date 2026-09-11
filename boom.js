document.addEventListener('DOMContentLoaded', () => {

    // 1. Efeito do Header ao Rolar a Página
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Rolagem Suave para Links Internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. Inicialização da Biblioteca ScrollReveal (Animações de Entrada)
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false // Altere para true se quiser que a animação se repita ao subir/descer
    });

    // Aplicação das animações nas classes específicas
    sr.reveal('.reveal-top', { origin: 'top', distance: '30px' });
    sr.reveal('.reveal-left', { origin: 'left', distance: '80px' });
    sr.reveal('.reveal-left-delay', { origin: 'left', distance: '80px', delay: 400 });
    sr.reveal('.reveal-right', { origin: 'right', distance: '80px' });
    sr.reveal('.reveal-bottom', { delay: 600 });
    sr.reveal('.reveal-title', { origin: 'top' });
    
    // Animação sequencial (efeito cascata) para os cards de serviço
    sr.reveal('.reveal-card', { interval: 150 });

    // 4. Manipulação do Formulário
    const bookingForm = document.getElementById('form-agendamento');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        
        alert(`Obrigado pelo agendamento, ${nome}! Entraremos em contato via WhatsApp para confirmação.`);
        bookingForm.reset();
    });
});