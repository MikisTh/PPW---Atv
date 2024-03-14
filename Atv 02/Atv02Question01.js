function calculadoraIMC (altura, peso){
    Int = altura, peso;
    return IMC = peso/(altura * altura);
}

    let peso = prompt ("Informe o peso:");
    let altura = prompt ("Informe a altura:");

    if(IMC < 18.5){
        console.log("Abaixo do Peso!");
    }else if(IMC > 18.5 || IMC < 24,9){
        console.log("Peso Normal!");
    }else if(IMC > 25.0 || IMC < 29.9){
        console.log("Excesso de Peso!");
    }else if(IMC > 30.0 || IMC < 34.4){
        console.log("Obesidade grau I!");
    }else if(IMC > 35.0 || IMC < 39.9){
        console.log("Obesidade grau II!");
    }else(IMC > 40.0);{
        console.log("Obesidade grau III!");
    }
