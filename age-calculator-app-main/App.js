const outputYear = document.querySelector('.js-years');
const outputMonth = document.querySelector('.js-months');
const outputDay = document.querySelector('.js-days');
let isvalid = true;

const inputYear = document.querySelector('.js-input-year');
const inputMonth = document.querySelector('.js-input-month');
const inputDay = document.querySelector('.js-input-day');

const errorYear = document.querySelector('.error-year');
const errorMonth = document.querySelector('.error-month');
const errorDay = document.querySelector('.error-day');

document.querySelector('.calculateBtn').addEventListener('click', () => {
    isvalid = true;
    inputDay.dispatchEvent(new Event('blur'));
    inputMonth.dispatchEvent(new Event('blur'));
    inputYear.dispatchEvent(new Event('blur'));

    if (isvalid) {
        calculateAge(+inputDay.value, +inputMonth.value, +inputYear.value);
    }
});

inputDay.addEventListener('blur', () => {
    errorDay.style.display = 'none';
    const dayValue = +inputDay.value;

    if (dayValue === 0) {
        isvalid = false;
        errorDay.textContent = 'This field is required';
        errorDay.style.display = 'inline';
        return;
    } 
    if (dayValue < 1 || dayValue > 31) {
        isvalid = false;
        errorDay.textContent = 'Must be a valid Date';
        errorDay.style.display = 'inline';
    }
});

inputMonth.addEventListener('blur', () => {
    errorMonth.style.display = 'none';
    const monthValue = +inputMonth.value;

    if (monthValue === 0) {
        isvalid = false;
        errorMonth.textContent = 'This field is required';
        errorMonth.style.display = 'inline';
        return;
    } 
    if (monthValue < 1 || monthValue > 12) {
        isvalid = false;
        errorMonth.textContent = 'Must be a valid Month';
        errorMonth.style.display = 'inline';
    }
});

inputYear.addEventListener('blur', () => {
    errorYear.style.display = 'none';
    const yearValue = +inputYear.value; 
    const currentYear = new Date().getFullYear(); 

    if (yearValue === 0) {
        isvalid = false;
        errorYear.textContent = 'This field is required';
        errorYear.style.display = 'inline'; 
        return; 
    }
    if (yearValue < 1900 || yearValue > currentYear) {
        isvalid = false; 
        errorYear.textContent = 'Must be a valid year';
        errorYear.style.display = 'inline';
    }
});

function calculateAge(day, month, year) {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    outputYear.textContent = `${ageYears}years`;
    outputMonth.textContent = `${ageMonths}months`;
    outputDay.textContent = `${ageDays}days`;

    console.log("Age:", ageYears, "Years", ageMonths, "Months", ageDays, "Days");
}
document.addEventListener('DOMContentLoaded', () => {
    const inputYear = document.querySelector('.js-input-year');
    const inputMonth = document.querySelector('.js-input-month');
    const inputDay = document.querySelector('.js-input-day');

    inputYear.value = '';
    inputMonth.value = '';
    inputDay.value = '';
});
