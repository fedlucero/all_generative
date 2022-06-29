var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function random(min, max) {
  return Math.floor((fxrand() * (max - min + 1)) + min);
}


const inY = canvas.height/8
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.floor(random(50,200))
const x = Math.floor(random(100,600))
const y = Math.floor(random(100,600))
const p = Math.floor(random(900,950))
const p1 = Math.floor(random(800,950))
const p2 = Math.floor(random(800,950))
const p3 = Math.floor(random(800,950))
const p4 = Math.floor(random(800,950))
const p5 = Math.floor(random(800,950))
const p6 = Math.floor(random(800,950))
const p7 = Math.floor(random(800,950))
const p8 = Math.floor(random(800,950))
const p9 = Math.floor(random(800,950))
const p10 = Math.floor(random(800,950))
const p11 = Math.floor(random(800,950))
const p12 = Math.floor(random(800,950))
const p13 = Math.floor(random(800,950))
const p14 = Math.floor(random(800,950))
const p15 = Math.floor(random(800,950))
const p16 = Math.floor(random(800,950))







const r = Math.floor(random(10, canvas.width-10))
const r1 = Math.floor(random(10, canvas.width-10))
const r2 = Math.floor(random(10, canvas.width-10))
const r3 = Math.floor(random(10, canvas.width-10))
const r4 = Math.floor(random(10, canvas.width-10))
const r5 = Math.floor(random(10, canvas.width-10))
const r6 = Math.floor(random(10, canvas.width-10))
const r7 = Math.floor(random(10, canvas.width-10))
const r8 = Math.floor(random(10, canvas.width-10))
const r9 = Math.floor(random(10, canvas.width-10))
const r10 = Math.floor(random(10, canvas.width-10))
const r11 = Math.floor(random(10, canvas.width-10))
const r12 = Math.floor(random(10, canvas.width-10))
const r13 = Math.floor(random(10, canvas.width-10))
const r14 = Math.floor(random(10, canvas.width-10))
const r15 = Math.floor(random(10, canvas.width-10))
const r16 = Math.floor(random(10, canvas.width-10))


const q = Math.floor(random(1,1.5))

const colors1 = ["#e9ecef"]
const colors2 = ["#ced4da"]
const colors3 = ["#cbc0d3"] //rojo
const colors4 = ["#e7d8c9"]//azul
const colors5 = ["#e1e5f2"]//uva
const colors6 = ["#e2711d"]//verdeoscura
const colors7 = ["#c47179"] //rosa pastel
const colors8 = ["#49773b"] //verde
const colors9 = ["#521945"] //violeta
const colors10 = ["#5f6c76"] //rosa
const colors11= ["#283845"] //azul


const colors12 = ["#36110e"]
const colors13 = ["#2f3739"]
const colors14 = ["#643616"] //marron
const colors15 = ["#42484e"]//gris
const colors16 = ["#021112"]//casi negro
const colors17 = ["#3b1f1b"]//rosa

const colors18 = ["#f1dca7"]
const colors19 = ["#fbf5f1"]
const colors20 = ["#d3c9c4"] //marron
const colors21 = ["#d6d0c7"]//gris
const colors22 = ["#e4ccb4"]//casi negro
const colors23 = ["#ffe5d9"]//rosa



const colors24 = ["#f08080"]
const colors25 = ["#e8d1c5"]
const colors26 = ["#ffd97d"] //rosa brisahte
const colors27 = ["#b8c0ff"]//amarillo
const colors28 = ["#d6ccc2"]//rojo
const colors29 = ["#d3ab9e"]//rosa


function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

// const coloresTronco = [ colors1,colors2,colors3,colors4,colors5]
// const colorTronco = randomFromList(coloresTronco)

const colorTronco = `#333d29`

const coloresHojas = [ colors12,colors13,colors14,colors15,colors16,colors17]
const colorHojas = randomFromList(coloresHojas)

const coloresFondo = [ colors18,colors19,colors20,colors21,colors22,colors23]
const colorFondo = randomFromList(coloresFondo)

const coloresSol = [ colors24,colors25,colors26,colors27,colors28,colors29]
const colorSol = randomFromList(coloresSol)





drawBackground();
drawTree(centerX,1000, 100, -Math.PI / 2, 14,6);

fxpreview();

function drawTree(centerX, inY, length, angle, depth, branchWidth) {
 
  var newLength, newAngle, newDepth, maxBranch = 2,
      endX, endY, maxAngle = 2 * Math.PI / 5, subBranches;

  ctx.beginPath();
  ctx.moveTo(centerX, inY);
  endX = centerX + length * Math.cos(angle);
  endY = inY + length * Math.sin(angle);
  ctx.lineCap = 'round';
  ctx.lineWidth = branchWidth;
  ctx.lineTo(endX, endY);
  if (depth <= 1) {
   
    ctx.strokeStyle = '#7b6b43';
  }
  // else if (depth <= 10) {
   
  //   ctx.strokeStyle = '#814417';
  // }
  else {
    ctx.strokeStyle ='#7b6b43';
  }
 
  ctx.stroke();
  newDepth = depth - 1;

  if(!newDepth) {
    return;
  }
  subBranches = (fxrand() * (maxBranch -q)) +q;
  branchWidth *= 0.8;

  for (var i = 0; i < subBranches; i++) {
    newAngle = angle + fxrand() * maxAngle - maxAngle * 0.5;
    newLength = length * (0.7 + fxrand() * 0.3);
    
    drawTree(endX, endY, newLength, newAngle, newDepth, branchWidth);
  }

}

function drawBackground() {
  var lg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  lg.addColorStop(0, `#fff`);
  lg.addColorStop(0.5, `#e5e5e5`);
  lg.addColorStop(0.5, `#e5e5e5`);
  lg.addColorStop(1, `#eae2b7`);
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// function drawSun() {
//   ctx.beginPath();
//   ctx.fillStyle = colorSol;
//   ctx.strokeStyle = colorSol;
//   ctx.lineWidth = 2;
//   ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
//   ctx.fill();
//   ctx.stroke();
// }


