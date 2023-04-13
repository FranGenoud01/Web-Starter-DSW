console.log('Hola Mundo');

window.addEventListener('load', ()=>{
const submitButton = document.querySelector('#submit');
submitButton?.addEventListener('click', (event)=>{
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const tel = document.querySelector('#tel').value;
    const message = document.querySelector('#message').value;

    if (name !== '' && email !== '' && message !== ''){
       //ok 
       document.querySelector('#user-name').innerHTML = name;
       document.querySelector('#user-email').innerHTML = email;
       document.querySelector('#user-tel').innerHTML = tel;
       document.querySelector('#user-message').innerHTML = message;
       document.querySelector('#ok').classList.add('show-ok');

    } else{
        //error
        document.querySelector('#error').classList.add('show-error');
    }
    });

    document.querySelector('#get-user').addEventListener('click', getUser);
});

function getUser(){
    fetch('https://randomuser.me/api/') 
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            const userData = response.results[0].name;
            document.querySelector('#user-name').innerHTML = `${userData.title}. ${userData.first} ${userData.last}`;
            const userDatajpg = response.results[0].picture;
            var imagen = document.getElementById("user-jpg");
            imagen.src = userDatajpg.large;
        })
        
}
