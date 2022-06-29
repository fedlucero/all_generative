// Esto se ejecuta 1 sola vez
let posX, posY, size,x,y

let c,m,ye


function random(min, max) {
    return Math.floor((fxrand() * (max - min + 1)) + min);
}

let t
function setup(){
    createCanvas(windowWidth,windowHeight)
    frameRate(60)
    background(200)
    posX = 0
    posY = 0
    size = 50
    c = color('rgba(0,159,227, 0.25)')
    m = color('rgba( 230,0,126, 0.25)')
    ye = color('rgba(255,237,0, 0.25)')
    
}
// Esto corre en bucle hacia el infinito
function draw(){
    noFill()
    stroke(200)
    strokeWeight(40)
    rect(0,0,windowWidth,windowHeight)
    
    const uno = fxrand() > 0.75
    const dos = fxrand() > 0.6
    const tres = fxrand() > 0.4
    const sePuedeDibujar = fxrand() > 0.3

    stroke(0)
    fill(0)
    strokeWeight(2)
    if(sePuedeDibujar){
        if(uno){
            t = random(10,30)
            
            line(posX, posY, posX, posY + size)
            fill(c)
            noStroke()
            ellipse(posX + size, posY + size,t,t)
        }else if(dos){
            
            line(posX, posY, posX +size, posY )
            fill(m)
            noStroke()
            t = random(10,20)
            ellipse(posX + size, posY,t,t)
            
        }else if(tres){
            
            t = random(10,30)
            line(posX, posY, posX + size, posY + size)
            fill(ye)
            noStroke()
            ellipse(posX + size, posY + size,t,t)
        }else{
            
            line(posX + size, posY, posX, posY + size)
            fill(0)
            noStroke()
            t = random(10,20)
            ellipse(posX + size, posY + size,t,t)
            
        }
    }
   
    


   

    // Calcula la próxima posición
    if(posY < height){
        if(posX < width){
            posX += size
        }else{
            posX = 0
            posY += size
        }
    }else{
        noLoop()
    }

    
}