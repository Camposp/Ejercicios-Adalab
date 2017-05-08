var palos = ["Corazones", "Diamantes","Tréboles", "Picas"];

for (var i = 0; i <palos.length; i++)
{
  for (var j = 1; j <=12; j++)
  {
    if ((j%3==0 && palos[i]=="Corazones") || (j%3==0 && palos[i]=="Diamantes") )
    {
      console.log(j+palos[i]);
    }
  }
}
