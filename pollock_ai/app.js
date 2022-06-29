var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}

function random(min, max) {
  return Math.floor((fxrand() * (max - min + 1)) + min);
}

function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

   

   ctx.fillStyle = `black`;
    ctx.fillRect(0, 0, 1000, 1000);
    
// clase punto
class Point {
  constructor( x, y, radio,color){
      this.x = x;
      this.y = y;
      this.radio = radio;
      this.color = color;
     
  }
}
// termina clase punto 
// clase agent constructor ponit

class Agent {
  constructor (x,y,radio,color) {
    this.pos = new Point(x,y,radio,color);
   
  }


draw(ctx) {
    const g = random(-50,50)
    const f = random(-50,50)

    ctx.fillStyle = this.pos.color;
    ctx.beginPath();
    ctx.arc(this.pos.x,this.pos.y,this.pos.radio,0,Math.PI *2 )
    ctx.moveTo(this.pos.x,this.pos.y);
    ctx.lineTo(this.pos.x+g,this.pos.y+f);
    ctx.strokeStyle = this.pos.color;
    ctx.stroke()
    ctx.fill();   
}

}


// clase agent constructor ponit

// clase bezier

class Bezier {
  constructor( xi, yi, ax,ay,bx,by,xf,yf,color){
    this.xi = xi;
    this.yi = yi;
    this.ax = ax;
    this.ay = ay;
    this.bx = bx;
    this.by = by;
    this.xf = xf;
    this.yf = yf;
    this.color = color;
     
  }
}

// termina clase bezier

// clase curva constructor bezier
class Curva{
  constructor (xi, yi, ax,ay,bx,by,xf,yf,color) {
    this.pos = new Bezier(xi, yi, ax,ay,bx,by,xf,yf,color);
   
  }


draw(ctx) {
  ctx.beginPath();
  ctx.moveTo(this.pos.xi, this.pos.yi);
  ctx.bezierCurveTo(this.pos.ax, this.pos.ay, this.pos.bx, this.pos.by, this.pos.xf, this.pos.yf);
  ctx.strokeStyle = this.pos.color;
  ctx.stroke();  
}}

// Temina clase curva constuctor bezier 

// clase puntito
class Puntito {
  constructor( xp, yp, radiop,colorp){
      this.xp = xp;
      this.yp = yp;
      this.radiop = radiop;
      this.colorp = colorp;
     
  }
}
// termina clase puntito 


// clase agent constructor puntito

class Puntini {
  constructor (xp,yp,radiop,colorp) {
    this.pos = new Puntito(xp,yp,radiop,colorp);
   
  }


draw(ctx) {
    ctx.fillStyle = this.pos.colorp;
    ctx.beginPath();
    ctx.arc(this.pos.xp,this.pos.yp,this.pos.radiop,0,Math.PI *2 )
    ctx.fill();   
}

}


// clase agent constructor puntito




const curvas = []
const agents =[]
const puntitos =[]


// bucle para dibujar puntos

const r = random(1000,3500)

for (let i = 0; i < r; i++){
  const x = random(0,1000)
  const y = random(0,1000)
  const radio = random (0.4,10)

  const colors1 = ["#f08080"]
  const colors2 = ["#e8d1c5"]
  const colors3 = ["#ffd97d"] //rosa brisahte
  const colors4 = ["#b8c0ff"]//amarillo
  const colors5 = ["#d6ccc2"]//rojo
  const colors6 = ["#d3ab9e"]//rosa
  function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

  const colores = [ colors1,colors2,colors3,colors4,colors5,colors6]
  const color = randomFromList(colores)

  agents.push(new Agent(x,y,radio,color));

}
agents.forEach(agent => {
  agent.draw(ctx)
})

// termina bucle puntos

// bucle para dibujar curvas

const t = random(30,100)

// for (let i = 0; i < t; i++){

//     const xi = random(0,500)
//     const yi = random(0,500)
//     const ax = random(0,500)
//     const ay = random(0,500)
//     const bx = random(0,500)
//     const by = random(0,500)
//     const xf = random(500,1000)
//     const yf = random(500,1000)
  

//   const colors1 = ["#f08080"]
//   const colors2 = ["#e8d1c5"]
//   const colors3 = ["#ffd97d"] //rosa brisahte
//   const colors4 = ["#b8c0ff"]//amarillo
//   const colors5 = ["#d6ccc2"]//rojo
//   const colors6 = ["#d3ab9e"]//rosa
//   function randomFromList(items){
//     return items[Math.floor(fxrand()*items.length)];
//     }

//   const colores = [ colors1,colors2,colors3,colors4,colors5,colors6]
//   const color = randomFromList(colores)

//   curvas.push(new Curva(xi, yi, ax,ay,bx,by,xf,yf,color));

// }


for (let i = 0; i < t; i++){

  const xi = random(0,1000)
  const yi = random(0,1000)
  const ax = random(xi-300,xi+300)
  const ay = random(yi-300,yi+300)
  const xf = random(0,1000)
  const yf = random(0,1000)
  const bx = random(xf-300,xf+300)
  const by = random(yf-300,yf+300)


const colors1 = ["#f08080"]
const colors2 = ["#e8d1c5"]
const colors3 = ["#ffd97d"] //rosa brisahte
const colors4 = ["#b8c0ff"]//amarillo
const colors5 = ["#d6ccc2"]//rojo
const colors6 = ["#d3ab9e"]//rosa
function randomFromList(items){
  return items[Math.floor(fxrand()*items.length)];
  }

const colores = [ colors1,colors2,colors3,colors4,colors5,colors6]
const color = randomFromList(colores)

curvas.push(new Curva(xi, yi, ax,ay,bx,by,xf,yf,color));

}
curvas.forEach(curva => {
  curva.draw(ctx)
})

// termina bucle curva


// bucle para dibujar puntito

const o = random(10000,90000)
const l = random(0,500)
const k = random(700,900)

for (let i = 0; i < o; i++){
  const xp = random(20,980)
  const yp = random(20,980)
  const radiop = random (0.1,5)

  const colors7 = ["rgb(15, 20, 20,0.2)"]
  const colors8 = ["rgb(15, 20, 20,0.2)"]
  const colors9 = ["rgb(15, 20, 20,0.2)"] //rosa brisahte
  const colors10 = ["rgb(15, 20, 20,0.2)"]//amarillo
  const colors11 = ["rgb(15, 20, 20,0.2)"]//rojo
  const colors12 = ["rgb(15, 20, 20,0.2)"]//rosa
  function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

  const coloresp = [ colors7,colors8,colors9,colors10,colors11,colors12]
  const colorp = randomFromList(coloresp)

  puntitos.push(new Puntini(xp,yp,radiop,colorp));

}
puntitos.forEach(puntito => {
  puntito.draw(ctx)
})

// termina bucle puntito


ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1000, 20);
ctx.fillRect(0, 0, 20, 1000);
ctx.fillRect(980, 0,20, 1000);
ctx.fillRect(0, 980, 1000,20);






