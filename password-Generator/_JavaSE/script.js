let slider = document.querySelector('#slider');
let button = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#conteiner-password');

let charset = "ABCDEFGHIJLMNOPQRSTUVXZabcdefghijlmnopqrstuvxz1234567890@!#$%";

    sizePassword.innerHTML = slider.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

// variable of text to copy -----------------------
let passwordCopy = "";

// function do generate de password on click ================
function generatePassword(){
    
    let pass = "";
    let i = 0;
    let n = charset.length;
    for (let i = 0; i<slider.value; ++i){

        // Guarantee that will be at least 1 upper char -------------------
        if (i == 0){

            pass += charset.charAt(Math.floor(Math.random()* 25))

        }

        // generate password ----------------
        if(i>0 && i!=slider.value - 3){

        pass += charset.charAt(Math.floor(Math.random() * 61));

        }

        // Guarantee that will be at least 1 symbol ------------------
        if(i == slider.value - 3){

        pass += charset.charAt(Math.floor(Math.random() * 5)+56);

        }
    }

    
    // remove hide and transfer password to password to password box ------------------
    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    passwordCopy = pass

}

// copy the contentPassword to clipboard ===========================
function copyPassword(){
    
    navigator.clipboard.writeText(passwordCopy);
    
}

//associating buttons.onclick to their respective functions ---------------------------
button.onclick = generatePassword;
containerPassword.onclick = copyPassword;
