/*No esta funcionando*/
document.getElementById("button-send").addEventListener("click", validateForm); //para interactuar los listeners

function validateForm(event) {
    console.log("click!");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var validateEmail = /\w+@\w+\.+[a-z]/;

    var result = true;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Debe ingresar los campos obligatorios");
        result = false;
    }

    if (!validateEmail.test(email)) {
        alert("Debe ingresar un correo electrónico válido");
        result = false;
    }

    if ((phone.length != 11) || (phone.substr(0, 2) != "56") || (phone.substr(2, 1) == "9")) {
        // si tamaño de telefono es = 11 y telefono desde la posicion 0(que es 5) cuenta 2 caracteres(que son 56) 
        // y telefono desde la posicion 2 (que es 9 (5 es pos0, 6 es pos1, 9 es pos2 )) cuenta 1 caracter
        result = false;
    }

    return result;
}

var modal = document.getElementById('modal-box');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var images = document.getElementsByClassName("portafolio-img");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        modal.style.display = "block";
    });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}