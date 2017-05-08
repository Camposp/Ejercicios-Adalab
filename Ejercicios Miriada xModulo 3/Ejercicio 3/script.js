// //Ejercicio 1: recorre con un array todas las cartas de la baraja.
//
var palo = ["d","t","c","p"];
var caja = [];

for (var i = 0; i < palo.length; i++) {
  for (var j = 1; j <=13; j=j+1) {
    var carta = {palo:palo[i], valor:j};
    caja [caja.length]=carta;
    console.log(carta);
  }
}
// //Ejercicio 2: Separar las cartas rojas de las negras.
//
var palo = ["d","t","c","p"];
var red = [];
var black = [];
for (var i = 0; i < caja.length; i++) {
  var current = caja[i];
  var isRed = current.palo === "c" || current.palo === "d"
  if (isRed){
    red[red.length] = current;
  } else{
    black[black.length] = current;
  }
}
console.log(red);
console.log(black);

//Ejercicio 3: Nuevo array rojo y par.
var palo = ["d","t","c","p"];
for (var i = 0; i < caja.length; i++)
{
  var current = caja[i];
  console.log(current.palo);
  var isRed = current.palo === "c" || current.palo === "d"
    if (isRed)
    {
      red[red.length] = current;
    }
}
    console.log(red.length);
