/*scene management:games and visualisations*/
fill(0, 0, 0);
textSize(20);
textAlign(CENTER);

//images of Leafers
var seed= getImage("avatars/leafers-seed");
var seedling= getImage("avatars/leafers-seedling");
var sapling= getImage("avatars/leafers-sapling");
var tree= getImage("avatars/leafers-tree");
var ultimate = getImage("avatars/leafers-ultimate");
var star = getImage("space/star");
var currentScene;

var drawScene1 =function(){
    currentScene = 1;
    background(200, 175, 175);
    image(seed, 50,200);
    text("Leafers started out as a seed",200,50);
};

var drawScene2 =function(){
    currentScene = 2;
    background(194, 191, 222);
    image(seedling, 50,200);
    text("Leafers is now a seedling",200,50);
};
var drawScene3 =function(){
    currentScene = 3;
    background(201, 125, 125);
    image(sapling, 50,200);
    text("Leafers has become a sapling",180,50);
};
var drawScene4 =function(){
    currentScene = 4;
    background(165, 95, 230);
    image(tree, 50,200);
    text("Leafers has amazingly become a tree!!!",200,50);
};
var drawScene5 =function(){
    currentScene = 5;
    background(180, 154, 227);
    image(ultimate, 200,200);
    text("In the end, Leafers became Ultimate Leafers",200,50);
};

var drawScene6 =function(){
    currentScene = 6;
    background(220, 237, 150);
    image(star, width/2,200);
    text("In the end, Leafers became Ultimate Star",89,100);
};

drawScene1();

mouseClicked=function(){
 if (currentScene ===1){
     drawScene2();
  }else if (currentScene ===2){
     drawScene3();
}else if (currentScene ===3){
     drawScene4();
 }else if (currentScene ===4){
     drawScene5();
 }else if (currentScene ===5){
     drawScene6();
 }else if (currentScene ===6){
     drawScene1();
 }
};

