document.addEventListener("DOMContentLoaded", function() {
    const BODY = document.getElementById("body");
    const BOTONCOLOR = document.getElementById("botonColor");
    const BOTON = document.getElementById("botonInputs");
    let inputs = document.getElementsByClassName("input");
    
    /**
    * @type {HTMLCanvasElement}
    */
    const CANVAS = document.getElementById("canvas");
    
    /**
    * @type {CanvasRenderingContext2D}
    */
    let ctx = CANVAS.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 300, 100);

    BOTONCOLOR.addEventListener("click", cambiarFondo);
    BOTON.addEventListener("click", borrarInputs);


    let colores = {
        1: ["red","pink"],
        2: ["black", "brown"],
        3: ["blue","aquamarine"],
        4: ["grey","white"],
        5: ["green","greenyellow"]
    };

    let numeroViejo = 0;
    let numero = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    function cambiarFondo() {
        numero = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        while (numero==numeroViejo) 
            numero = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        numeroViejo = numero;
        BODY.style.backgroundColor = colores[numero][0];
        BOTONCOLOR.style.backgroundColor = colores[numero][1];
    }

    function borrarInputs() {
        for(let i = 0; i < inputs.length; i++){
            console.log(inputs[i]);
            inputs[i].value = "";
        }
    }

    /*
    let matrizAleatoria = [];
    for (let i = 0; i < 100; i++) {
    matrizAleatoria[i] = [];
    for (let j = 0; j < 100; j++) {
        matrizAleatoria[i][j] = Math.floor(Math.random() * 100) + 1;
    }
    } */

    function valorMatriz(matriz){
        let fila = 0
        let resultado = 0
        while(fila<matriz.length){
            let columna = 0
            while(columna<matriz[fila].length){
                resultado += matriz[fila][columna]
                columna++
            }
            fila++
        }
        return resultado
    }

    function promedioMatriz(matriz){
        let arregloPromedios = [];
        let promedioFila = 0;
        let fila = 0
        let resultado = 0
        while(fila<matriz.length){
            let columna = 0
            while(columna<matriz[fila].length){
                resultado += matriz[fila][columna]
                columna++
            }
            promedioFila = resultado/matriz[fila].length;
            arregloPromedios.push(promedioFila)
            fila++
            resultado = 0
        }
        return arregloPromedios
        }
})



