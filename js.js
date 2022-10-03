///////////////////////////////////////////////////////////////////////////////////////////////
function kilometros() {
    var distancia = document.getElementById("distancia").value ;
        parseInt(distancia);
        if (distancia<=0) {alert("La distancia ingresada es incorrecta");
}else

            if(((distancia <= 40) && (distancia>=1))) { 
                alert("El envío de cualquier producto hasta tu ubicacion es GRATIS!");
            }else { 
                alert("Estás a mas de 40km de San Nicolas. El envío de cualquier producto hasta tu ubicacion es de $800");
            }				
}
///////////////////////////////////////////////////////////////////////////////////////////////
function enviogratis(){
    let gratis = document.getElementById("gratis");
    let gratuito = gratis.value;

    document.getElementById("gratuito").innerText = alert(`El envío hasta ${gratuito} es GRATIS!`);
}
///////////////////////////////////////////////////////////////////////////////////////////////
function productos() {
    window.location.href = ('productos.html');
}
///////////////////////////////////////////////////////////////////////////////////////////////
function salir() {
    var confirmar = confirm('Estas por salir de nuestro sitio web! ¿Continuar?');
    if (confirmar) {
        window.location.href = ('https://www.google.com');
    } else {

    }
}
///////////////////////////////////////////////////////////////////////////////////////////////