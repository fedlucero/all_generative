var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function random(min, max) {
  return Math.floor((fxrand() * (max - min + 1)) + min);
}


const inY = canvas.height/8
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.floor(random(50,200))
const x = Math.floor(random(100,900))
const y = Math.floor(random(100,900))
const p = Math.floor(random(500,510))
const q = Math.floor(random(0.5,1))

const colors1 = ["#606c38"]
const colors2 = ["#283618"]
const colors3 = ["#941b0c"] //rojo
const colors4 = ["#335c67"]//azul
const colors5 = ["#4c516d"]//uva
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

const coloresTronco = [ colors1,colors2,colors3,colors4,colors5,colors6,colors7,colors8,colors9,colors10,colors11]
const colorTronco = randomFromList(coloresTronco)

const coloresHojas = [ colors12,colors13,colors14,colors15,colors16,colors17]
const colorHojas = randomFromList(coloresHojas)

const coloresFondo = [ colors18,colors19,colors20,colors21,colors22,colors23]
const colorFondo = randomFromList(coloresFondo)

const coloresSol = [ colors24,colors25,colors26,colors27,colors28,colors29]
const colorSol = randomFromList(coloresSol)





drawBackground();
drawSun();
drawTree(centerX,p, 80, -Math.PI / 2, 14, 17);
fxpreview();

function drawTree(centerX, inY, length, angle, depth, branchWidth) {
 
  var newLength, newAngle, newDepth, maxBranch = 3,
      endX, endY, maxAngle = 4* Math.PI / 0.4, subBranches;

  ctx.beginPath();
  ctx.moveTo(centerX, inY);
  endX = centerX + length * Math.cos(angle);
  endY = inY + length * Math.sin(angle);
  ctx.lineCap = 'round';
  ctx.lineWidth = branchWidth;
  ctx.lineTo(endX, endY);

  if (depth <= 5) {
   
    ctx.strokeStyle = colorTronco;
  }
  // else if (depth <= 10) {
   
  //   ctx.strokeStyle = '#814417';
  // }
  else {
    ctx.strokeStyle = colorHojas;
  }
  ctx.stroke();
  newDepth = depth - 1;

  if(!newDepth) {
    return;
  }
  subBranches = (fxrand() * (maxBranch - q)) + q;
  branchWidth *= 0.7;

  for (var i = 0; i < subBranches; i++) {
    newAngle = angle + fxrand() * maxAngle - maxAngle * 0.8;
    newLength = length * (0.4 + fxrand() * 0.9);
    
    drawTree(endX, endY, newLength, newAngle, newDepth, branchWidth);
  }

}

function drawBackground() {
  var lg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  lg.addColorStop(0, colorFondo);
  lg.addColorStop(0.5, colorFondo);
  lg.addColorStop(0.5, colorFondo);
  lg.addColorStop(1, colorSol);
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawSun() {
  ctx.beginPath();
  ctx.fillStyle = colorSol;
  ctx.strokeStyle = colorSol;
  ctx.lineWidth = 2;
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.stroke();
}




// ctx.beginPath();
// ctx.fillStyle = '#0077aa';
// ctx.strokeStyle = '#0077aa47';
// ctx.lineWidth = 2;

// context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
// context.fill();
// context.stroke();

