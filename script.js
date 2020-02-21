'use strict';
const times = () => {
    let currentDate = new Date(),
        newYear = new Date(2020, 11, 31),
        newYaerLeft = Math.ceil((newYear - currentDate) / 1000 / 60 / 60 / 24),
        day = currentDate.toLocaleString('ru', { weekday: 'long' }),
        hours = currentDate.getHours(),
        upDay = day[0].toUpperCase() + day.slice(1),
        time = currentDate.toLocaleTimeString('ru'),
        timesOfDay;
    

    if (hours >= 5 && hours <= 11) {
        timesOfDay = 'Доброе утро';
    } else if (hours > 11 && hours <= 17) {
        timesOfDay = 'Добрый день';
    } else if (hours > 17 && hours <= 23) {
        timesOfDay = 'Добрый вечер';
    } else if (hours > 23 || hours < 5) {
        timesOfDay = 'Доброй ночи';
    }
    let greeting = document.querySelector('.greeting'),
        today = document.querySelector('.today'),
        currentTime = document.querySelector('.current-time'),
        newY = document.querySelector('.new-year');
        greeting.value = timesOfDay;
        today.value = `Сегодня: ${upDay}`;
        currentTime.value = `Текущее время: ${time}`;
        newY.value = `До Нового года осталось ${newYaerLeft} дней`;

};

setInterval(times, 1000);
