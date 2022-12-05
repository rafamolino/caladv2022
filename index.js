function PlaySound(soundobj) {

    var thissound = document.getElementById(soundobj);

    thissound.play();

}


function PauseSound(soundobj) {

    var thissound = document.getElementById(soundobj);

    thissound.pause();

}
function comprobarResultado() {
    var input = document.getElementById("num").value
    if (input == 3078) {
        Swal.fire({
            title: 'Correcto',
            text: 'Entra ahora en el enlace dado, pega el siguiente código y dale a convertir: 48,61,63,65,72,6c,6f,20,65,6e,20,74,6f,64,61,73,20,6c,61,73,20,68,61,62,69,74,61,63,69,6f,6e,65,73,20,64,65,20,6c,61,20,63,61,73,61,20,65,6e,20,6d,65,6e,6f,73,20,64,65,20,32,34,20,68,6f,72,61,73,2e,2e,2e',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Haz bien los cálculos...',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }

}
