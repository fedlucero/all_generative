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
    createCanvas(windowWidth, windowHeight)
    function random(min, max) {
        return Math.floor((fxrand() * (max - min + 1)) + min);
    }
    tam  =  Math.floor(random(100,400))
    tam2  =  Math.floor(random(20,200))
    tam3  =  Math.floor(random(10,30))

    
    background("#f1e3da")
   
    noLoop()
}
// Esto corre en bucle hacia el infinito
function draw(){


    if(fxrand() < 0.5){
        const cuatro2 = fxrand() > 0.198 
        const tres2 = fxrand() > 0.396 
        const dos2 = fxrand() > 0.594
        const uno2 = fxrand() > 0.792 
         
        if(uno2){
            
            noStroke()
            fill(color)
            ellipse(width/2,height/2, tam,tam)
           
        }else if(dos2){
            
            noStroke()
            fill(color)
            rect(tam2,tam2, width/2,height-tam2*2)

        }else if(tres2){
           
            noStroke()
            fill(color)
            rect( width/2-tam2,tam2, width/2,height-tam2*2)

        }else if(cuatro2){
            noStroke()
            fill(color)
            rect(tam2,tam2, width-tam2*2,height/2)
            
        }else{
            noStroke()
            fill(color)
            rect(tam2,height/2-tam2, width-tam2*2,height/2)
        }

        
        const uno = fxrand() < 0.123
        const dos = fxrand() < 0.246
        const tres = fxrand() < 0.369
        const cuatro = fxrand() < 0.492
        const cinco = fxrand() < 0.615
        const seis = fxrand() < 0.738
        const siete = fxrand() < 0.861
        
        
        var i = 0;
        
       
            if(uno){
                
                while (i < height) {
                stroke(0)
                line(tam3,height/2+10*i,width+tam3,height/2+10*i);
                i = i + 1;
            
                
            }
               
            }else if(dos){
                
                while (i < height) {
                stroke(0)
                line(10,height/2+10*i,width+10,height/2+10*i);
                i = i + 1;
                }
    
            }else if(tres){
                while (i < width) {
                    stroke(0)
                    line(width/2+10*i,10,width/2+10*i,height-10);
                    i = i + 1;
                
                    
                }
                
            }else if(cuatro){
                while (i < width) {
                    stroke(0)
                    line(width/2-10*i,10,width/2-10*i,height-10);
                    i = i + 1;
                    
                    
                    }
                
            }else if(cinco){
                while (i < width) {
                    stroke(0)
                    line(0+10*i,10,0+10*i,height-10);
                    i = i + 1;
                    
                    
                    }
                
            }else if(seis){
                while (i < 50) {
                    stroke(0)
                    line(0+10*i,10,0+10*i,height-10);
                    i = i + 1;
                    
                    
                    }
                
            }else if(siete){
                while (i < 50) {
                    stroke(0)
                line(width/2+10*i,10,width/2+10*i,height-10);
                i = i + 1;
    
    
                }
    
                
            }else{
                while (i < height) {
                    stroke(0)
                    line(10,0+10*i,width+10,0+10*i);
                    i = i + 1;
                    }
            }
    
    }
    else{

        const uno = fxrand() < 0.123
        const dos = fxrand() < 0.246
        const tres = fxrand() < 0.369
        const cuatro = fxrand() < 0.492
        const cinco = fxrand() < 0.615
        const seis = fxrand() < 0.738
        const siete = fxrand() < 0.861
        
        
        var i = 0;
        
       
            if(uno){
                
                while (i < height) {
            
                line(tam3,height/2+10*i,width+tam3,height/2+10*i);
                i = i + 1;
            
                
            }
               
            }else if(dos){
                
                while (i < height) {
            
                line(10,height/2+10*i,width+10,height/2+10*i);
                i = i + 1;
                }
    
            }else if(tres){
                while (i < width) {
    
                    line(width/2+10*i,10,width/2+10*i,height-10);
                    i = i + 1;
                
                    
                }
                
            }else if(cuatro){
                while (i < width) {
    
                    line(width/2-10*i,10,width/2-10*i,height-10);
                    i = i + 1;
                    
                    
                    }
                
            }else if(cinco){
                while (i < width) {
    
                    line(0+10*i,10,0+10*i,height-10);
                    i = i + 1;
                    
                    
                    }
                
            }else if(seis){
                while (i < 50) {
    
                    line(0+10*i,10,0+10*i,height-10);
                    i = i + 1;
                    
                    
                    }
                
            }else if(siete){
                while (i < 50) {
    
                line(width/2+10*i,10,width/2+10*i,height-10);
                i = i + 1;
    
    
                }
    
                
            }else{
                while (i < height) {
            
                    line(10,0+10*i,width+10,0+10*i);
                    i = i + 1;
                    }
            }
    
            const cuatro2 = fxrand() > 0.198 
            const tres2 = fxrand() > 0.396 
            const dos2 = fxrand() > 0.594
            const uno2 = fxrand() > 0.792 
             
            
            
            
           
            if(uno2){
                
                noStroke()
                fill(color)
                ellipse(width/2,height/2, tam,tam)
               
            }else if(dos2){
                
                noStroke()
                fill(color)
                rect(tam2,tam2, width/2,height-tam2*2)
    
            }else if(tres2){
               
                noStroke()
                fill(color)
                rect( width/2-tam2,tam2, width/2,height-tam2*2)
    
            }else if(cuatro2){
                noStroke()
                fill(color)
                rect(tam2,tam2, width-tam2*2,height/2)
                
            }else{
                noStroke()
                fill(color)
                rect(tam2,height/2-tam2, width-tam2*2,height/2)
            }
    
    
       
    }

   

   
















    
    // const esLineaDerecha = fxrand() > 0.5
    // const sePuedeDibujar = fxrand() > 0.15

    // stroke(255)
    // strokeWeight(2)
    // if(sePuedeDibujar){
    //     if(esLineaDerecha){
    //         line(posX, posY, posX + size, posY + size)
    //     }else{
    //         line(posX + size, posY, posX, posY + size)
    //     }
    // }

}