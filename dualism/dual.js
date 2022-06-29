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
  

   ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 800, 1200);
    
  if(fxrand()>0.5){

      class Rect{
          constructor(x,y,tam1,tam2,color){
              this.x=x;
              this.y=y;
              this.tam1=tam1;
              this.tam2=tam2;
              this.color=color;
      }
      }
      
      
      class Cuadrado{
          constructor (x,y,tam1,tam2,color){
          this.pos = new Rect(x,y,tam1,tam2,color);
          }
      
          draw(ctx){
              ctx.beginPath();
              ctx.rect(this.pos.x, this.pos.y, this.pos.tam1,this.pos.tam2, this.pos.color);
              ctx.strokeStyle = this.pos.color;
              ctx.stroke();
          }
      }
      
      
      const cuadrados = []
      
      const t = random(4000,5000)
      
      
      for (let i = 0; i < t; i++){
      
        const x = random(-100,800)
        const y = random(-100,1200)
        const tam1 = random(10,100)
        const tam2 = random(10,100)
      
      
      const colors1 = ["#dee2e6"]
      const colors2 = ["#ced4da"]
      const colors3 = ["#6c757d"] //rosa brisahte
      const colors4 = ["#495057"]//amarillo
      const colors5 = ["#343a40"]//rojo
      const colors6 = ["#adb5bd"]//rosa
      function randomFromList(items){
        return items[Math.floor(fxrand()*items.length)];
        }
      
      const colores = [ colors1,colors2,colors3,colors4,colors5,colors6]
      const color = randomFromList(colores)
      
      cuadrados.push(new Cuadrado(x,y,tam1,tam2,color));
      
      }
      cuadrados.forEach(cuadrado => {
        cuadrado.draw(ctx)
      })

      ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 20);
    ctx.fillRect(0, 0, 20, 1200);
    ctx.fillRect(780, 0,20, 1200);
    ctx.fillRect(0, 1180, 800,20);
    // ctx.fillRect(0, 800, 800,500);


    class Mini{
      constructor(x,y,tam1,tam2,color){
          this.x=x;
          this.y=y;
          this.tam1=tam1;
          this.tam2=tam2;
          this.color=color;
  }
  }


  class Cuadradi{
      constructor (x,y,tam1,tam2,color){
      this.pos = new Mini(x,y,tam1,tam2,color);
      }

      draw(ctx){
          ctx.beginPath();
          ctx.rect(this.pos.x, this.pos.y, this.pos.tam1,this.pos.tam2, this.pos.color);
          ctx.strokeStyle = this.pos.color;
          ctx.stroke();
      }
  }


  const cuadradis = []

  const o = random(3000,5000)


  for (let i = 0; i < o; i++){

    const x = random(0,1000)
    const y = random(700,800)
    const tam1 = random(5,15)
    const tam2 = random(15,20)



  const color = "#000000"

  cuadradis.push(new Cuadradi(x,y,tam1,tam2,color));

  }
  cuadradis.forEach(cuadradi => {
    cuadradi.draw(ctx)
  })




  class Mini2{
    constructor(x,y,tam1,tam2,color){
        this.x=x;
        this.y=y;
        this.tam1=tam1;
        this.tam2=tam2;
        this.color=color;
  }
  }


  class Cuadradi2{
    constructor (x,y,tam1,tam2,color){
    this.pos = new Mini2(x,y,tam1,tam2,color);
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.pos.tam1,this.pos.tam2, this.pos.color);
        ctx.strokeStyle = this.pos.color;
        ctx.stroke();
    }
  }


  const cuadradis2 = []

  const p = random(500,5000)


  for (let i = 0; i < p; i++){

  const x = random(0,1000)
  const y = random(0,700)
  const tam1 = random(5,15)
  const tam2 = random(15,20)


  const color = "#000000"

  cuadradis2.push(new Cuadradi2(x,y,tam1,tam2,color));

  }
  cuadradis2.forEach(cuadradi2 => {
  cuadradi2.draw(ctx)
  })




  class Mini3{
    constructor(x,y,tam1,tam2,color){
        this.x=x;
        this.y=y;
        this.tam1=tam1;
        this.tam2=tam2;
        this.color=color;
  }
  }


  class Cuadradi3{
    constructor (x,y,tam1,tam2,color){
    this.pos = new Mini3(x,y,tam1,tam2,color);
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.pos.tam1,this.pos.tam2, this.pos.color);
        ctx.strokeStyle = this.pos.color;
        ctx.stroke();
    }
  }


  const cuadradis3 = []

  const q = random(20000,35000)


  for (let i = 0; i < q; i++){

  const x = random(0,1000)
  const y = random(800,1200)
  const tam1 = random(5,15)
  const tam2 = random(15,20)


  const color = "#000000"

  cuadradis3.push(new Cuadradi3(x,y,tam1,tam2,color));

  }
  cuadradis3.forEach(cuadradi3 => {
  cuadradi3.draw(ctx)
  })
  }else{

    class Rect{
      constructor(x,y,tam1,tam2,color){
          this.x=x;
          this.y=y;
          this.tam1=tam1;
          this.tam2=tam2;
          this.color=color;
  }
  }


  class Cuadrado{
      constructor (x,y,tam1,tam2,color){
      this.pos = new Rect(x,y,tam1,tam2,color);
      }

      draw(ctx){
          ctx.beginPath();
          ctx.rect(this.pos.x, this.pos.y, this.pos.tam1,this.pos.tam2, this.pos.color);
          ctx.strokeStyle = this.pos.color;
          ctx.stroke();
      }
  }


  const cuadrados = []

  const t = random(4000,5000)


  for (let i = 0; i < t; i++){

    const x = random(-100,800)
    const y = random(-100,1200)
    const tam1 = random(10,100)
    const tam2 = random(10,100)


  const colors1 = ["#dee2e6"]
  const colors2 = ["#ced4da"]
  const colors3 = ["#6c757d"] //rosa brisahte
  const colors4 = ["#495057"]//amarillo
  const colors5 = ["#343a40"]//rojo
  const colors6 = ["#adb5bd"]//rosa
  function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

  const colores = [ colors1,colors2,colors3,colors4,colors5,colors6]
  const color = randomFromList(colores)

  cuadrados.push(new Cuadrado(x,y,tam1,tam2,color));

  }
  cuadrados.forEach(cuadrado => {
    cuadrado.draw(ctx)
  })

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 800, 20);
  ctx.fillRect(0, 0, 20, 1200);
  ctx.fillRect(780, 0,20, 1200);
  ctx.fillRect(0, 1180, 800,20);
  // ctx.fillRect(0, 800, 800,500);


  class Mini{
  constructor(x,y,tam1,tam2,color){
      this.x=x;
      this.y=y;
      this.tam1=tam1;
      this.tam2=tam2;
      this.color=color;
  }
  }


  class Cuadradi{
  constructor (x,y,tam1,tam2,color){
  this.pos = new Mini(x,y,tam1,tam2,color);
  }

  draw(ctx){
      ctx.beginPath();
      ctx.rect(this.pos.x, this.pos.y, this.pos.tam1,this.pos.tam2, this.pos.color);
      ctx.strokeStyle = this.pos.color;
      ctx.stroke();
  }
  }


  const cuadradis = []

  const o = random(5000,8000)


  for (let i = 0; i < o; i++){

  const x = random(0,1000)
  const y = random(500,600)
  const tam1 = random(5,15)
  const tam2 = random(15,20)

  const color = `#000000`

  cuadradis.push(new Cuadradi(x,y,tam1,tam2,color));

  }
  cuadradis.forEach(cuadradi => {
  cuadradi.draw(ctx)
  })




  class Mini2{
  constructor(x,y,tam1,tam2,color){
    this.x=x;
    this.y=y;
    this.tam1=tam1;
    this.tam2=tam2;
    this.color=color;
  }
  }


  class Cuadradi2{
  constructor (x,y,tam1,tam2,color){
  this.pos = new Mini2(x,y,tam1,tam2,color);
  }

  draw(ctx){
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.pos.tam1,this.pos.tam2, this.pos.color);
    ctx.strokeStyle = this.pos.color;
    ctx.stroke();
  }
  }


  const cuadradis2 = []

  const p = random(500,5000)


  for (let i = 0; i < p; i++){

  const x = random(0,1000)
  const y = random(600,1200)
  const tam1 = random(5,15)
  const tam2 = random(15,20)



  const color = `#00000`

  cuadradis2.push(new Cuadradi2(x,y,tam1,tam2,color));

  }
  cuadradis2.forEach(cuadradi2 => {
  cuadradi2.draw(ctx)
  })




  class Mini3{
  constructor(x,y,tam1,tam2,color){
    this.x=x;
    this.y=y;
    this.tam1=tam1;
    this.tam2=tam2;
    this.color=color;
  }
  }


  class Cuadradi3{
  constructor (x,y,tam1,tam2,color){
  this.pos = new Mini3(x,y,tam1,tam2,color);
  }

  draw(ctx){
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.pos.tam1,this.pos.tam2, this.pos.color);
    ctx.strokeStyle = this.pos.color;
    ctx.stroke();
  }
  }


  const cuadradis3 = []

  const q = random(25000,35000)


  for (let i = 0; i < q; i++){

  const x = random(0,1000)
  const y = random(0,500)
  const tam1 = random(5,15)
  const tam2 = random(15,20)


  const color = `#00000`

  cuadradis3.push(new Cuadradi3(x,y,tam1,tam2,color));

  }
  cuadradis3.forEach(cuadradi3 => {
  cuadradi3.draw(ctx)
  })



      }
  fxpreview()




