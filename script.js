document.write('<h2>Завдання 1:</h2>')
let d1 = new Date(2021, 1, 20, 3, 12);
document.write(d1)


document.write('<h2>Завдання 2:</h2>')

function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
let date = new Date(2014, 0, 3); // 3 січня 2014
//alert( getWeekDay(date) ); // ПТ
document.write(getWeekDay(date))


document.write('<h2>Завдання 3:</h2>')
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

document.write( getLastDayOfMonth(2022, 6) ); // 31



document.write('<h2>Завдання 4:</h2>')
function getSecondsToTomorrow() {
    let now = new Date();
  
    // завтрашня дата
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; // різниця в мс
    return Math.round(diff / 1000); // перетворити до секунд
  }
document.write(getSecondsToTomorrow())


document.write('<h2>Завдання 5:</h2>')

function formatDate(date) {
    let diff = new Date() - date; // різниця в мілісекундах
  
    if (diff < 1000) { // менше 1 секунди
      return 'прямо зараз';
    }
  
    let sec = Math.floor(diff / 1000); // перетворити різницю до секунд
  
    if (sec < 60) {
      return sec + ' сек. назад';
    }
  
    let min = Math.floor(diff / 60000); // перетворити різницю до хвилин
    if (min < 60) {
      return min + ' хв. назад';
    }
  
    // форматувати дату
    // додати нулі до однозначних днів/місяців/годин/хвилин
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // отримати останні 2 цифри кожного компоненту
  
    // з’єднати компоненти в дату
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }

  document.write(formatDate(new Date(new Date - 1)))
  document.write("<br>")
  document.write(formatDate(new Date(new Date - 30 * 1000)))
  document.write("<br>")
  document.write(formatDate(new Date(new Date - 5 * 60 * 1000)))