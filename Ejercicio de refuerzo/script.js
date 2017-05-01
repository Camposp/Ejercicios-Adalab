var arrayDeNumeros = [1,1,3,5,6,5,4,3,6,7,3,4,4];
var numero = prompt("Introduce un número");


function cuentaUnNumero(numero,arrayDeNumeros)
{
  var cuantasVecesSeRepiteElNumero= 0;
  for(var i=0; i<arrayDeNumeros.length;i++){
    if (numero==arrayDeNumeros[i]) {
      cuantasVecesSeRepiteElNumero++;
    }//FIN IF
  }//fIN FOR
  return cuantasVecesSeRepiteElNumero;
}// FIn funcion


var resultado =  cuentaUnNumero(numero,arrayDeNumeros);

document.write(resultado);
