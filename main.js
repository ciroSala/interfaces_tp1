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
    const CTX = CANVAS.getContext("2d");



    
    //4 - Pintar una región rectangular de un color utilizando el Contexto de HTML5.
    const imageData = CTX.createImageData(300,255);

    // function setPixel(imageData, x, y){
    //     let index = (x+y*imageData.height) * 4;
    //     imageData.data[index+0] = 255;
    //     imageData.data[index+1] = 0;
    //     imageData.data[index+2] = 0;
    //     imageData.data[index+3] = 255;
    // }

    // for(let y=0; y<imageData.height; y++){
    //     for(let x=0; x<imageData.width; x++){
    //         setPixel(imageData,x,y);    
    //     }
    // }

    degradienteImagen(imageData);
    CTX.putImageData(imageData, 0,0);

    //6 Especificar la función para pintar un cuadrado utilizando un gradiente de la siguiente forma:
    function degradienteImagen(imageData){
        for(let x = 0; x<imageData.width;x++){
            for(let y = 0; y<imageData.height; y++){
                let index = (x+y*imageData.width) * 4;
                imageData.data[index+0] = y;
                imageData.data[index+1] = y;
                imageData.data[index+2] = y;
                imageData.data[index+3] = 255;
            }
        }
    }

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



