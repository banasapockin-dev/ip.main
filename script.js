// Функция для показа выбранного раздела
function showSection(sectionId) {
    // Скрываем все контентные секции
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Показываем выбранную секцию
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Обновляем активное состояние кнопок меню
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Находим кнопку, которая вызвала функцию, и делаем её активной
    const activeButton = event.target;
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Инициализация: показываем первый раздел при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // По умолчанию показываем секцию «Кто это?»
    showSection('about');

    // Добавляем обработчики событий для кнопок меню
    document.querySelectorAll('.menu-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Извлекаем ID секции из атрибута data-section или из текста кнопки
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                showSection(sectionId);
            }
        });
    });
});
