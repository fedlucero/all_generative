// Esto se ejecuta 1 sola vez
let posX, posY, size,n
const colors1 = ["#f09f36"]
const colors2 = ["#5a9bbb"]
const colors3 = ["#3E5641"] 
const colors4 = ["#6D597A"] 

function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

const colores = [ colors1,colors2,colors3,colors4]
const color = randomFromList(colores)


function random(min, max) {
    return Math.floor((fxrand() * (max - min + 1)) + min);
}
function setup(){
    createCanvas(windowHeight*2/3, windowHeight)
    function random(min, max) {
        return Math.floor((fxrand() * (max - min + 1)) + min);
    }

    tam  =  Math.floor(random(windowHeight*0.065,windowHeight*0.31))
    x  =  Math.floor(random(tam/2+30,windowHeight*2/3-tam/2-30))
    y  =  Math.floor(random(tam/2+30,windowHeight-tam/2-30))
   
    diez = windowHeight * 0.01
    tre = windowHeight* 0.02

    a  =  Math.floor(random(diez,tre))

  
    
    
    background("#f1e3da")
    
    noLoop()
    fxpreview()
}
// Esto corre en bucle hacia el infinito
function draw(){

    
    var i = 0;

    const uno = fxrand() < 0.5
    
    
    
    

        if(uno){
   
        while (i < width) {
                    line(0+a*i,diez,0+a*i,height-diez);
                    i = i + 1;
                    }
        }else{


               while (i < height) {
                line(diez,0+a*i,width+diez,0+a*i);
                i = i + 1;
                }
        }

        noStroke()
        fill("#f1e3da")

        const dos = fxrand() < 0.25
        const tres = fxrand() < 0.50
        const cuatro = fxrand() < 0.75


        if(dos){
            rect(x-(tam/2), y,tam,windowHeight)
        }else if(tres){
            rect(x-(tam/2), y,tam,-windowHeight)
        }else if(cuatro){
            rect(x, y-(tam/2),windowHeight,tam)
        }else{
            rect(x, y-(tam/2),-windowHeight,tam)
        }

        fill(`#161a1d`)

        ellipse(x,y,tam,tam)
        fill("#f1e3da")
        rect(0,0,30,windowHeight)
        rect(0,0,windowHeight,30)
        rect(windowHeight*2/3-30,0,30,windowHeight)
        rect(0,windowHeight-30,windowHeight,30)

       
    }
