document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.querySelector('#signup__name').value;
        const email = document.querySelector('#signup__email').value;
        const password = document.querySelector('#signup__password').value;
        const passwordConf = document.querySelector('#signup__password__conf').value;

        if (password !== passwordConf) {
            alert('As senhas devem ser as mesmas!!');
        } else {
           
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            alert('Cadastro realizado com sucesso!');
            form.reset();

            console.log(username);
            console.log(email);
            console.log(password);
            console.log(passwordConf);
        }
    });
});


