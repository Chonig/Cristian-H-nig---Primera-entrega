alert("Bienvenido, Ingrese su nombre para continuar");
let nombreSaludo = prompt("Ingrese su nombre:");

function saludo (){
    return alert("Hola "  +  nombreSaludo  +  "  Bienvenido al simulador de cuotas, aqui podras calcular los interes de un monto final ");
}

saludo()

let consulta = prompt("¿Desea hacer un calculo? si / no ");

while( consulta == "si"){
    
    let montoCalculado = parseInt(prompt("¿Que monto desea calcular?"));
    let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas: (3,6,12,18,24)"));
    alert("la cantidad de cuotas ingresadas es: " + cantidadCuotas);
    

    if (cantidadCuotas == 3 ||cantidadCuotas == 6 ){
        alert( "El valor para 3 o 6 cuotas con un 10% de recargo es de: " + (montoCalculado+(montoCalculado*0.10)));  
        consulta = prompt("¿Desea hacer otro calculo? si / no");
         
    }else if (cantidadCuotas == 12 ){
        alert( "El valor para 12 cuotas con un 20% de recargo es de: " + (montoCalculado+(montoCalculado*0.20)));
        consulta = prompt("¿Desea hacer otro calculo? si / no");
        
    }else if (cantidadCuotas == 18 ){
        alert( "El valor para 18 cuotas con un 40% de recargo es de: " + (montoCalculado+(montoCalculado*0.40)));  
         consulta = prompt("¿Desea hacer otro calculo? si / no");

    }else if (cantidadCuotas == 24 ){
        alert( "El valor para 24 cuotas con un 80% de recargo es de: " + (montoCalculado+(montoCalculado*0.80)));
         consulta = prompt("¿Desea hacer otro calculo? si / no");

    }else{
        alert( "hasta luego")
    }
}

 alert(" hasta luego ");