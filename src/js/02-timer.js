import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('[data-start]');
    const datetimePicker = document.querySelector('#datetime-picker');
    const countdownTimer = document.querySelector('.timer');

    let selectedDate;
    startButton.disabled = true;

    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            selectedDate = selectedDates[0];
            if (selectedDate < new Date()) {
                window.alert('Please choose a date in the future');
                startButton.disabled = true;
            } else {
                startButton.disabled = false;
            }
        },
    };

    flatpickr(datetimePicker, options);

function startCountdown(targetDate) {
    const daysElement = countdownTimer.querySelector('[data-days]');
    const hoursElement = countdownTimer.querySelector('[data-hours]');
    const minutesElement = countdownTimer.querySelector('[data-minutes]');
    const secondsElement = countdownTimer.querySelector('[data-seconds]');

    datetimePicker.disabled = true;

    function updateTimer() {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        const { days, hours, minutes, seconds } = convertMs(difference);

        if (difference <= 0) {
            clearInterval(timerInterval);
            startButton.disabled = true;
            return;
        }

        daysElement.textContent = formatTime(days);
        hoursElement.textContent = formatTime(hours);
        minutesElement.textContent = formatTime(minutes);
        secondsElement.textContent = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : `${time}`;
    }
    

    updateTimer();

    const timerInterval = setInterval(updateTimer, 1000);
}

    startButton.addEventListener('click', function () {
        if (selectedDate) {
            startCountdown(selectedDate);
        }
    });
}); 