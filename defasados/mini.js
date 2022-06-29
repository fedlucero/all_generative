// Esto se ejecuta 1 sola vez
function numeroAleatorio(min, max) {
    return Math.round(fxrand() * (max - min) + min);
  }


function setup(){
    createCanvas(windowHeight,windowHeight);
    background(250)
    noLoop()
    fxpreview()
}
// Esto corre en bucle hacia el infinito
function draw(){
    let borrado= (Math.floor(numeroAleatorio(100,300)))
    let a =  (Math.floor(numeroAleatorio(20,50)))
    let b =  (Math.floor(numeroAleatorio(3,20)))
    let c = (Math.floor(numeroAleatorio(20,70)))
    let d = (Math.floor(numeroAleatorio(3,20)))
    let e =  (Math.floor(numeroAleatorio(20,70)))
    let f =  (Math.floor(numeroAleatorio(3,20)))
    let g =  (Math.floor(numeroAleatorio(20,70)))
    let h =  (Math.floor(numeroAleatorio(3,20)))
    let i =  (Math.floor(numeroAleatorio(20,70)))
    let j =  (Math.floor(numeroAleatorio(3,20)))
    let k =  (Math.floor(numeroAleatorio(20,70)))
    let l =  (Math.floor(numeroAleatorio(3,20)))
    let m =  (Math.floor(numeroAleatorio(20,70)))
    let n =  (Math.floor(numeroAleatorio(3,20)))
    let o =  (Math.floor(numeroAleatorio(20,70)))
    let p =  (Math.floor(numeroAleatorio(3,20)))
    let q =  (Math.floor(numeroAleatorio(20,70)))
    let r =  (Math.floor(numeroAleatorio(3,20)))
    let s =  (Math.floor(numeroAleatorio(20,70)))
    let t =  (Math.floor(numeroAleatorio(3,20)))
    let u =  (Math.floor(numeroAleatorio(20,70)))
    let v =  (Math.floor(numeroAleatorio(3,20)))
    let w =  (Math.floor(numeroAleatorio(20,70)))
    let x =  (Math.floor(numeroAleatorio(3,20)))
    let y =  (Math.floor(numeroAleatorio(20,70)))
    let z =  (Math.floor(numeroAleatorio(3,20)))
    anchob = (Math.floor(numeroAleatorio(100,200)))

    // fondo
    fill(0)
    rect(a,50,b,windowHeight-100)
    rect(a+c,50,d,windowHeight-100)
    rect(a+c+e,50,f,windowHeight-100)
    rect(a+c+e+g,50,h,windowHeight-100)
    rect(a+c+e+g+i,50,j,windowHeight-100)
    rect(a+c+e+g+i+k,50,l,windowHeight-100)
    rect(a+c+e+g+i+k+m,50,n,windowHeight-100)
    rect(a+c+e+g+i+k+m+o,50,p,windowHeight-100)
    rect(a+c+e+g+i+k+m+o+q,50,r,windowHeight-100)
    rect(a+c+e+g+i+k+m+o+q+s,50,t,windowHeight-100)
   
   

    fill(250)
    noStroke()
    rect(0,borrado,windowWidth,anchob)

    // frente

    fill(0)
    rect(a+15,borrado,b,anchob)
    rect(a+c+15,borrado,d,anchob)
    rect(a+c+e+15,borrado,f,anchob)
    rect(a+c+e+g+15,borrado,h,anchob)
    rect(a+c+e+g+i+15,borrado,j,anchob)
    rect(a+c+e+g+i+k+15,borrado,l,anchob)
    rect(a+c+e+g+i+k+m+15,borrado,n,anchob)
    rect(a+c+e+g+i+k+m+o+15,borrado,p,anchob)
    rect(a+c+e+g+i+k+m+o+q+15,borrado,r,anchob)
    rect(a+c+e+g+i+k+m+o+q+s+15,borrado,t,anchob)
    
    
}