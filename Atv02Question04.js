function verificadorTriangular(l1, l2, l3){
  double = l1, l2, l3;

  let l1 = prompt("informe o valor do primeiro lado:");
  let l2 = prompt("informe o valor do segundo lado:");
  let l3 = prompt("informe o valor do terceiro lado:");


  if(l1+l2>l3 && l1+l3>l2 && l2+l3>l1){
      console.log("Triângulo válido!");
  } else {
      console.log("Triângulo não é válido!");
  }
  if(l1!=l2!=l3){
      console.log("O triângulo é escaleno!");
  }else if(l1==l2!=l3 && l1!=l2==l3 && l2!=l1==l3){
      console.log("O triângulo é isósceles!");
  }else(l1==l2==l3);{
      console.log("O triangulo é equilátero!");
}
}
