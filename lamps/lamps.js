

const colores1 = ["#cb997e","#ddbea9","#ffe8d6","#b7b7a4","#a5a58d","#6b505c"]

const colores2 = ["#8e412e","#ba6f4d","#e6cebc","#a2a182","#687259","#f4ece2"]

const colores3 = ["#797d62","#9b9b7a","#d9ae94","#f1dca7","#d08c60","#997b66"]

const colores4 = ["#ffd35b","#ffba42","#f5a201","#a8e8f9","#00537a","#013c58"]

const colores5 = ["#782832","#c9182c","#fbf7ef","#386641","#6a994e","#a7c957"]

const colores6 = ["#eb5e28","#f9a03f","#f3c053","#a1c349","#87a330","#6a8532"]

const colores7 = ["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51","#ec8c74"]

const colores8 = ["#386641","#6a994e","#fdf7d6","#de6560","#de6560","#ca3d3f"]

const colores9 = ["#23362b","#1bb28c","#e86a58","#fed45b","#9bc7c5","#efeeea"]

const colores10 = ["#eb5e28","#e4c1f9","#e4c1f9","#a1c349","#a9def9","#e4c1f9"]

const colores11= ["#ff99c8","#e4c1f9","#e4c1f9","#d0f4de","#87a330","#6a8532"]

const colores12= ["#e03c31","#ff7f41","#f7ea48","#2dc84d","#147bd1","#753bbd"]

const colores13= ["#797d62","#9b9b7a","#f1dca7","#ffcb69","#d08c60","#6a8532"]

const colores14= ["#c9cba3","#ffe1a8","#858935","#723d46","#8e646b","#a58389"]

const colores15= ["#ffb6a3","#f5d1c3","#f0bc68","#aab8bb","#c4d7d1","#5f9595"]

const colores16= ["#27272b","#6a30fe","#9f4cfd","#e16be6","#fb89cc","#dfdcdf"]

const colores17= ["#923514","#83c5be","#edf6f9","#ffddd2","#e29578","#e8aa93"]

const colores18= ["#000000","#707070","#cbcdcd","#f5f5f5","#b10f2e","#c20114"]


function random(min, max) {
    return Math.floor((fxrand() * (max - min + 1)) + min);
}

function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }


const nums = [colores1,colores2,colores3,colores4,colores5,colores6,colores7,colores8,colores9,colores10,colores11,colores12,colores13,colores14,colores15,colores16,colores17,colores18]
const num = randomFromList(nums)









function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    background(180)
   
    noLoop()

    function random(min, max) {
        return Math.floor((fxrand() * (max - min + 1)) + min);
    }

    //media

    tamañoM = Math.floor(random(280,330))
    tamañoMy = tamañoM*2/3
    centroxM =Math.floor(random(width/4,width/2))
    centroYM =Math.floor(random(height/11-10,height/11+10))
    radiansA =Math.floor(random(0,180))
    radian =radiansA+180

    //linea
    alto = Math.floor(random(height*6/11,height*7/11))

    // esfera colgante
    tame = Math.floor(random(20,30))


    //media2
    tamañoM2 = Math.floor(random(220,270))
    tamañoMy2 = tamañoM2*2/3
    centroxM2 =Math.floor(random(width/2,width*3/4))
    centroYM2 =Math.floor(random((height*2/11)-10,(height*2/11)+10))
    radiansA2 =Math.floor(random(0,180))
    radian2 =radiansA2+180

     //linea2
     alto2 = Math.floor(random(height*7/11,height*8/11))

     // esfera colgante
     tame2 = Math.floor(random(20,30))




     //media3
    tamañoM3 = Math.floor(random(160,210))
    tamañoMy3 = tamañoM3*2/3
    centroxM3 = Math.floor(random(width/4,width/2))
    centroYM3 =Math.floor(random((height*3/11)-10,(height*3/11)+10))
    radiansA3 =Math.floor(random(0,180))
    radian3 =radiansA3+180

     //linea3
     alto3 = Math.floor(random(height*8/11,height*9/11))

     // esfera colgante
     tame3 = Math.floor(random(20,30))



     //media4
    tamañoM4 = Math.floor(random(100,150))
    tamañoMy4 = tamañoM4*2/3
    centroxM4 =Math.floor(random(width/2,width*3/4))
    centroYM4 =Math.floor(random((height*4/11)-10,(height*4/11)+10))
    radiansA4 =Math.floor(random(0,180))
    radian4 =radiansA4+180

     //linea4
     alto4 = Math.floor(random(height*9/11,height*10/11))

     // esfera colgante
     tame4 = Math.floor(random(20,30))


      //media5
    tamañoM5 = Math.floor(random(70,90))
    tamañoMy5 = tamañoM5*2/3
    centroxM5 =Math.floor(random(width/4,width/2))
    centroYM5 =Math.floor(random((height*5/11)-10,(height*5/11)+10))
    radiansA5 =Math.floor(random(0,180))
    radian5 =radiansA5+180

     //linea5
     alto5 = Math.floor(random(height*10/11-10,height*10/11+10))

     // esfera colgante
     tame5 = Math.floor(random(20,25))




     //media6
    tamañoM6 = Math.floor(random(40,60))
    tamañoMy6 = tamañoM6*2/3
    centroxM6 =Math.floor(random(width/2,width*3/4))
    centroYM6 =Math.floor(random((height*6/11)-10,(height*6/11)+10))
    radiansA6 =Math.floor(random(0,180))
    radian6 =radiansA6+180

     //linea6
     alto6 = Math.floor(random(height-10,height-30))

     // esfera colgante
     tame6 = Math.floor(random(15,20))


    


    

    
    

}
// Esto corre enucle hacia el infinito
function draw(){

    
    stroke(0)
    strokeWeight(2)
    line(centroxM+2,centroYM+2,centroxM,alto)

    noStroke()
    fill(num[0])
    arc(centroxM,centroYM,tamañoM,tamañoMy,radians(0),radians(180))
    fill(0)
    ellipse(centroxM,alto,tame,tame)


    stroke(0)
    strokeWeight(2)
    line(centroxM2+2,centroYM2+2,centroxM2,alto2)

    noStroke()
    fill(num[1])
    arc(centroxM2,centroYM2,tamañoM2,tamañoMy2,radians(0),radians(180))
    fill(0)
    ellipse(centroxM2,alto2,tame2,tame2)


    stroke(0)
    strokeWeight(2)
    line(centroxM3+2,centroYM3+2,centroxM3,alto3)

    noStroke()
    fill(num[2])
    arc(centroxM3,centroYM3,tamañoM3,tamañoMy3,radians(0),radians(180))
    fill(0)
    ellipse(centroxM3,alto3,tame3,tame3)

    stroke(0)
    strokeWeight(2)
    line(centroxM4+2,centroYM4+2,centroxM4,alto4)

    noStroke()
    fill(num[3])
    arc(centroxM4,centroYM4,tamañoM4,tamañoMy4,radians(0),radians(180))
    fill(0)
    ellipse(centroxM4,alto4,tame4,tame4)




    stroke(0)
    strokeWeight(2)
    line(centroxM5+2,centroYM5+2,centroxM5,alto5)

    noStroke()
    fill(num[4])
    arc(centroxM5,centroYM5,tamañoM5,tamañoMy5,radians(0),radians(180))
    fill(0)
    ellipse(centroxM5,alto5,tame5,tame5)




    stroke(0)
    strokeWeight(2)
    line(centroxM6+2,centroYM6+2,centroxM6,alto6)

    noStroke()
    fill(num[5])
    arc(centroxM6,centroYM6,tamañoM6,tamañoMy6,radians(0),radians(180))
    fill(0)
    ellipse(centroxM6,alto6,tame6,tame6)



    
    
    
   
    

    
   
    
    
        
    
       
    
    fxpreview()
    
       
    
        
    
   
        

    

   
}


