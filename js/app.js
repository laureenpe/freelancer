function validateForm() {
    /* Escribe tú código aquí */
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var message = document.getElementById('message').value;
    var validateEmail = /\w+@\w+\.+[a-z]/;

    if (name === "" || email === "" || number === "" || message === "") {
        alert("Debe ingresar los campos obligatorios");
        return false;

    } else if (!validateEmail.test(email)) {
        alert("Debe ingresar un correo electrónico válido");
        return false;
    } else if (number.length == 11 && number.substr(0, 2) == "56" && number.substr(2, 1) == "9") { // si tamaño de telefono es = 11 y telefono desde la posicion 0(que es 5) cuenta 2 caracteres(que son 56) y telefono desde la posicion 2 (que es 9 (5 es pos0, 6 es pos1, 9 es pos2 )) cuenta 1 caracter
        return true;
    }






    /*
     * Archivo principal de funcionalidad de JS
    var validarTelefono = function(number) {
            if (number.length == 11 && telefono.substr(0, 2) == "56" && telefono.substr(2, 1) == "9") { // si tamaño de telefono es = 11 y telefono desde la posicion 0(que es 5) cuenta 2 caracteres(que son 56) y telefono desde la posicion 2 (que es 9 (5 es pos0, 6 es pos1, 9 es pos2 )) cuenta 1 caracter
                return true;
            }

    (function main() {
        var boxes = Array.from(document.getElementsByClassName("box-services"));
        var modal = document.getElementById("box-services-modal");
        var bodyModal, close, img;
        boxes.forEach(function(box) {
            box.addEventListener("click", function() {
                modal.innerHTML = "";
                bodyModal = document.createElement("div");
                bodyModal.classList.add("modal-body");
                bodyModal.innerHTML = box.innerHTML;
                modal.appendChild(bodyModal);
                modal.classList.remove("hide");
                close = document.createElement("div");
                close.classList.add("close");
                img = document.createElement("img");
                img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
                close.appendChild(img);
                modal.appendChild(close);
                close.addEventListener("click", function() {
                    modal.classList.add("hide");
                });
            });
        });
    })();*/