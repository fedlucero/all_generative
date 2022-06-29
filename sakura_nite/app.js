var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function random(min, max) {
  return Math.floor((fxrand() * (max - min + 1)) + min);
}


const inY = canvas.height/8
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.floor(random(50,200))
const x = Math.floor(random(300,600))
const y = Math.floor(random(300,600))
const p = 980
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


const colors12 = ["#b388eb"]
const colors13 = ["#eac4d5"]
const colors14 = ["#d782ba"] //marron
const colors15 = ["#b66ee8"]//gris
const colors16 = ["#d4b0d3"]//casi negro
const colors17 = ["#e56b6f"]//rosa

const colors18 = ["#1c2541"]
const colors19 = ["#46494c"]
const colors20 = ["#003554"] //marron
const colors21 = ["#111d13"]//gris
const colors22 = ["#1b1b1e"]//casi negro
const colors23 = ["#2f2235"]//rosa



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



const coloresFondo = [ colors18,colors19,colors20,colors21,colors22,colors23]
const colorFondo = randomFromList(coloresFondo)

const coloresSol = [colors12,colors13,colors14,colors15,colors16,colors17, colors24,colors25,colors26,colors27,colors28,colors29]
const colorSol = randomFromList(coloresSol)





drawBackground();
drawSun();
drawTree(centerX,p, 80, -Math.PI / 2, 10, 15);

fxpreview();

function drawTree(centerX, inY, length, angle, depth, branchWidth) {
 
  var newLength, newAngle, newDepth, maxBranch = 3,
      endX, endY, maxAngle = 2 * Math.PI / 6, subBranches;

  ctx.beginPath();
  ctx.moveTo(centerX, inY);
  endX = centerX - length * Math.cos(angle);
  endY = inY + length * Math.sin(angle); // el menos invierte 
  ctx.lineCap = 'round';
  ctx.lineWidth = branchWidth;
  ctx.lineTo(endX, endY);

 
    // ctx.strokeStyle = colorHojas;
    ctx.strokeStyle = colorFondo;

  ctx.stroke();
  newDepth = depth  - 1;

  if(!newDepth) {
    return;
  }
  subBranches = (fxrand() * (maxBranch - q)) + q;
  branchWidth *= 0.7;//lo que se achica 0.5 es la mitad

  for (var i = 0; i < subBranches; i++) {
    newAngle = angle + fxrand() * maxAngle - maxAngle * 0.5;
    newLength = length * (0.7 + fxrand() * 0.3);
    
    drawTree(endX, endY, newLength, newAngle, newDepth, branchWidth);
  }

}

function drawBackground() {
  var lg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  lg.addColorStop(0, colorFondo);
  lg.addColorStop(0.4, colorFondo);
  lg.addColorStop(0.4, colorFondo);
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

