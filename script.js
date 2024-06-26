const form = document.getElementById('form');
const username = document.getElementById('username');

const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();

    const passwordValue = password.value.trim();


    if(usernameValue === '') {
        setError(username, 'Usuário deve ser preenchido!');
    } else {
        setSuccess(username);
    }



    if(passwordValue === '') {
        setError(password, 'Senha deve ser preenchido!');
    } else if (passwordValue.length < 6) {
        setError(password, 'Senha deve ter entre 6 a 30 caracteres')
    } else if (passwordValue.length > 30 ) {
        setError(password, 'Senha deve ter entre 6 a 30 caracteres')
    }else {
        setSuccess(password);
    }



};
