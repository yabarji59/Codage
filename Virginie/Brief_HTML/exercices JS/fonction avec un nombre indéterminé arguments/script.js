function sommeTotale() {
    var index;
    var somme = 0;
    for(index = 0; index < arguments.length; ++index) {
      somme += arguments[index];
    }
    return somme;
  }
   
  var a = 1;
  var b = 1;
  var c = 2;
  var d = 3;
  var e = 5;
   
  document.writeln("Variables définies :");
  document.writeln("a = "+a);
  document.writeln("b = "+b);
  document.writeln("c = "+c);
  document.writeln("d = "+d);
  document.writeln("e = "+e);
  document.writeln("")
   
  document.writeln("Additions :");
  document.writeln("Somme de a ("+a+"), b ("+b+") et c ("+c+") : sommeTotale(a, b, c) = "+sommeTotale(a, b, c));
  document.writeln("Somme de b ("+b+") et d ("+d+") : sommeTotale(b, d) = "+sommeTotale(b, d));
  document.writeln("Somme de a ("+a+"), b ("+b+"), c ("+c+"), d ("+d+") et e ("+e+") : sommeTotale(a, b, c, d, e) = "+sommeTotale(a, b, c, d, e));
  document.writeln("Somme d'aucun élément : sommeTotale() = "+sommeTotale());