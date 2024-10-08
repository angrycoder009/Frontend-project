const myArray =[{
    url : 'www.website.com',
    username :'Gopal Yadav',
    password : '123456789'
}
]
let editIndex = -1;
rendering();
function rendering(){
    let savePasswordHTML = ''
    myArray.forEach((myArrayObj , index )=>{
        const{url,username,password}=myArrayObj;
        const HTML = `
        <div> ${url}</div>
         <div> ${username}</div>
         <div> ${password}</div>
         <button class = "jsbtn" onclick="
         myArray.splice(${index}, 1);
        rendering();
         ">Delete</button>
         <button  class = "jsbtn"   onclick="editPassword(${index})">Edit</button>
         `;
         savePasswordHTML +=HTML;
    })
    document.querySelector('.result')
    .innerHTML = savePasswordHTML;
}
function addPassword(){
    const url = document.querySelector('.url')
    const username = document.querySelector('.username')
    const password = document.querySelector('.password')
   const urlInput = url.value;
   const usernameInput = username.value;
   const passwordInput = password.value;
   if(editIndex ===-1){
   myArray.push({
    url : urlInput,
    username :usernameInput,
    password :passwordInput
   })
}else{
    myArray[editIndex] = {
        url: urlInput,
        username: usernameInput,
        password: passwordInput
    };
    editIndex = -1; // Reset after editing
}
   console.log(myArray)
   clearInputFields();
   rendering();
}

function editPassword(index){
    const{url,username,password}=myArray[index];
    document.querySelector('.url').value = url;
    document.querySelector('.username').value = username;
    document.querySelector('.password').value = password;
    editIndex = index;
}
function clearInputFields() {
    document.querySelector('.url').value = '';
    document.querySelector('.username').value = '';
    document.querySelector('.password').value = '';
}