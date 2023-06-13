function dividir(){
    let numero1=parseInt(document.getElementById("num1").value)
    let numero2=parseInt(document.getElementById("num2").value)
    let divide=numero1/numero2
    //Mostrar el resultado
    document.getElementById("resultado").textContent="la division es: "+divide;
}