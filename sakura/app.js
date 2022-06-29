var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function random(min, max) {
  return Math.floor((fxrand() * (max - min + 1)) + min);
}


const inY = canvas.height/8
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.floor(random(40,65))
const radius2 = Math.floor(random(20,40))
const x = Math.floor(random(150,650))
const y = Math.floor(random(150,650))
const p = Math.floor(random(900,950))
const q = Math.floor(random(0.5,1))
const z = x + Math.floor(random(-150,100))
const w = y + Math.floor(random(-250,150))


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


const colors12 = ["#bebbbb"]
const colors13 = ["#f2ccc3"]
const colors14 = ["#ffc07f"] //marron
const colors15 = ["#daa588"]//gris
const colors16 = ["#e6af2e"]//casi negro
const colors17 = ["#f1a66a"]//rosa

// const colors12 = ["#b9375e"]
// const colors13 = ["#c05299"]
// const colors14 = ["#d264b6"] //marron
// const colors15 = ["#f9564f"]//gris
// const colors16 = ["#e5a9a9"]//casi negro
// const colors17 = ["#f4bbd3"]//rosa


const colors18 = ["#f1dca7"]
const colors19 = ["#fbf5f1"]
const colors20 = ["#d3c9c4"] //marron
const colors21 = ["#d6d0c7"]//gris
const colors22 = ["#e4ccb4"]//casi negro
const colors23 = ["#ffe5d9"]//rosa



const colors24 = ["#9d0208"]
const colors25 = ["#335c67"]
const colors26 = ["#bf0603"] //rosa brisahte
const colors27 = ["#f6aa1c"]//amarillo
const colors28 = ["#a51c30"]//rojo
const colors29 = ["#d84a05"]//rosa




function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

// const coloresTronco = [ colors1,colors2,colors3,colors4,colors5,colors6,colors7,colors8,colors9,colors10,colors11]
// const colorTronco = randomFromList(coloresTronco)

const coloresSol2 = [ colors12,colors13,colors14,colors15,colors16,colors17]
const colorSol2 = randomFromList(coloresSol2)

const coloresFondo = [ colors18,colors19,colors20,colors21,colors22,colors23]
const colorFondo = randomFromList(coloresFondo)

const coloresSol = [ colors24,colors25,colors26,colors27,colors28,colors29]
const colorSol = randomFromList(coloresSol)





const centroCasa = random(100,700)
const centroAntena = random(50,900)
const centroAntenaMas = centroAntena+25
const centroAntenaMenos = centroAntena-25
drawBackground();
drawSun();
drawSun2();
ctx.beginPath()
ctx.fillStyle = `black`
ctx.fillRect(0,750,1000,250)
ctx.fillRect(centroAntenaMenos+16,630,18,200)
ctx.fillRect(centroAntenaMenos+10,650,30,50)
ctx.fillRect(centroAntenaMenos+20,550,10,200)
ctx.arc(centroCasa,750,150, Math.PI, 0)
ctx.fill()
ctx.fillRect(centroCasa,690,190,120)
ctx.moveTo(centroAntena,700);
ctx.lineTo(centroAntenaMas,750);
ctx.lineTo(centroAntenaMenos,750);
ctx.fill();
fxpreview();



function drawBackground() {
  var lg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  lg.addColorStop(0, colorSol2);
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

function drawSun2() {
  ctx.beginPath();
  ctx.fillStyle = colorSol2;
  ctx.strokeStyle = colorSol2;
  ctx.lineWidth = 2;
  ctx.arc(z, w, radius2, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.stroke();
}


