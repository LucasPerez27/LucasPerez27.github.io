let edad=Number(prompt("Ingresa tu edad:"))
if (edad<=0) {alert("La edad ingresada es incorrecta. Por favor ingese su edad real.")
window.location.href = ('index.html');}

else {

if((edad>0) && (edad>=18))
{
    window.location.href = ('inicio.html');
}else
{
    alert("Eres menor de edad!!! INGRESARAS BAJO TU RESPONSABILIDAD.")
    window.location.href = ('inicio.html');
}
}
