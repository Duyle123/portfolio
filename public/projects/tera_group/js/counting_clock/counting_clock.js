const countdown = () => {
    const countDate = new Date("January 01, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const minute = 60000
    const hour = minute*60
    const day = hour*24

    const textDay = (Math.floor(gap/day)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const textHour = (Math.floor((gap%day)/hour)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const textMinute = (Math.floor((gap%hour) / minute)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;

};

setInterval(countdown, 1000);