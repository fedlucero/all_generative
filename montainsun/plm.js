// Esto se ejecuta 1 sola vez
const colores1 = ["#89C2D9","#468FAF","#2A6F97","#01497C","#012A4A","#9ceaef"]//azul

const colores2 = ["#718355","#87986a","#97a97c","#b5c99a","#cfe1b9","#e9f5db"]//verdes

const colores3 = ["#76520e","#926c15","#a47e1b","#b69121","#dbb42c","#edc531"]//maiz

const colores4 = ["#212529","#343a40","#495057","#6c757d","#adb5bd","#dee2e6"]//grices

const colores5 = ["#641220","#6e1423","#85182a","#a11d33","#bd1f36","#c71f37"]//rojos

const colores6 = ["#523726","#644632","#76543D","#7E5C43","#906A4E","#A2795A"]//marrones




function random(min, max) {
    return Math.floor((fxrand() * (max - min + 1)) + min);
}

function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

const nums = [colores1,colores2,colores3,colores4,colores5,colores6]
const num = randomFromList(nums)


const colors1 = ["#d90202"]
const colors2 = ["#c20303"]
const colors3 = ["#ab0404"] 
const colors4 = ["#930505"]
const colors5 = ["#7c0606"]



const colores = [ colors1,colors2,colors3,colors4,colors5]
const color = randomFromList(colores)


const bcolors1 = ["#e9ecef"]
const bcolors2 = ["#dee2e6"]
const bcolors3 = ["#adb5bd"] 
const bcolors4 = ["#6c7575"]
const bcolors5 = ["#f8f9fa"]



const bcolores = [ bcolors1,bcolors2,bcolors3,bcolors4,bcolors5]
const bcolor = randomFromList(bcolores)



const colors1v = ["#ffe169"]
const colors2v = ["#fad643"]
const colors3v = ["#dbb42c"] 
const colors4v = ["#ffe97f"]




const coloresv = [ colors1v,colors2v,colors3v,colors4v]
const colorv = randomFromList(coloresv)


const bcolors1g = ["#212529"]
const bcolors2g = ["#003554"]
const bcolors3g = ["#111d13"] 
const bcolors4g = ["#001523"]



const bcoloresg = [ bcolors1g,bcolors2g,bcolors3g,bcolors4g]
const bcolorg = randomFromList(bcoloresg)



const colors1g = ["#eeeeee"]
const colors2g = ["#dddddd"]
const colors3g = ["#cccccc"] 
const colors4g = ["aaaaaa"]




const coloresg = [ colors1g,colors2g,colors3g,colors4g]
const colorg = randomFromList(coloresg)










function setup(){
    createCanvas(windowHeight, windowHeight)
    
    function random(min, max) {
        return Math.floor((fxrand() * (max - min + 1)) + min);
    }
    tam  =  Math.floor(random(100,400))
    tam2 =  Math.floor(random(20,80))
    tam3 =  Math.floor(random(20,35))

    tam4 =  Math.floor(random(20,30))
    tam5 =  Math.floor(random(20,25))
    tam6 =  Math.floor(random(20,25))
    tam7 =  Math.floor(random(10,25))

    
    dis2 =  Math.floor(random(120,width-100))
    dis3 =  Math.floor(random(120,width-100))
    dis4 =  Math.floor(random(120,width-100))
    dis5 =  Math.floor(random(120,width-100))
    dis6 =  Math.floor(random(120,width-100))
  
    x =  Math.floor(random(20,width-20))
    y =  Math.floor(random(10,height-80))
    
    randomSeed( fxrand() * 9999 )
    
    
    noLoop()
    fxpreview()
}

function draw(){

//     background(bcolor);


//     noStroke()
//     fill(color)
//     ellipse(x,y,tam,tam)
  
    
//     noStroke()
//     fill(colores1[0]);
//     rect(0,height-height/3,width,height/3);
//     triangle(dis2,height-height/3-tam3,dis2-30,height-height/4,dis2+30,height-height/4)

    

//     fill(colores1[1]);
//     rect(0,height-((8/27)*height),width,height-((8/27)*height));
//     triangle(dis3,height-height/3-tam4,dis3-40,height-height/4,dis3+40,height-height/4)


//     fill(colores1[2]);
//     rect(0,height-((7/27)*height),width,height-((7/27)*height));
//     triangle(dis4,height-height/3-tam5,dis4-40,height-height/4,dis4+40,height-height/4)

//     fill(colores1[3]);
//     rect(0,height-(((5.5)/27)*height),width,height-(((5.5)/27)*height));
//     triangle(dis5,height-height/3-tam6,dis5-70,height-(((5.5)/27)*height-10),dis5+70,height-(((5.5)/27)*height-10))
    

//     fill(colores1[4]);
//     rect(0,height-(((3.5)/27)*height),width,height-(((3.5)/27)*height));
//     triangle(dis6,height-height/3-tam7,dis6-80,height-(((3.5)/27)*height-10),dis6+80,height-(((3.5)/27)*height-10))

const uno = fxrand() < 0.13
const dos = fxrand() < 0.26
const tres = fxrand() < 0.39
const cuatro = fxrand() < 0.52
const cinco = fxrand() > 0.65



    if(uno){

    background(bcolor);


    noStroke()
    fill(color)
    ellipse(x,y,tam,tam)
  
    
    noStroke()
    fill(colores1[0]);
    rect(0,height-height/3,width,height/3);
    triangle(dis2,height-height/3-tam3,dis2-30,height-height/4,dis2+30,height-height/4)

    

    fill(colores1[1]);
    rect(0,height-((8/27)*height),width,height-((8/27)*height));
    triangle(dis3,height-height/3-tam4,dis3-40,height-height/4,dis3+40,height-height/4)


    fill(colores1[2]);
    rect(0,height-((7/27)*height),width,height-((7/27)*height));
    triangle(dis4,height-height/3-tam5,dis4-40,height-height/4,dis4+40,height-height/4)

    fill(colores1[3]);
    rect(0,height-(((5.5)/27)*height),width,height-(((5.5)/27)*height));
    triangle(dis5,height-height/3-tam6,dis5-70,height-(((5.5)/27)*height-10),dis5+70,height-(((5.5)/27)*height-10))
    

    fill(colores1[4]);
    rect(0,height-(((3.5)/27)*height),width,height-(((3.5)/27)*height));
    triangle(dis6,height-height/3-tam7,dis6-80,height-(((3.5)/27)*height-10),dis6+80,height-(((3.5)/27)*height-10))
        
        
    
        
    
       
    }else if(dos){

    background(bcolor);


    noStroke()
    fill(colorv)
    ellipse(x,y,tam,tam)
  
    
    noStroke()
    fill(colores2[0]);
    rect(0,height-height/3,width,height/3);
    triangle(dis2,height-height/3-tam3,dis2-30,height-height/4,dis2+30,height-height/4)

    

    fill(colores2[1]);
    rect(0,height-((8/27)*height),width,height-((8/27)*height));
    triangle(dis3,height-height/3-tam4,dis3-40,height-height/4,dis3+40,height-height/4)


    fill(colores2[2]);
    rect(0,height-((7/27)*height),width,height-((7/27)*height));
    triangle(dis4,height-height/3-tam5,dis4-40,height-height/4,dis4+40,height-height/4)

    fill(colores2[3]);
    rect(0,height-(((5.5)/27)*height),width,height-(((5.5)/27)*height));
    triangle(dis5,height-height/3-tam6,dis5-70,height-(((5.5)/27)*height-10),dis5+70,height-(((5.5)/27)*height-10))
    

    fill(colores2[4]);
    rect(0,height-(((3.5)/27)*height),width,height-(((3.5)/27)*height));
    triangle(dis6,height-height/3-tam7,dis6-80,height-(((3.5)/27)*height-10),dis6+80,height-(((3.5)/27)*height-10))
        
       
    }else if(tres){

        
    background(bcolor);


    noStroke()
    fill(color)
    ellipse(x,y,tam,tam)
  
    
    noStroke()
    fill(colores3[0]);
    rect(0,height-height/3,width,height/3);
    triangle(dis2,height-height/3-tam3,dis2-30,height-height/4,dis2+30,height-height/4)

    

    fill(colores3[1]);
    rect(0,height-((8/27)*height),width,height-((8/27)*height));
    triangle(dis3,height-height/3-tam4,dis3-40,height-height/4,dis3+40,height-height/4)


    fill(colores3[2]);
    rect(0,height-((7/27)*height),width,height-((7/27)*height));
    triangle(dis4,height-height/3-tam5,dis4-40,height-height/4,dis4+40,height-height/4)

    fill(colores3[3]);
    rect(0,height-(((5.5)/27)*height),width,height-(((5.5)/27)*height));
    triangle(dis5,height-height/3-tam6,dis5-70,height-(((5.5)/27)*height-10),dis5+70,height-(((5.5)/27)*height-10))
    

    fill(colores3[4]);
    rect(0,height-(((3.5)/27)*height),width,height-(((3.5)/27)*height));
    triangle(dis6,height-height/3-tam7,dis6-80,height-(((3.5)/27)*height-10),dis6+80,height-(((3.5)/27)*height-10))
        
        
    
        
    }else if(cuatro){

        background(bcolorg);


    noStroke()
    fill(colorg)
    ellipse(x,y,tam,tam)
  
    
    noStroke()
    fill(colores4[0]);
    rect(0,height-height/3,width,height/3);
    triangle(dis2,height-height/3-tam3,dis2-30,height-height/4,dis2+30,height-height/4)

    

    fill(colores4[1]);
    rect(0,height-((8/27)*height),width,height-((8/27)*height));
    triangle(dis3,height-height/3-tam4,dis3-40,height-height/4,dis3+40,height-height/4)


    fill(colores4[2]);
    rect(0,height-((7/27)*height),width,height-((7/27)*height));
    triangle(dis4,height-height/3-tam5,dis4-40,height-height/4,dis4+40,height-height/4)

    fill(colores4[3]);
    rect(0,height-(((5.5)/27)*height),width,height-(((5.5)/27)*height));
    triangle(dis5,height-height/3-tam6,dis5-70,height-(((5.5)/27)*height-10),dis5+70,height-(((5.5)/27)*height-10))
    

    fill(colores4[4]);
    rect(0,height-(((3.5)/27)*height),width,height-(((3.5)/27)*height));
    triangle(dis6,height-height/3-tam7,dis6-80,height-(((3.5)/27)*height-10),dis6+80,height-(((3.5)/27)*height-10))
        
    }else if(cinco){

        background(bcolor);


    noStroke()
    fill(colorg)
    ellipse(x,y,tam,tam)
  
    
    noStroke()
    fill(colores5[0]);
    rect(0,height-height/3,width,height/3);
    triangle(dis2,height-height/3-tam3,dis2-30,height-height/4,dis2+30,height-height/4)

    

    fill(colores5[1]);
    rect(0,height-((8/27)*height),width,height-((8/27)*height));
    triangle(dis3,height-height/3-tam4,dis3-40,height-height/4,dis3+40,height-height/4)


    fill(colores5[2]);
    rect(0,height-((7/27)*height),width,height-((7/27)*height));
    triangle(dis4,height-height/3-tam5,dis4-40,height-height/4,dis4+40,height-height/4)

    fill(colores5[3]);
    rect(0,height-(((5.5)/27)*height),width,height-(((5.5)/27)*height));
    triangle(dis5,height-height/3-tam6,dis5-70,height-(((5.5)/27)*height-10),dis5+70,height-(((5.5)/27)*height-10))
    

    fill(colores5[4]);
    rect(0,height-(((3.5)/27)*height),width,height-(((3.5)/27)*height));
    triangle(dis6,height-height/3-tam7,dis6-80,height-(((3.5)/27)*height-10),dis6+80,height-(((3.5)/27)*height-10))
        
    }else{
        
    background(bcolor);


    noStroke()
    fill(colorg)
    ellipse(x,y,tam,tam)
  
    
    noStroke()
    fill(colores6[0]);
    rect(0,height-height/3,width,height/3);
    triangle(dis2,height-height/3-tam3,dis2-30,height-height/4,dis2+30,height-height/4)

    

    fill(colores6[1]);
    rect(0,height-((8/27)*height),width,height-((8/27)*height));
    triangle(dis3,height-height/3-tam4,dis3-40,height-height/4,dis3+40,height-height/4)


    fill(colores6[2]);
    rect(0,height-((7/27)*height),width,height-((7/27)*height));
    triangle(dis4,height-height/3-tam5,dis4-40,height-height/4,dis4+40,height-height/4)

    fill(colores6[3]);
    rect(0,height-(((5.5)/27)*height),width,height-(((5.5)/27)*height));
    triangle(dis5,height-height/3-tam6,dis5-70,height-(((5.5)/27)*height-10),dis5+70,height-(((5.5)/27)*height-10))
    

    fill(colores6[4]);
    rect(0,height-(((3.5)/27)*height),width,height-(((3.5)/27)*height));
    triangle(dis6,height-height/3-tam7,dis6-80,height-(((3.5)/27)*height-10),dis6+80,height-(((3.5)/27)*height-10))
    }



    
}

    
 
