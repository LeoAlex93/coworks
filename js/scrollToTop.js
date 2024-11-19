/* Кнопка скролла наверх страницы */

// Находим кнопку по id scrollToTopBtn

const scrollButton = document.querySelector('#scrollToTopBtn');

// Слушаем событие скролла на странице

window.addEventListener('scroll', function(){
    
    
    // Если пользователь проскролил страницу по высоте больше чем высота экрана 


    if (window.scrollY > window.innerHeight) {

        // Тогда к кнопке добавляем класс top-link--visible чтобы отразить её

        scrollButton.classList.add('top-link--visible');
    
    } else {
        scrollButton.classList.remove('top-link--visible');
    }
})

