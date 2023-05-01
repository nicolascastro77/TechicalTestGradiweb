const form = document.getElementById("form");           //Leemos el form    
const emailField = document.getElementById("user-email");    //Leemos el form en su valor user-email

function logSubmit() {
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;    //Regex para determinar valor valido de email

    if (validEmail.test(emailField.value)) {        //Compaamos valores con el Regex
        alert('Email is valid');
        return true;
    } else {
        alert('Email is invalid');
        return false;
    }
}

form.addEventListener("submit", logSubmit);         //Cuando se realice el sumbit del form

export default logSubmit;