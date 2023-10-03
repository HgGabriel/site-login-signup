document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login')



    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const username = document.querySelector('#login__name').value;
        const password = document.querySelector('#login__password').value;

        const storedUsername = localStorage.getItem('username')
        const storedPassword = localStorage.getItem('password')

        if (username == storedUsername && password == storedPassword) {
            alert('Login bem-sucedido!');
            form.reset();
            window.open("http://fatecmaua.com.br", "_self")
        } else {
            alert('Credenciais inválidas. Tente novamente.');

        }
        
    })


})