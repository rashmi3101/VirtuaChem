
<html>

<body>
<script src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="up.js"></script>
<script type="text/javascript" src="updtinvt.js"></script>
<script type="text/javascript" src="uprctr.js"></script>

<script type="text/javascript" src="../sastrend.js"></script>
 <script src="assets/js/chart.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="assets/js/prism.js"></script>
    <script src="assets/js/jquery.mCustomScrollbar.min.js"></script>
	<script src="ocanvas.min.js"></script>

<script>
     var start=new Date();
 function put1()
{
	document.getElementById("content1").innerHTML='<img align="left" src="reactant1.jpg" width="200" height="100">';
	
}
function put2()
{
	document.getElementById("content2").innerHTML='<img align="center" src="reactant1.jpg" width="200" height="100">';
	
}

 

  
</script>



<div id="container" style="width:1300px;height:550px;" >
<!--    


===================================================================================================================================top

-->
<div id="topmenu" style="height:125px;width:1300px;text-align:center;" >
         <div id="main" style="background-color:yellow;height:125px;width:1150px ;float:left;text-align:center;" onmouseover="updtprice(document.getElementById('reactant').value)">
		 
		      <table style="margin:5px;align:center">
			  <tr><td>
			    <img src="reactant2.jpg" width="20" height="20" onclick="put1()">
				<img src="reactant2.jpg" width="20" height="20" onclick="put2()">
				</td></tr>
        <tr>
          
            <td>
			
                <input readonly type="text" id='11' value="0" style="width:35px"/>	&nbsp&nbsp&nbsp				
				<input readonly type="text" id='12' value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='13' value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='14'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='15'value="0"style="width:35px"/>&nbsp&nbsp&nbsp	
				<input readonly type="text" id='16'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='17'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='18'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='19'value="0"style="width:35px"/>&nbsp&nbsp&nbsp	
				<input readonly type="text" id='20'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='21'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='22' value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text"id='23'value="0" style="width:35px"/>&nbsp&nbsp&nbsp					
				<input readonly type="text"id='24'value="0" style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='25'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='26'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='27'value="0"style="width:35px"/>				&nbsp&nbsp&nbsp	
				<input readonly type="text" id='28'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text"id='29' value="0"style="width:35px"/>&nbsp&nbsp&nbsp
		
			
				<br><br><br>
				<input readonly type="text" id='1' value="0"style="width:40px"/>				&nbsp&nbsp&nbsp	
				<input readonly type="text" id='2' value="0" style="width:40px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='3' value="0"style="width:40px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='4' value="0"style="width:40px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='5' value="0"style="width:40px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='5' value="0"style="width:40px"/>&nbsp&nbsp&nbsp
			
			</td>
           
        </tr>
    </table>
				  
		 
		 
		 </div>
		 <span id="countdown" style="background-color:red ;height:125px;width:150px ;float:right;text-align:center;" onmouseover="updtprice(document.getElementById('reactant').value)"></span>


		




</div>

  <!--    


===================================================================================================================================left

-->
<div id="menu" style="background-color:#FFD700;height:450px;width:150px;float:left;" onmouseover="updtprice(document.getElementById('reactant').value)">
<b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMarket</b>
<form>
						&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp	<input type="number" id="gross" size="2" value="10000" >



</input>
</form>

<br>
<img id="imag"  src="logofinal.png" draggable="true" style=" height:50px;width:50;" >
<form name='reactants'>

<select id='reactant' name='react' style="width: 90% float:centre" onchange="updtprice(document.getElementById('reactant').value)">

<option value='1' style="background-color:red">Reactant 1</option>
<option value='2' style="background-color:lightgreen">Reactant 2</option>
<option value='3'style="background-color:grey">Reactant 3</option>
<option value='4' style="background-color:pink">Reactant 4</option>
</select>
<br><br>
<input type="number" id="price" size="2"></input>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

<select id="dropdown" style="float:right">
<option value="default"></option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
   <option value="5">5</option>
   
</select>
 
</form>
	
<button onclick="updtinv(document.getElementById('reactant').value)" style="float:right" >Buy</button>

<br>
<br>
<img id="imag"  src="logofinal.png" style=" height:50px;width:50;">

<form name='reactors'>

<select id='reactor' name='reactqwe' style="width: 90% float:centre" onchange="updtprice(document.getElementById('reactant').value)">

<option value='11' style="width:100%; background-color:red width:50%; background-color:green;">Reactor 1</option>
<option value='12' style="background-color:lightgreen">Reactor 2</option>
<option value='13'style="background-color:grey">Reactor 3</option>
<option value='14' style="background-color:pink">Reactor 4</option>
<option value='15' style="background-color:red">Reactor 5</option>
<option value='16' style="background-color:lightgreen">Reactor 6</option>
<option value='17'style="background-color:grey">Reactor 7</option>
<option value='18' style="background-color:pink">Reactor 8</option>
<option value='19' style="background-color:red">Reactor 9</option>
<option value='20' style="background-color:lightgreen">Reactor 10</option>
<option value='21'style="background-color:grey">Reactor 11</option>
<option value='22' style="background-color:pink">Reactor 12</option>
<option value='23' style="background-color:red">Reactor 13</option>
<option value='24' style="background-color:lightgreen">Reactor 14</option>
<option value='25'style="background-color:grey">Reactor 15</option>
<option value='26' style="background-color:pink">Reactor 16</option>
<option value='27' style="background-color:red">Reactor 17</option>
<option value='28' style="background-color:lightgreen">Reactor 18</option>
<option value='29'style="background-color:grey">Reactor 19</option>

</select>
<br><br>
<input type="number" id="reactorprice" size="2"></input>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

<select id="dropdownrtr" style="float:right">
<option value="default"></option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
   <option value="5">5</option>
   
</select>
  


</form>


	
		
<button onclick="updtinvrtr(document.getElementById('reactor').value)" style="float:right" >Buy</button>
</div>
<!--    


===================================================================================================================================centr

-->

<div id="content1" style="background-color:blue;height:435px;width:500px;float:left;"></div>
<div id="content2" style="background-color:green;height:435px;width:500px;float:left;"></div>
<!--
<canvas id="myCanvas" width="1000" height="400" style="z-index:3 border:1px solid #d3d3d3;">
</canvas>
-->
<!--    =======================================================newsflsh====================================================-->

<div id="newsmenu" style="height:45px;width:1000px;text-align:center;float:bottom;position:absolute;bottom:20px" onmouseover="updtprice(document.getElementById('reactant').value)">

<div id="convert" style="background-color:yellow;height:20px;width:1000px;text-align:center;position:absolute;left:150px" onmouseover="updtprice(document.getElementById('reactant').value)"></div>


<ul class="newsticker" style="height:40px;width:900px;text-align:center;position:absolute;left:150px">

<li>More and more buyers pitch in to buy Omnipotentic acid due to its increasing demand</li>
<li>A slight increase in the wholesale price index indicative of a stronger market</li>
<li>Recent improvements in space research increases demand for the super fuel JOJO thereby affecting the Peroxypotentic acid's price</li>
<li>A new product in the market called X-potentate has been launched </li>
<li>Infinitely Elastic Rubber is in! </li>
<li>Invention of a high-tech Rocket Fuel hits the market</li>
<li>UltraCleaner is in the market!
</li>



<li>CHEA pvt ltd, a leading producer of Omnipotentic acid go out for an indefinite HARTAL</li>
<li>A slight increase in the wholesale price index indicative of a stronger market</li>
<li>Recent improvements in space research increases demand for the super fuel JOJO thereby affecting the Peroxypotentic acid's price</li>
<li>Not many people are aware of this product </li>
<li>The product is in its incipience. Market for it is predicted to grow slowly.</li>
<li>Technology for meeting JoJo's production is reported of insufficiency</li>
<li>Consumers express slight indifference to the product</li>

</ul>
    <script src="jquery.newsTicker.js"></script>
<script type="text/javascript">
  /* $('.newsticker').newsTicker({
    row_height: 48,
    max_rows: 2,
    speed: 600,
    direction: 'up',
    duration: 1000,
    autostart: 1,
    pauseOnHover: 0
});*/ $('.newsticker').newsTicker({
    
row_height: 20,
    max_rows: 7,
    duration: 1000,
	direction: 'up',
    duration: 4000,
    autostart: 1,
    pauseOnHover: 0
});
</script>


</div>
<!--    =======================================================end_newsflsh====================================================-->

<script>
</div>


var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
//------------------------------------------------------------------------------------market items

ctx.fillRect(0,0,1000,400);








</script>





<div id="myCanvas" ondrop="drop(event)" ondragover="allowDrop(event)">
</div>





<script>
function allowDrop(ev)
{
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
}
</script>
<!--    


===================================================================================================================================right

-->
<div id="rightmenu" style="background-color:#FFD700;height:450px;width:150px;float:left;" onmouseover="updtprice(document.getElementById('reactant').value)">
<b>&nbsp&nbsp&nbsp&nbspMenu</b>
<br>
<br>
<img id="imag"  src="logofinal.png" style=" height:50px;width:50;">

<br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<output name="amount" value="10">0</output>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<button onclick="myFunction()">Sell</button>

<br>
<br>
<img id="imag"  src="logofinal.png" style=" height:50px;width:50;">

<br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<output name="amount" value="10">0</output>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<button onclick="myFunction()">Sell</button><br>
<br>
<img id="imag"  src="logofinal.png" style=" height:50px;width:50;">

<br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<output name="amount" value="10">0</output>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<button onclick="myFunction()">Sell</button>
</div>


  <!--    


===================================================================================================================================footer

-->
</div>

<div id="footer" style="background-color:orange;clear:both;text-align:center;" onmouseover="updtprice(document.getElementById('reactant').value)">

</div>
</div>
</div> 
</body>
</html>
