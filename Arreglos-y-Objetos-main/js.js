//objectos
/*
var frutas1 ={
    fruta1: "manzanas",
    fruta2: "mango",
    fruta3: "pera",
}
document.write("object "+frutas1.fruta3+ "<br>");

//arreglo
var frutas2 =[
    "piña",
    "mango",
    "pera"
]
document.write("arreglo"+frutas2[1]);
*/

/*
var frutas1 ={
    fruta1: "manzanas",
    fruta2: "mango",
    fruta3: "pera"
}
    //para recorrer el objecto
    for (pro in frutas1) {
        document.write("Propiedad: "+pro +"=>" +frutas1[pro]+ "<br>");
    }
*/
/*
var products ={}
Object.defineProperty(products, "fruta1", {value: "manzana", writable}
//products.fruta1 = "pera";
document.write(products.fruta1);
*/


//EJERCICIO 1
/*
var formulario ={
    id: "345678",
    nombre: "Anderson",
    edad: "23",
    pasatiempos: "Estudiar",
}
document.write("id= "+formulario.id+ "<br> nombre= "+formulario.nombre+ "<br> edad= " +formulario.edad+ "<br> pasatiempos= "+formulario.pasatiempos);
*/


//EJERCICIO 2
/*
var formulario2 ={
    id: "56784",
    nombre: "Mathias yepes",
    edad: "2",
    pasatiempos: "Es mi bb",
}
var accederid = formulario2["id"];
var accedernombre = formulario2["nombre"];
var accederedad = formulario2["edad"];
var accederpasatiempos = formulario2["pasatiempos"];

document.write("id: "+accederid+ "<br> nombre: "+accedernombre+ "<br> edad: "+accederedad+ "<br> pasatiempos: "+accederpasatiempos);
*/

//EJERCICIO 3
/*
var formulario2 ={
    id: "3748",
    nombre: "Carolina yepes",
    edad: "21",
    pasatiempos: "No hace nada",
}
document.write("id: "+formulario2.id+ "<br> edad: "+formulario2.edad);
    function formulario (nombre, pasatiempo){
        this.nombre = nombre;
        this.pasatiempo = pasatiempo;
    }

var texto = new formulario ("Carolina yepes", "No hace nada");
alert("nombre: "+texto.nombre+ " , Pasatiempos: "+texto.pasatiempo);
*/


//EJERCICIO 4

/*
var empleados ={
    nombre: [],
    cargo: [],
    salario: [],
}
for ( next = 0; next < 2; next++){
    empleados.nombre[next] = prompt("Digite el nombre por favor: ");
    empleados.cargo[next] = prompt("Digite el cargo por favor: ");
    empleados.salario[next] = prompt("Digite el salario por favor: ");
}
    for (i = 0; i < 2; i ++){
        document.write("Los nombres son: "+empleados.nombre+"<br> los cargos son: "+empleados.cargo+"<br> los salarios son: "+empleados.salario);
    }
*/




//EJERCICIO 5
/*
var productos ={
    nombre: [],
    presentacion: [],
    valor: []
}
for ( index = 0; index < 2; index++) {
    productos.nombre[index] = prompt("Digite el producto: ");
    productos.presentacion[index] = prompt("Digite la presentacion: "+index+0);
    productos.valor[index] = prompt("Digite el valor: ");
}
document.write("<table style boder= '1'>");

for (pro in productos) {
    document.write("<tr>");
    for (i = 0; i < 2; i ++){
        document.write("<td>");
        document.write(productos[pro][i]);
        document.write("/td");
    }
    document.write("</tr>");
}
document.write("<table>");
*/

//EJERCICIO 9
var legunbres =["papa, sandia, maracuya, sapote, pera"];

for(var i=0; i<legunbres.length; i++){
    document.write(legunbres)
}




//EJERCICIO 10
/*
var frutas =["mango, pera, papaya"];

frutas.push(prompt("ingrese la primer fruta: "));
frutas.push(prompt("Ingrese la segunda fruta: "));

for(var fruta of frutas){
    document.write("todas las frutas son: "+frutas+ " <br>");
}



//EJERCICIO 11
/*
var numeros =[
    3,5,9,10,35,42,12,22,25
]
document.write(numeros + "<br>");
document.write("El primer numero es: "+numeros[0]+ "<br>");
document.write("El numero de la mitad es: "+numeros[4]+ "<br>");
document.write("El ultimo numero es: "+numeros[8]);
*/




//EJERCICIO 12
/*
var pares =[3,5,9,10,35,42,12,22,25];

var ArregloPares = pares.filter(function(num){
    return num % 2 == 0;
});

document.write("Los numeros pares son los siguietes: "+ArregloPares);
document.write("<br>")

var ArregloImpares = pares.filter(function(num2){
    return num2 % 2 == 1;
});

document.write("Los numeros impares son los siguietes: "+ArregloImpares);
*/



//EJERCICIO 13
/*
var frutas =[
    "banano,manzana,pera,fresas,Sandia"
]
var verduras =[
    "tomate,cebolla,papa,ajo"
]

document.write("las frutas : " + frutas +"<br>");
document.write("Las verduras : "+ verduras);
*/



//EJERCICIO 14
/*
var num =[29,5,40,10,35,42,12,22,25,1,3];

for(var i=0; i < num.length; i++){
    document.write(num[i] + "<br>");
}

num.sort(function(a1, a2){
    if(a1<a2)
        return -1;
    else{
        return 1;
    }
});
document.write("ordenados asi de forma ascendente... <br>");
for(var i=0; i < num.length; i++){
    document.write(num[i] + "<br>");
}
*/



//EJERCICIO 15
/*
var num =[29,5,40,10,35,42,12,22,25,1,3];
document.write('num:', num);

var descentente = num.reverse();
document.write('Desendentes: ', descentente);
*/


//EJERCICIO 16
/*
var NumPares =[2,4,6,8,10,12,14,16,18,20,22];

function SeleccionarDatos(aleatorios){
    return aleatorios[Math.floor(Math.random() * aleatorios.length)]
}

document.write(SeleccionarDatos(NumPares));
*/




//EJERCICIO 17
/*
var arreglo1 = [3,5,9,10,35,42,12,22,25];
var arreglo2 = [9,5,33,12,7,20,22,3,8];
var suma1 = 0;
var suma2 = 0;
console.log(arreglo1.length)
for (i = 0; i < arreglo1.length; i++){
    suma1 = suma1 + arreglo1[i];
    suma2 = suma2 + arreglo2[i];
    document.write(arreglo1[i]+ " + "+arreglo2[i]+ " = "+(arreglo1[i]+arreglo2[i])+"<br>");
}
document.write(suma1+" + "+suma2+" = "+(suma1+suma2));
*/