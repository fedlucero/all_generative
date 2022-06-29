// const colores = [ colors1,colors2,colors3,colors4,colors5,colors6,colors7,colors8,colors9,colors10]
// const color1 = randomFromList(colores)

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

    diez=windowHeight*0.01
    tam  =  Math.floor(random(windowHeight*0.05,windowHeight*0.3))
    x  =  Math.floor(random(tam*2+diez*2.5,windowHeight-tam*2-diez*2.5))
    y  =  Math.floor(random(tam*2+diez*2.5,windowHeight-tam*2-diez*2.5))
    borde = 20
    
    y2  =  Math.floor(random(diez*4.5,windowHeight-borde*2-tam))

   
    a3 =  Math.floor(random(diez*2,diez*4))

    y3  =  Math.floor(random(y+tam+diez,windowHeight-borde-a3))
    y4  =  Math.floor(random(borde+diez,y-25))
    y5 =  Math.floor(random(borde+diez,y-25))

    a1 =  Math.floor(random(diez*1.5,diez*2))

    a2 =  Math.floor(random(1,diez*2.5))
    a4 =  Math.floor(random(diez,diez*2))

    tam2  =  tam *1.5

   

    

    background(240)
    
    noLoop()
    fxpreview()

    
}

function draw(){


    const uno = fxrand() < 0.28
    const dos = fxrand() < 0.53
    const tres = fxrand() < 0.8
    

    if(uno){
    stroke(0)
    strokeWeight(2)
    line(borde,borde,windowHeight-borde,borde)
    line(borde,borde,borde,windowHeight-borde)
    line(windowHeight-borde,borde,windowHeight-borde,windowHeight-borde)
    line(borde,windowHeight-borde,windowHeight-borde,windowHeight-borde)

    
    stroke(1)
    fill(0)
    
    rect(borde,y+tam,x+tam-borde,borde)
    rect(x+tam,borde,borde,windowHeight-borde*2)
    

    
    line(x,borde,x,windowHeight-borde)
    
    
    line(x+tam,y2,windowHeight-borde,y2)
    line(x+tam,y2+tam/2,windowHeight-borde,y2+tam/2)

    rect(borde,y3,x-borde,a3)

    noStroke()
    fill(0)
    rect(x,y,tam,tam+a1)
    }else if(dos){

        stroke(0)
    strokeWeight(2)
    line(borde,borde,windowHeight-borde,borde)
    line(borde,borde,borde,windowHeight-borde)
    line(windowHeight-borde,borde,windowHeight-borde,windowHeight-borde)
    line(borde,windowHeight-borde,windowHeight-borde,windowHeight-borde)

    noStroke()
    fill(0)
    rect(x,y,tam,tam)
    stroke(1)
    rect(borde,y,x+tam-borde,a1)
    rect(x+tam,borde,a2,windowHeight-borde*2)

    
    line(x,borde,x,windowHeight-borde)
    
    
    line(x+tam,y2,windowHeight-borde,y2)
    line(x+tam,y2+tam/2,windowHeight-borde,y2+tam/2)

    rect(borde,y5,x-borde,a3)
        



    }  else if(tres){ 

    stroke(0)
    strokeWeight(2)
    line(borde,borde,windowHeight-borde,borde)
    line(borde,borde,borde,windowHeight-borde)
    line(windowHeight-borde,borde,windowHeight-borde,windowHeight-borde)
    line(borde,windowHeight-borde,windowHeight-borde,windowHeight-borde)

    noStroke()
    fill(0)
    rect(x,y,tam,tam)
    stroke(1)
    rect(borde,y,x+tam-borde,a1)
    rect(x+tam,borde,a2,windowHeight-borde*2)

    
    line(x,borde,x,windowHeight-borde)
    
    
    line(x+tam,y2,windowHeight-borde,y2)
    rect(x,y4,tam,a4)

    rect(borde,y3,x-borde,a3)




}else{

stroke(0)
strokeWeight(2)
line(borde,borde,windowHeight-borde,borde)
line(borde,borde,borde,windowHeight-borde)
line(windowHeight-borde,borde,windowHeight-borde,windowHeight-borde)
line(borde,windowHeight-borde,windowHeight-borde,windowHeight-borde)


stroke(1)
fill(0)

rect(borde,y+tam2,x+tam-borde,borde)
rect(x+tam,borde,borde,windowHeight-borde*2)



line(x,borde,x,windowHeight-borde)


line(x+tam,y2,windowHeight-borde,y2)
line(x+tam,y2+tam/2,windowHeight-borde,y2+tam/2)

rect(borde,y3,x-borde,a3)

noStroke()
fill(0)
rect(x,y,tam,tam2)

}



}



