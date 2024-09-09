document.forms[0].addEventListener('submit',(e)=>{
    e.preventDefault();

    //get the values
    let amount = document.getElementById('amount').value;
    let term = document.getElementById('term').value;
    let rate = document.getElementById('rate').value;
   

    ///calucualte repayments
    const P = Number(amount);
    const r = (Number(rate)/100)/12;
    const monthlyInterestRate = r/12;
    const n = Number(term)/12;
    let monthlyReypayment;
     if(type.value === 'repayment'){
        monthlyReypayment = P * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
     } else{
        monthlyReypayment = P * monthlyInterestRate;
     }
   

     const totalRepayment = monthlyReypayment * n;
     document.querySelector('.result').innerHTML =`Your result is ${totalRepayment}`
     console.log(totalRepayment)
     
})