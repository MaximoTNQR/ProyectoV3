//Variables Globales
var Plataforma;
var PlataformaIMG;
var Plataforma2;
var Plataforma2IMG;
var PlataformasGroup;
var Fondo;
var FondoIMG;
var Personaje,PersonajeIMG;
var Ground;
var Bordes;
var coin,MonedaIMG;
var score = 0;


function preload(){
  //precargar imagenes y sonidos
  PlataformaIMG = loadImage("./Imagenes/Plataforma 1.png");
  Plataforma2IMG = loadImage("./Imagenes/Plataforma 2.png");
  FondoIMG = loadImage("./Imagenes/Cielo.png");
  PersonajeIMG = loadAnimation("./Imagenes/Quieto.png","./Imagenes/Saltando.png");
  MonedaIMG = loadImage("./Imagenes/Moneda.png");
}

function setup(){
 //Crear Sprites
  createCanvas(650,650);
  PlataformasGroup = new Group();
  coinGroup = new Group();
  Fondo = createSprite(350,450);
  Fondo.addImage("Fondo",FondoIMG);
  Fondo.scale = 10;
  Fondo.velocityY = 1.7;
  Personaje = createSprite(20,599,20,40);
  Personaje.addAnimation("Quieto",PersonajeIMG);
  Personaje.scale = 2;
  Ground = createSprite(5,637,1250,20);
  Ground.debug = true;
  Ground.shapeColor = rgb(0,229,255);

  Personaje.debug = true;
  Personaje.setCollider("rectangle",0,0,20,28)
}

function draw(){
  
  if (Fondo.y > 450){

   Fondo.y = 100;

  }

  

  if (keyDown("LEFT_ARROW")){

   Personaje.x -= 5;
  }
  if (keyDown("RIGHT_ARROW")){

    Personaje.x += 5;
   }
   if (keyDown("SPACE")){

    Personaje.velocityY = -14;
   }
   Personaje.velocityY += .7;
   Personaje.collide(Ground);
   Personaje.collide(PlataformasGroup);
   //Bordes = createEdges.Sprites();
  spawnPlataformas();
  spawnCoin();

    if (Personaje.isTouching(coinGroup)){

    
    for(var i =0; i < coinGroup.lenght; i++){

      if(coinGroup.get(i).isTouching(Personaje)){

        coinGroup.get(i).destroy();
         score = score + 1;
        console.log(score);
      }
     }
    }
 
 
  drawSprites();
  textSize(20);
  fill("Black");
    text("puntuacion:"+ score,10,20);

}


function spawnPlataformas(){

 if(frameCount%80===0){

  Plataforma = createSprite(50,20,100,20);
  Plataforma.addImage("Plataforma",PlataformaIMG);
  Plataforma.scale = 2;
  Plataforma.debug = true;
  Plataforma.setCollider("rectangle",0,0,100,20)
  Plataforma.velocityY = 2.3;
  Plataforma.x = Math.round(random(20,580));
  //Plataforma.y = Math.round(random(20,400));
  Plataforma.lifetime = 800
  PlataformasGroup.add(Plataforma);

  //Plataforma2 = createSprite(200,20);
  //Plataforma2.addImage("Plataforma2",Plataforma2IMG);
 }
}

function spawnCoin(){

  if(frameCount%150===0){

    coin = createSprite(50,20,10,10);
    coin.addImage("Moneda",MonedaIMG);
    coin.scale = 2;
    coin.debug = true;
    coin.setCollider("rectangle",0,0,10,10)
    coin.velocityY = 2.3;
    coin.x = Math.round(random(20,580));
    //Plataforma.y = Math.round(random(20,400));
    coin.lifetime = 800
    coinGroup.add(Plataforma);
 }
}


