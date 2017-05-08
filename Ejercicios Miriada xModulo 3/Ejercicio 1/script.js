
var palo = ["d","t","c","p"];
var caja = []

for (var i = 0; i < palo.length; i++) {
  for (var j = 1; j <=13; j=j+1) {
    var carta = {palo:palo[i], valor:j};
    caja [caja.length]=carta;
    console.log(carta);
  }
}
