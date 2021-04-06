var running_boy,boyimg,bgimg,covidGroup,covid1,covid2,covid3,covid4,medicineimg,injectionimg;
var boy,backround1,ground,lives,gameState,medicineGroup,injectionGroup,explosion,explosionimg;

function preload(){
running_boy=loadAnimation("2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png")
boyimg=loadImage("1.png");
bgimg=loadImage("background.jpg");
covid1=loadImage("covid1.png");
covid2=loadImage("covid2.png");
covid3=loadImage("covid3.png");
covid4=loadImage("covid4.png");
medicineimg=loadImage("medicine.png");
injectionimg=loadImage("injection.png")
explosionimg=loadImage("explosion.png")
}
function setup() {
  createCanvas(400, 400);
  
  background1=createSprite(200,200,width,height);
  background1.addImage(bgimg);
  background1.velocityX=-3;
    
  //explosion=createSprite(125,275,10,10);
  //explosion.addImage(explosionimg);
  //explosion.visible=false;
  
  boy=createSprite(100,200,50,50);
  boy.addAnimation("adding",running_boy);

  ground=createSprite(200,370,width,5);
  ground.visible=false;
  
  covidGroup= createGroup();
  medicineGroup= createGroup();
  injectionGroup= createGroup();
  
  lives=3;
  gameState="play";
}
function draw() {
  background("black");

  if(gameState==="play"){
if (background1.x < 0){
    background1.x = background1.width/2;
}  

 if(keyDown("space")&&boy.y>300){
   boy.velocityY=-11;
}
 if(covidGroup.isTouching(boy)){
   lives=lives-1;
   covidGroup.destroyEach();
   //explosion.visible=true;
}//else{explosion.visible=false;}
  if(medicineGroup.isTouching(boy)){
   lives=lives+1;
    medicineGroup.destroyEach();
}
  if(injectionGroup.isTouching(boy)){
   lives=3;
    injectionGroup.destroyEach();
}
  if(lives===0){
    gameState="end";
  }
  
boy.velocityY=boy.velocityY+1
boy.collide(ground);
  
virus();
medicinespawn();
injectionspawn();  
  
drawSprites();
fill("black");
text("lives left="+lives,340,10)
}
  if(gameState==="end"){
    fill("orange");
    textSize(30);
    text("GAME OVER",135,200)
  }

  }

  

function virus(){
  if(frameCount%50===0){
    var covid=createSprite(380,355,1,1);
    covid.scale=0.2;
    covid.y=Math.round(random(336,355))
    //covid.debug=true;
    covid.velocityX=-10;
    var count=Math.round(random(1,4));
    if(count===1){
      covid.addImage(covid1);
    }else if(count===2){
      covid.addImage(covid4)
    }else if(count===3){
      covid.addImage(covid3);
    }else if(count===4){
      covid.addImage(covid4);
    }
    covidGroup.add(covid);
  }
}
function medicinespawn(){
  if(frameCount%500===0){
    var medicine=createSprite(390,240,1,1);
    medicine.scale=0.17;
    medicine.addImage(medicineimg);
    medicine.velocityX=-12;
    medicineGroup.add(medicine);
  }
    
}
function injectionspawn(){
  if(frameCount%1200===0){
    var injection=createSprite(390,240,1,1);
    injection.scale=0.17;
    injection.addImage(injectionimg);
    injection.velocityX=-12;
    injectionGroup.add(injection);
  }
}



