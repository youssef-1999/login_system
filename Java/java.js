let loginEmail = document.querySelector('#loginEmail');
let loginPassword = document.querySelector('#loginPassword');
let loginError = document.querySelector('#loginError');

let signupName = document.querySelector('#signupName');
let signupEmail = document.querySelector('#Signupemail');
let signupPassword = document.querySelector('#Signuppassword');
let logout = document.querySelector('#logout');

let usersLists = JSON.parse(localStorage.getItem('usersInfo')) || [];

function createUsers() {
    if (!signupName.value || !signupEmail.value || !signupPassword.value) {
        document.getElementById('registered').innerHTML = `<p class="text-danger">All fields are required!</p>`;
        return;
    }
    
    var existingUser = usersLists.find(user => user.email === signupEmail.value);
    if (existingUser) {
        document.getElementById('registered').innerHTML = `<p class="text-danger">Email already registered!</p>`;
        return;
    }
    
    var user = {
        Name: signupName.value,
        email: signupEmail.value,
        pass: signupPassword.value
    };
    
    usersLists.push(user);
    localStorage.setItem('usersInfo', JSON.stringify(usersLists));
    document.getElementById('registered').innerHTML = `<p class="text-success">Successfully registered!</p>`;
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 1500);
}

function logoutUser() {
    localStorage.removeItem('userName');
    window.location.href = "../index.html";
}
function checkLocalStorage() {
    var storedUsers = JSON.parse(localStorage.getItem('usersInfo')) || [];
    var foundUser = storedUsers.find(user => user.email === loginEmail.value && user.pass === loginPassword.value);
    
    if (foundUser) {
        localStorage.setItem('userName', foundUser.Name);
        window.location.href = "../Pages/home.html";
    } else {
        loginError.classList.remove('d-none');
        loginError.innerHTML = `<p>Invalid email or password</p>`;
    }
}

function showPassword() {
    var passwordFields = document.querySelectorAll('[type="password"]');
    passwordFields.forEach(field => {
        field.type = field.type === 'password' ? 'text' : 'password';
    });
}
