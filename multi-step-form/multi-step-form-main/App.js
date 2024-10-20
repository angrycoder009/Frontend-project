function nextStep(step){
    if(step ===2){
     document.querySelector('.text-2').style.display = 'none'
     document.querySelector('.text-3').style.display = 'block';
    } else if ( step === 3  ){
        document.querySelector('.text-3').style.display = 'none';
        document.querySelector('.text-4').style.display = 'block';
    }
}

function prevStep(step){
    if(step ===1){
     document.querySelector('.text-2').style.display = 'block'
     document.querySelector('.text-3').style.display = 'none';
    } else if ( step === 2  ){
        document.querySelector('.text-3').style.display = 'block';
        document.querySelector('.text-4').style.display = 'none';
    }
}

document.querySelector('button').addEventListener('click', (e) => {
    const name = document.querySelectorAll('.button-text');
    console.log(name);
    
    if (name.value === '') {
        return;
    }
    
    // Assuming you want to pass a step based on some condition
    nextStep(2);  // You need to define the step value (e.g., step 2 or step 3)
});
