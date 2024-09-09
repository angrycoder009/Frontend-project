function getAge(){
    const dayElement=document.querySelector('.js-input-day').value;
    const monthElement =document.querySelector('.js-input-month').value;
    const yearInput =document.querySelector('.js-input-year').value;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month =currentDate.getMonth()+1;
    const day = currentDate.getDate();
  
    let ageYears = year - yearInput;
    let ageMonths = month - monthElement;
    let ageDays = day- dayElement;

    if(ageDays<0){
        ageMonths--;

        const previousMonth = month ===1?12:month-1;
        const dayInpreviousMonth = new Date(year,previousMonth,0).getDate();
        ageDays+=dayInpreviousMonth
    }
    if(ageMonths<0){
        ageYears--;
        ageMonths+=12   
    }
    document.querySelector('.js-years').innerHTML=`${ageYears}years`
    document.querySelector('.js-months').innerHTML=`${ageMonths}months`
    document.querySelector('.js-days').innerHTML=`${ageDays}days`
}