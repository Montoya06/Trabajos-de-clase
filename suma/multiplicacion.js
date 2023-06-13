function multiplicar(){
    let numero1=parseInt(document.getElementById("num1").value)
    let numero2=parseInt(document.getElementById("num2").value)
    let multiplica=numero1*numero2
    //Mostrar el resultado
    document.getElementById("resultado").textContent="la multiplicacion es: "+multiplica;
}