let c;
let can;
let f=1;

function setup() {
  can=createCanvas(400, 400);
  can.parent("#canvas");
  c=gcd(97,10);
  select("#stop").mouseClicked(()=>{
    
    if(f){
      select("#stop").html("Start");
      f=0;
      noLoop();
    }else{
      select("#stop").html("Stop");
      f=1;
      loop();
    }
    
  });
}


function gcd(a,b){
  if(b>a){
    [a,b]=[b,a];
  }
  let r=a%b;
  if(r==0){
    return b;
  }
  return gcd(b,r);
}

let count=0;
let n=0;
// function mousePressed(){
  
//   noLoop();
// }

function draw() {
  background(220);
  let result=gcd(floor(random(1,1000)),floor(random(1,1000)));
  n++;
  if(result==1){
    count++;
  }
  translate(width/2,height/2);
  textSize(25);
  textAlign(CENTER,CENTER);
  text("PI:",0,-40);
  text(Math.sqrt(6/(count/n)),0,0);
  
}