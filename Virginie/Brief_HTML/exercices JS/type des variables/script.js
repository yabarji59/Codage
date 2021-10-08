let a = "1";
let b = "2";
let c = a + b;

document.writeln("Type des variables");

document.writeln("");

document.writeln("Type et valeur des variables :");
document.writeln("  a ("+typeof(a)+") "+a);
document.writeln("  b ("+typeof(b)+") "+b);
document.writeln("  c ("+typeof(c)+") "+c);
 
document.writeln("");
 
a = parseInt(a);
b = parseInt(b);
c = a + b;
 
document.writeln("Type et valeur des variables :");
document.writeln("  a ("+typeof(a)+") "+a);
document.writeln("  b ("+typeof(b)+") "+b);
document.writeln("  c ("+typeof(c)+") "+c);