setInterval(()=>{
    let date = new Date()
    
    document.querySelector('.clock').innerHTML =date.toLocaleTimeString()
},1000)