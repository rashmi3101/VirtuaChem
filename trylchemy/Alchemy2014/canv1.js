
var img=new Image();
img.src="logofinal.png";


var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
//------------------------------------------------------------------------------------market items

var grd = ctx.createLinearGradient(0,0,400,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,200,600);


//------------------------------------------------------------------------------------your inventory
var grd1 = ctx.createLinearGradient(400,0,1150,0);
grd1.addColorStop(0,"blue");
grd1.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd1;
ctx.fillRect(200,0,1150,100);

//------------------------------------------------------------------------------------help +  products  +  net worth
var grd2 = ctx.createLinearGradient(1150,0,1350,0);
grd2.addColorStop(0,"green");
grd2.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd2;
ctx.fillRect(1150,0,1350,600);
//------------------------------------------------------------------------------------  newsflash
var grd3 = ctx.createLinearGradient(200,500,1150,600);
grd3.addColorStop(0,"yellow");
grd3.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd3;
ctx.fillRect(200,500,1150,600);
//------------------------------------------------------------------------------------

ctx.drawImage(img,0,0,200,100);



