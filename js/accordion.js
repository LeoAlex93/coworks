/* Аккордеон. Для блока ответы на вопросы   */

const topics = document.querySelectorAll('.topic');

// обходим все блоки аккордеона 

topics.forEach(function(topic){
    // на каждый блок вешаем прослушку
    topic.addEventListener('click',function(event){

        // Проверяем, был клик внутри кнопки или нет
        // Проверка идёт на что клик был совершен на элементе который размещен внутри кнопки
        // То есть внутри блока с классом .topic__btn, в нашем случае это кнопка

        if(event.target.closest('.topic__btn')){
            
            // Добавляем/Убираем у блока класс topic--open
            // Если был добавлен, вернётся True, если был убран вернётся false
            // Возвращаемое значение записываем в константу toggleResult
           const isOpened = topic.classList.toggle('topic--open');
           

        // Находим картинку
            const content = topic.querySelector('.topic__content');
            const img = topic.querySelector('.topic__icon');


            if (isOpened) {
                img.src='./img/icons/btn-minus.svg';

                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                img.src='./img/icons/btn-plus.svg';

                content.style.maxHeight = '0px';
            }
        }
        
    });
});