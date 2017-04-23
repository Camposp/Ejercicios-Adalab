var carta = "7d";
var numero = carta[0];
var palo = carta[1];
var numerocartaAnterior = numero-1;
var cartaAnterior = numerocartaAnterior + palo;
console.log(cartaAnterior);

var numeroCartaSiguiente = +numero+1;
var cartaSiguiente = numeroCartaSiguiente + palo;
console.log(cartaSiguiente);

var all = cartaAnterior + carta + cartaSiguiente;
console.log(all);
