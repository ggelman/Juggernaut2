const pass = 'jug!@123';
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formPassword = document.querySelector('#password').value;
    const userName = document.querySelector('#user').value;
    
    if(pass === formPassword){
        localStorage.setItem('userName', userName);
        window.location.href = 'dados.html';
    } else {
        alert('Você precisa de uma permissão para acessar a página');
        document.querySelector('#password').focus();
    }
});
