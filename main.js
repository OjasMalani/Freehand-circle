var mouseevent= "empty";
var lastx,lasty;
canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color= "black";
widthofline= 1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color= document.getElementById("color").value;
    widthofline= document.getElementById("widthline").value;
    mouseevent= "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseevent= "mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseevent= "mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
  currentx= e.clientx-canvas.offsetLeft; 
  currenty= e.clienty-canvas.offsetTop;

  if(mouseevent=="mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle= color;
      ctx.lineWidth= widthofline;

      console.log("last position of x and y = ");
    console.log("x = "+lastx+" y = "+lasty);
    ctx.moveTo(lastx,lasty);

    console.log("current position of x and y = ");
    console.log("x = "+currentx+" y = "+currenty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
  }
  lastx= currentx;
  lasty= currenty;
}
function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}