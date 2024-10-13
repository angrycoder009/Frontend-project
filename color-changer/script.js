const btn = document.querySelectorAll('.js-button')
const body  = document.querySelector('body')
btn.forEach((button)=>{
    console.log(button)
    button.addEventListener('click',(e)=>{
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        } else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        } else if(e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'violet'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
    })
})