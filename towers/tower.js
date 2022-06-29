// Esto se ejecuta 1 sola vez
let posX, posY, size
const colors1 = ["#212529"]//grises
const colors2 = ["#495057"]

const colors4 = ["#000000"]



const grises =[colors1,colors2,colors4]

const gris = randomFromList(grises)



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
    // tam  =  Math.floor(random(80,200))
    // tam2 =  Math.floor(random(50,98))
    // tam3 =  Math.floor(random(20,78))
    // tam4 =  Math.floor(random(30,60))
    // tam5 =  Math.floor(random(60,width/3))
    // tam6 =  Math.floor(random(150,300))
    // tam7 =  Math.floor(random(10,40))
    // tam8 =  Math.floor(random(10,40))
    // tam9 =  Math.floor(random(200,400))

    dotX1 =  Math.floor(random(60,width/3))
    dotY1 =  Math.floor(random(60,width/3))

    w1 = width/5 //1/4 width
    w2 = width/2 //2/4 width
    w3 = width*3/5 //3/4 width
    w4 = width*4/5 //3/4 width

    h1 = 1/5*height //1/5 height
    h2 = 2/5*height //2/5 height
    h3 = 3/5*height//3/5 height
    h4 = 4/5*height //4/5 height

    dx1 = Math.floor(random(w1+100,w1+200))
    dy1 = Math.floor(random(h1+10,h1+20))
    tamx1 = Math.floor(random(20,40))
    tamy1 = height-h1-dy1

    dx2 = Math.floor(random(w1+50,w1+85))
    dy2 = Math.floor(random(h1+40,h1+80))
    tamx2 = Math.floor(random(40,80))
    tamy2 = height-h1-dy2

    dx3 = Math.floor(random(w1+60,w1+100))
    dy3 = Math.floor(random(h2-15,h2-20))
    tamx3 = Math.floor(random(100,150))
    tamy3 = height-h1-dy3

    dx4 = Math.floor(random(w1+30,w1+50))
    dy4 = Math.floor(random(h1+200,h1+300))
    tamx4 = Math.floor(random(100,150))
    tamy4 = height-h1-dy4

    dx5 = Math.floor(random(w1+15,w1+25))
    dy5 = Math.floor(random(h3-10,h3+30))
    tamx5 = Math.floor(random(150,250))
    tamy5 = height-h1-dy5

    dx6 = Math.floor(random(w3-100,w3-200))
    dy6 = Math.floor(random(h1+10,h1+20))
    tamx6 = Math.floor(random(20,40))
    tamy6 = height-h1-dy6

    dx7 = Math.floor(random(w3-50,w3-85))
    dy7 = Math.floor(random(h1+40,h1+80))
    tamx7 = Math.floor(random(40,80))
    tamy7 = height-h1-dy7

    dx8 = Math.floor(random(w3-60,w3-100))
    dy8 = Math.floor(random(h2-15,h2-20))
    tamx8 = Math.floor(random(100,150))
    tamy8 = height-h1-dy8

    dx9 = Math.floor(random(w3-30,w3-50))
    dy9 = Math.floor(random(h1+200,h1+300))
    tamx9 = Math.floor(random(100,150))
    tamy9 = height-h1-dy9

    dx10= Math.floor(random(w3-15,w3-25))
    dy10 = Math.floor(random(h3-10,h3+30))
    tamx10 = Math.floor(random(150,150))
    tamy10 = height-h1-dy10

    dx11 = Math.floor(random(w3-30,w3-50))
    dy11 = Math.floor(random(h1+200,h1+300))
    tamx11 = Math.floor(random(100,150))
    tamy11 = height-h1-dy11

    dx12= Math.floor(random(w3-15,w3-25))
    dy12 = Math.floor(random(h3-12,h3+30))
    tamx12 = Math.floor(random(130,150))
    tamy12 = height-h1-dy12

    dx13= Math.floor(random(35,55))
    dx13bis = w2-dx13
    dy13 = Math.floor(random(h3-13,h3+30))
    tamx13 = Math.floor(random(200,250))
    tamy13 = height-h1-dy13

    dx14= Math.floor(random(35,55))
    dx14bis = w2-dx14
    dy14 = Math.floor(random(h2-14,h2+30))
    tamx14 = Math.floor(random(200,250))
    tamy14 = height-h1-dy14

    r = random(128, 255);
    g = random(0, 192);
    b = random(0, 50);
    a = random(230, 255);

    r1 = random(128, 255);
    g1 = random(0, 192);
    b1 = random(0, 50);
    a1 = random(230, 255)


    r2 = random(128, 255);
    g2 = random(0, 192);
    b2 = random(0, 50);
    a2 = random(230, 255)


    r3 = random(128, 255);
    g3 = random(0, 192);
    b3 = random(0, 50);
    a3 = random(230, 255)

    r4 = random(128, 255);
    g4 = random(0, 192);
    b4 = random(0, 50);
    a4 = random(230, 255)

    r5 = random(128, 255);
    g5 = random(0, 192);
    b5 = random(0, 50);
    a5 = random(230, 255)

    r6 = random(128, 255);
    g6 = random(0, 192);
    b6 = random(0, 50);
    a6 = random(230, 255)

    r7 = random(128, 255);
    g7 = random(0, 192);
    b7 = random(0, 50);
    a7 = random(230, 255)

    r8 = random(128, 255);
    g8 = random(0, 192);
    b8 = random(0, 50);
    a8 = random(230, 255)
    


    

    

    
    randomSeed( fxrand() * 9999 )
    background(220)
    
    noLoop()
}

function draw(){

    
    
    // stroke(`red`)
    // line(width/2,0,width/2,height)
    // line(0,1/5*height,width,1/5*height)
    // line(0,2/5*height,width,2/5*height)
    // line(0,3/5*height,width,3/5*height)
    // line(width/5,0,width/5,height)
    // line(width*4/5,0,width*4/5,height)
    
   

    stroke(0)
    line(w1,h4,w4,h4)
    stroke(100)

    fill(r, g, b, a)
    rect(dx1,dy1,tamx1,tamy1)

    fill(r1, g1, b1,a1)
    rect(dx2,dy2,tamx2,tamy2)

    fill(gris)
    rect(dx6,dy6,tamx6,tamy6)

    fill(r2, g2, b2,a2)
    rect(dx14bis-20,dy14,dx14*2,tamy14)



    fill(r3, g3, b3,a3)
    rect(dx3,dy3,tamx3,tamy3)

    fill(r4, g4, b4,a4)
    rect(dx4,dy4,tamx4,tamy4)
    

    fill(r5, g5, b5,a5)
    rect(dx5,dy5,tamx5,tamy5)

    
   
    fill(gris)
    rect(dx7,dy7,tamx7,tamy7)

    fill(r6, g6, b6,a6)
    rect(dx8,dy8,tamx8,tamy8)

    fill(gris)
    rect(dx9,dy9,tamx9,tamy9)

    fill(r7, g7, b7,a7)
    rect(dx10,dy10,tamx10,tamy10)

    fill(r8, g8, b8,a8)
    rect(dx11,dy11,tamx11,tamy11)

    fill(r, g, b,a)
    rect(dx12,dy12,tamx12,tamy12)

    fill(gris)
    rect(dx13bis,dy13,dx13*2,tamy13)

    stroke(0)
    strokeWeight(2)
    line(w1,h4,w4,h4)

    

        





    

    
 
}