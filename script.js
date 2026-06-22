// Переключатель мобильного бургер-меню
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '65px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#ffffff';
        nav.style.padding = '20px';
        nav.style.gap = '15px';
        nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.05)';
    }
}

// Обработка отправки формы записи
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    if (name.trim() === "" || phone.trim() === "") {
        alert("Пожалуйста, заполните поля с именем и телефоном.");
        return;
    }
    
    alert(`Заявка принята! Спасибо, ${name}. Мы свяжемся с вами по номеру ${phone} для подтверждения бронирования.`);
    document.getElementById('feedbackForm').reset();
}

// Автоподстановка выбранной бьюти-процедуры в текстовое поле формы
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceName = urlParams.get('service');
    const messageField = document.getElementById('message');
    
    if (serviceName && messageField) {
        messageField.value = `Здравствуйте! Хочу записаться на процедуру: "${serviceName}". Подберите, пожалуйста, свободное время.`;
    }
});