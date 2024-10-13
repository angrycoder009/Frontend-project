const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit',(e)=>{
 e.preventDefault()
 const heightInput = parseInt(document.querySelector('.height').value)
 const weightInput = parseInt(document.querySelector('.weight').value)
 const results= document.querySelector('.result')
if(heightInput==='' ||heightInput<0 || isNaN(heightInput)){
    results.innerHTML ='plase enter valid Height'
}else if(weightInput==='' ||weightInput<0 || isNaN(weightInput)){
    results.innerHTML ='plase enter valid Height'
} else{
   const bmi = (weightInput/((heightInput*weightInput)/10000)).toFixed(2)
//    results.innerHTML =`<p>${bmi}</p>`
   if(bmi>0 && bmi<=44){
     results.innerHTML =`<p>${bmi}underweight</p>`
   } else if(bmi>45 && bmi<=77){
    results.innerHTML =`<p>${bmi}fit</p>`
  }else if(bmi>78 && bmi<=150){
    results.innerHTML =`<p>${bmi}overwight</p>`
  }
}
})