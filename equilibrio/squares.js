// Esto se ejecuta 1 sola vez
let posX, posY, size
const colors1 = ["#F5CB5C"]
const colors2 = ["#242423"]//
const colors3 = ["#fcc5d4"] 
const colors4 = ["#333533"] //
const colors5 = ["#637081"]
const colors6 = ["#F55536"]
const colors7 = ["#7180AC"]
const colors8 = ["#E8EDDF"]
const colors9 = ["#3D5A80"]
const colors10 = ["#98C1D9"]
const colors11 = ["#293241"]
const colors12 = ["#EE6C4D"]
const colors13 = ["#1D3557"]
const colors14 = ["457B9D"]
const colors15 = ["#A8DADC"]
const colors16 = ["#E63946"]
const colors17 = ["#edd55c"]



const colores = [ colors1,colors2,colors3,colors4,colors5,colors6,colors7,colors8,colors9,colors10,colors11,colors12,colors13,colors14,colors15,colors16,colors17]
const color1 = randomFromList(colores)

const color2= randomFromList(colores)
const color3= randomFromList(colores)

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
    createCanvas(windowWidth, windowHeight)
    
    function random(min, max) {
        return Math.floor((fxrand() * (max - min + 1)) + min);
    }
    tam  =  Math.floor(random(80,200))
    cX = width/2+tam
    cY = Math.floor(random(50,100))

    tam2 =  Math.floor(random(50,98))

    tam3 =  Math.floor(random(20,78))
    h = height-tam3

    tam4 =  Math.floor(random(30,60))
    fhori = width-tam4//fin linea horizontal w2
    mc = width/3-tam4 
    mh = h-tam4 // centro media esfera heigth y linea horizontal

    cen = Math.floor(random((width/2),(fhori-30)))

    tam5 =  Math.floor(random(60,width/3))


    tam6 =  Math.floor(random(150,300))

    tam7 =  Math.floor(random(10,40))
    cr = Math.floor(random(20,100))

    
    tam8 =  Math.floor(random(10,40))
    tam9 =  Math.floor(random(200,400))

    radiansA2 =Math.floor(random(0,180))
    radian2 =radiansA2+180

    
    randomSeed( fxrand() * 9999 )
    background(220)
    
    noLoop()
}

function draw(){


    // background(220);

    line(width/2,0,width/2,height)

    line(cX,cY,cX,h)

    noStroke()
    fill(color3)
    arc(cen,mh,100,100,radians(180),radians(0))
    stroke(0)
    line(mc,mh,fhori,mh)


    



     noStroke()
        fill(color2)
        rect(width/2+tam7,cr,tam8,tam9)
        fill(color1)
        ellipse(cX,cY,tam2,tam2)

        ellipse(tam5,tam5,tam6,tam6)  

        





    

    
 
}