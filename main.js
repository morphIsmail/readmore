//Поиск всех кнопок с классом btn
let btns = document.querySelectorAll('.btn');
//Цикл по всем кнопкам
for (btn of btns) {
  //Обработка события клика для каждой кнопки
  btn.addEventListener('click', function() {
    //Поиск родителя у текущей кнопки с классом card
    let card = this.closest('.card')
    //Поиск Точек у родителя (класс dots)
    let dots = card.querySelector('.dots');
    //Поиск Текста у родителя (класс more)
    let more = card.querySelector('.more');
    //Если точек нет то скрыть текст и показхать точки
    if(dots.style.display === 'none') {
      dots.style.display = 'inline';
      more.style.display = 'none';
      this.textContent = 'Подробнее';
    } else {
      //Иначе показать текст и скрыть точки
      dots.style.display = 'none';
      more.style.display = 'inline';
      this.textContent = 'Скрыть';
    }
  });
}