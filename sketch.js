var circles = [];
function setup() {
  background(0);
  createCanvas(300, 200);
  var colors = [color(170,100,30),color(100,170,30),color(30,100,170),color(100,30,170),color(170,30,100)];
  for (let i=0;i<10;i++){
    var colo = colors[i%5]
    circles.push(new GCircle(i*30,50,25,colo,i%5));
    circles.push(new GCircle(i*30,25,25,colo,i%5));
    circles.push(new GCircle(i*30,75,25,colo,i%5));
    // circles.push(new GCircle(i*30,100,25,colo,i%5));
  }
}

function draw() {
  background(0,30);
  for (let i=0;i<circles.length;i++){
    circles[i].show();
    circles[i].move();
  }
}
