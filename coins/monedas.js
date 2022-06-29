// Esto se ejecuta 1 sola vez
let posX, posY, size
const colors1 = ["#5899E2"]
const colors4 = ["#BD93D8"]//si
const colors7 = ["#fee440"] 
const colors9 = ["#f7a278"] //si
const colors10 = ["#19323c"]//si
const colors11 = ["#8093f1"]
const colors13 = ["#FFCC29"]//si
const colors14 = ["#FFC069"]//si
const colors17 = ["#fbff12"]//si
const colors19 = ["#000000"]//si
const colors21 = ["#db7c26"]
const colors22 = ["#ff0054"] // eh
const colors24 = ["#414770"]
const colors26 = ["#ffbc42"]//si

// const colors1 = ["#274060","#335C81","#65AFFF","#5899E2"]
// const colors4 = ["#61E294","#7BCDBA","#9799CA","#BD93D8"]//si
// const colors7 = ["#9b5de5","#f15bb5","#fee440"] 
// const colors9 = ["#6dd3ce","#c8e9a0","#f7a278"] //si
// const colors10 = ["#f2545b","#a93f55","#19323c"]//si
// const colors11 = ["#f7aef8","#b388eb","#8093f1"]
// const colors13 = ["#00AF91","#F58634","#FFCC29"]//si
// const colors14 = ["#4A403A","#A45D5D","#FFC069"]//si
// const colors17 = ["#0c0f0a","#ff206e","#fbff12"]//si
// const colors19 = ["#000000","#000000","#000000"]//si
// const colors21 = ["#780116","#f7b538","#db7c26"]
// const colors22 = ["#390099","#9e0059","#ff0054"] // eh
// const colors24 = ["#f46036","#5b85aa","#414770"]
// const colors26 = ["#006ba6","#0496ff","#ffbc42"]//si






const colores = [ colors1,colors4,colors7,colors9,colors10,colors11,colors13,colors14,colors17,colors19,colors21,colors22,colors24,colors26]




let rojo,amarillo,azul


function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
}

const elegido = randomFromList(colores)


function setup(){
    createCanvas(windowWidth, windowHeight)
    background(245)
    posX = 0
    posY = height-10
    size = 50
    amarillo= color(245, 182, 87)
   
    
    

}
// Esto corre en bucle hacia el infinito
function draw(){

    // noStroke()
    // fill(azul)
    // ellipse(posX,posY+10,size*2,size)
    // fill(255)
    // ellipse(posX,posY,size*2,size)

    // const esLineaDerecha = fxrand() > 0.3
    // const sePuedeDibujar = fxrand() > 0.4
    const monedaSalida = fxrand() > 0.5

    if(monedaSalida){
        fill(0,0,0,53)
        ellipse(posX+size,posY+43,size,size/4)
        noStroke()
        fill(random(elegido))
        ellipse(posX,posY+15,size*2,size)
        fill(235)
        ellipse(posX,posY,size*2,size)
        noStroke()
        fill(random(elegido))
        ellipse(posX+size,posY+18,size*2,size)
        fill(255)
        ellipse(posX+size,posY+8,size*2,size)
        
    }else{
        noStroke()
        fill(random(elegido))
        ellipse(posX,posY+15,size*2,size)
        fill(235)
        ellipse(posX,posY,size*2,size)
    }
    
    // stroke(255)
    // let grosor = map(fxrand(), 0, 1, 3, 5)
    // strokeWeight(grosor)
    // stroke(randomFromList(colors))
    // if(sePuedeDibujar){
    //     if(esLineaDerecha){
    //         line(posX, posY, posX + size, posY + size)
    //     }else{
    //         line(posX + size, posY, posX, posY + size)
    //     }
    // }

    // Calcula la próxima posición
    if(posY < height){
        if(posX < width){
            posX += (size*2)-4
        }else{
            posX = 0
            posY += -(size-25)
        }
    }else{
        noLoop()
    }
}