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