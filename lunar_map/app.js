// Esto se ejecuta 1 sola vez
let posX, posY, size
const colors1 = ["#f1aecf"]
const colors2 = ["#f2b5d3"]//
const colors3 = ["#bbbadf"] 
const colors4 = ["#cfbae1"] //
const colors5 = ["#8ecae6"]
const colors6 = ["#abd8ed"]
const colors7 = ["#b8e0d2"]
const colors8 = ["#d6eadf"]
const colors9 = ["#fdf2c4"]
const colors10 = ["#90e0ef"]
// const colors11 = ["#293241"]
// const colors12 = ["#EE6C4D"]
// const colors13 = ["#1D3557"]
// const colors14 = ["457B9D"]
// const colors15 = ["#A8DADC"]
// const colors16 = ["#E63946"]
// const colors17 = ["#edd55c"]
// ,colors11,colors12,colors13,colors14,colors15,colors16,colors17

const colores = [ colors1,colors2,colors3,colors4,colors5,colors6,colors7,colors8,colors9,colors10]
const color1 = randomFromList(colores)

function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
}

function random(min, max) {
    return Math.floor((fxrand() * (max - min + 1)) + min);
}
function randomFromList(items){
  return items[Math.floor(fxrand()*items.length)];
  }
let x,y,tam

function setup(){
    createCanvas(windowHeight, windowHeight)
    
    function random(min, max) {
        return Math.floor((fxrand() * (max - min + 1)) + min);
    }
    tam  =  Math.floor(random(windowHeight*0.1,windowHeight*0.2))
    tam2 = Math.floor(random(windowHeight*0.05,windowHeight*0.2))
    x  =  Math.floor(random(tam*2+25,windowHeight-tam*2-25))
    // x  =  Math.floor(random(windowHeight/7,windowHeight*6/7))
    y  =  Math.floor(random(windowHeight/3,windowHeight*2/3))
    x2  =  x - tam
    y2  =  y + tam*2

    x3  =  x + tam
    y3  =  y + tam*2

   
    ex = Math.floor(random(tam2+10,windowHeight-tam2-10))
    ey = Math.floor(random(tam2+10,windowHeight-tam2-10))

   
    

    
  
    

    
    
    background(240)
    
    noLoop()

    
}

function draw(){
    // strokeWeight(3)
    // noStroke()
    // fill(color1)
    // ellipse(x,y,tam,tam)
    // fill(240)
    // stroke(0)
    // ellipse(ex,ey,tam2,tam2)
    
    // stroke(0)
    // line(x,y,x,height)
    // line(x2,y2,x2,height)

    // noFill()
    // arc(x,y,tam*2,tam*2,radians(270),radians(90))

    if (fxrand()> 0.5){
    strokeWeight(2)
    noFill()
    arc(x,y,tam*2,tam*2,radians(270),radians(90))
    line(x2,y2,x2,height)
    fill(240)
    stroke(0)
    ellipse(ex,ey,tam2,tam2)
    noStroke()
    fill(color1)
    ellipse(x,y,tam,tam)
   
    
    stroke(0)
    line(x,y,x,height)
    

    


    }else{
    strokeWeight(2)
    noFill()
    arc(x,y,tam*2,tam*2,radians(90),radians(270))
    line(x3,y3,x3,height)
    fill(240)
    stroke(0)
    ellipse(ex,ey,tam2,tam2)
    noStroke()
    fill(color1)
    ellipse(x,y,tam,tam)
    
    
    stroke(0)
    line(x,y,x,height)
    

    
    }
    
    noStroke()
    fill(255)

    rect(0,0,windowHeight,20)
    rect(0,0,20,windowHeight)
    rect(windowHeight-20,0,windowHeight,windowHeight)
    rect(0,windowHeight-20,windowHeight,windowHeight)






    

    
 
}



// tamañoM2 = Math.floor(random(20,140))
// centroxM2 =Math.floor(random(width/3,width*2/3))
// centroYM2 =Math.floor(random(height/3,height*2/3))
// radiansA2 =Math.floor(random(0,180))
// radian2 =radiansA2+180


// noStroke()
// fill(azul)
// arc(centroxM2,centroYM2,tamañoM2,tamañoM2,radians(radiansA2),radians(radian2))


