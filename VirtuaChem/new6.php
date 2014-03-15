<html>
<title>VirtuaChem Online Game</title>
<head>
<link href="timeTo.css" type="text/css" rel="stylesheet"/>

</head>
<body>
<script src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="up.js"></script>
<script type="text/javascript" src="updtinvt.js"></script>
<script type="text/javascript" src="uprctr.js"></script>
<script type="text/javascript" src="udtrctrinv.js"></script>

<script type="text/javascript" src="../sastrend.js"></script>
 <script src="assets/js/chart.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="assets/js/prism.js"></script>
    <script src="assets/js/jquery.mCustomScrollbar.min.js"></script>
	<script src="ocanvas.min.js"></script>

<script>
     var start=new Date();
 var flag1=0;var flag2=0;
 var imgrtr=new Array("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
 var imgrct=new Array("-1","-1","-1","-1","-1","-1","-1");
 function put11()
{
flag1=1;

if(document.getElementById(1).value>0)
{

	document.getElementById("content1").innerHTML='<img align="left" src="1.jpg" width="200" height="100">';
	imgrct=("1","-1","-1","-1","-1","-1","-1");
}	
}
function put12()
{flag1=1;
if(document.getElementById(2).value>0)
{
	document.getElementById("content1").innerHTML='<img align="left" src="2.jpg" width="200" height="100">';
	imgrct=("-1","1","-1","-1","-1","-1","-1");
}
}
function put13()
{flag1=1;
if(document.getElementById(3).value>0)
{
	document.getElementById("content1").innerHTML='<img align="left" src="3.jpg" width="200" height="100">';
	imgrct=("-1","-1","1","-1","-1","-1","-1");
}
}
function put14()
{flag1=1;
if(document.getElementById(4).value>0)
{
	document.getElementById("content1").innerHTML='<img align="left" src="4.jpg" width="200" height="100">';
	imgrct=("-1","-1","-1","1","-1","-1","-1");
}
}
function put15()
{flag1=1;
if(document.getElementById(5).value>0)
{
	document.getElementById("content1").innerHTML='<img align="left" src="5.jpg" width="200" height="100">';
	imgrct=("-1","-1","-1","-1","1","-1","-1");
}
}
function put16()
{

flag1=1;
if(document.getElementById(6).value>0)
{
	document.getElementById("content1").innerHTML='<img align="left" src="6.jpg" width="200" height="100">';
	imgrct=("-1","-1","-1","-1","-1","1","-1");
}
}
function put17()
{flag1=1;
if(document.getElementById(7).value>0)
{
	document.getElementById("content1").innerHTML='<img align="left" src="7.jpg" width="200" height="100">';
	imgrct=("-1","-1","-1","-1","-1","-1","1");
}
}
function put211()
{
	flag2=1;
if(document.getElementById(11).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="11.jpg" width="150" height="100">';
	imgrtr=("1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
}
}
function put212()
{flag2=1;
if(document.getElementById(12).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="12.jpg" width="150" height="100">';
	imgrtr=("-1","1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
}
}
function put213()
{flag2=1;
if(document.getElementById(13).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="13.jpg" width="150" height="100">';
	imgrtr=("-1","-1","1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
}
}
function put214()
{flag2=1;
if(document.getElementById(14).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="14.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
}
}
function put215()
{flag2=1;
if(document.getElementById(15).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="15.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
}
}
 
function put216()
{flag2=1;
if(document.getElementById(16).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="16.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
}
}
function put217()
{flag2=1;
if(document.getElementById(17).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="17.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
}
}
function put218()
{flag2=1;
if(document.getElementById(18).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="18.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
}
}
function put219()
{flag2=1;
if(document.getElementById(19).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="19.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
}
}
function put220()
{flag2=1;
if(document.getElementById(20).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="20.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
}
}
function put221()
{flag2=1;
if(document.getElementById(21).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="21.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","1","-1","-1","-1","-1","-1","-1","-1","-1");
}}
function put222()
{flag2=1;
if(document.getElementById(22).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="22.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","1","-1","-1","-1","-1","-1","-1","-1");
}}
function put223()
{flag2=1;
if(document.getElementById(23).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="23.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","1","-1","-1","-1","-1","-1","-1");
}}
function put224()
{flag2=1;
if(document.getElementById(24).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="24.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","1","-1","-1","-1","-1","-1");
}}
function put225()
{flag2=1;
if(document.getElementById(25).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="25.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","1","-1","-1","-1","-1");
}}
function put226()
{flag2=1;
if(document.getElementById(26).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="26.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","1","-1","-1","-1");
}}
function put227()
{	flag2=1;
if(document.getElementById(27).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="27.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","1","-1","-1");
}}
function put228()
{flag2=1;
if(document.getElementById(28).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="28.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","1","-1");
}}
function put229()
{flag2=1;
if(document.getElementById(29).value>0)
{
	document.getElementById("content2").innerHTML='<img align="centre" src="29.jpg" width="150" height="100">';
	imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","1");
}}
 
function convert()
{
	
if((flag1==1)&&(flag2==1))
{
	var i,rctpos=0,rtrpos=0,tmp;var tmp1;
	for(i=0;i<7;i++)
	{
		if(imgrct[i]=="1")
		{
		
			rctpos=i;
			
			tmp=document.getElementById(rctpos).value;
			tmp1=parseInt(tmp);

			
			tmp1-=1;
			document.getElementById(rctpos).value=tmp1;
		}
	}
	for(i=0;i<19;i++)
	{
		if(imgrtr[i]==1)
		{
			rtrpos=i;
			tmp=document.getElementById(rtrpos+10).value;
			tmp1=parseInt(tmp);
			tmp1-=1;
			document.getElementById(rtrpos+10).value=tmp1;
		}
	}
	var add;
	var sub;
	
	switch(rctpos)
	{
		case 1: switch(rtrpos+10)
				{		
				
					case 11: add=document.getElementById(2).value;
					
                                tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(2).value=tmp1;
							   break;
					case 12:  add=document.getElementById(3).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(3).value=add;
							  break;
					
					case 13:	add=document.getElementById(4).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(4).value=add;
							  break;
							  
					case 23:  add=document.getElementById(5).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(5).value=add;
							  break;
					case 24:add=document.getElementById(6).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(6).value=add;
							  break;
					case 25:	add=document.getElementById(7).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(7).value=add;
							  break;
				
					
							alert("Reactor and Reactant Mismaatch.");
							break;
				}
				break;
				
			case 2: switch(rtrpos+10)
				{
					case 14:   add=document.getElementById(5).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(5).value=add;
							  break;
					case 17:  add=document.getElementById(6).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(6).value=add;
							  break;
					
					case 18:	add=document.getElementById(7).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(7).value=add;
							  break;
							  
					case 26:  add=document.getElementById(3).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(3).value=add;
							  break;
					
					 alert("Reactor and Reactant Mismaatch.");
							break;
				}
				break;
		case 3:			switch(rtrpos+10)
				{
					case 15: add=document.getElementById(6).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(6).value=add;
							  break;
					case 19:   add=document.getElementById(5).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(5).value=add;
							  break;
					
					case 20:	add=document.getElementById(7).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(7).value=add;
							  break;
					
					alert("Reactor and Reactant Mismaatch.");
							break;
				
				
				}
				break;
		case 4:		switch(rtrpos+1)
				{
					case 16:add=document.getElementById(7).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(7).value=add;
							  break;
					case 21:   add=document.getElementById(5).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(5).value=add;
							  break;
					
					case 22:	 add=document.getElementById(6).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(6).value=add;
							  break;
							  
					case 27:  add=document.getElementById(3).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(3).value=add;
							  break;
						 alert("Reactor and Reactant Mismaatch.");
							break;
				
				}
				break;
		case 5:		switch(rtrpos+10)
				{
					case 28: add=document.getElementById(6).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(6).value=add;
							  break;
					 alert("Reactor and Reactant Mismaatch.");
							break;
				
				}
				break;
		case 7:switch(rtrpos+10)
				{
					case 29:  add=document.getElementById(6).value; tmp1=parseInt(add);
							  tmp1=tmp1+1;
							  document.getElementById(6).value=add;
							  break;
					
							alert("Reactor and Reactant Mismaatch.");
							break;
				
				}
				break;
		case 6:
				alert("Reactor and Reactant Mismaatch.");
							break;
				
		
		
		
	}//end of reactant switch

	}//end of if
		repaint();
flag1=0;flag2=0;
	
}	//end of function

function repaint()
{
				 imgrtr=("-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1");
  imgrct=("-1","-1","-1","-1","-1","-1","-1");
//<div id="content1" style="background-color:blue;height:400px;width:500px;float:left;"></div>
//<div id="content2" style="background-color:green;height:400px;width:500px;float:left;"></div>
document.getElementById('content1').innerHTML=" ";
document.getElementById('content2').innerHTML=" ";
}
 </script>



<div id="container" style="width:1300px;height:640px;" >
<!--    


===================================================================================================================================top

-->
<div id="topmenu" style="height:165px;width:1300px;text-align:center;" >
         <div id="main" style="background-color: rgb(124, 195, 223);;height:165px;width:1150px ;float:left;text-align:center;" onmouseover="updtprice(document.getElementById('reactant').value)">
			INVENTORIES - All the products that you own and that can be sold are listed here.
		      <table style="margin:5px;align:center">
        <tr>
          
            <td>
				<img src="11.jpg" id="111" width="35" height="30" onclick="put211()">&nbsp&nbsp&nbsp
				<img src="12.jpg" id="112" width="35" height="30" onclick="put212()">&nbsp&nbsp&nbsp
				<img src="13.jpg" id="113" width="35" height="30" onclick="put213()">&nbsp&nbsp&nbsp
				<img src="14.jpg" id="114" width="35" height="30" onclick="put214()">&nbsp&nbsp&nbsp
				<img src="15.jpg" id="115" width="35" height="30" onclick="put215()">&nbsp&nbsp&nbsp
				<img src="16.jpg" id="116" width="35" height="30" onclick="put216()">&nbsp&nbsp&nbsp
				<img src="17.jpg" id="117" width="35" height="30" onclick="put217()">&nbsp&nbsp&nbsp
				<img src="18.jpg" id="118" width="35" height="30" onclick="put218()">&nbsp&nbsp&nbsp
				<img src="19.jpg" id="119" width="35" height="30" onclick="put219()">&nbsp&nbsp&nbsp
				<img src="20.jpg" id="120" width="35" height="30" onclick="put220()">&nbsp&nbsp&nbsp
                <img src="21.jpg" id="121" width="35" height="30" onclick="put221()">&nbsp&nbsp&nbsp
				<img src="22.jpg" id="122" width="35" height="30" onclick="put222()">&nbsp&nbsp&nbsp
				<img src="23.jpg" id="123" width="35" height="30" onclick="put223()">&nbsp&nbsp&nbsp
				<img src="24.jpg" id="124" width="35" height="30" onclick="put224()">&nbsp&nbsp&nbsp
				<img src="25.jpg" id="125" width="35" height="30" onclick="put225()">&nbsp&nbsp&nbsp
				<img src="26.jpg" id="126" width="35" height="30" onclick="put226()">&nbsp&nbsp&nbsp
				<img src="27.jpg" id="127" width="35" height="30" onclick="put227()">&nbsp&nbsp&nbsp
				<img src="28.jpg" id="128" width="35" height="30" onclick="put228()">&nbsp&nbsp&nbsp
				<img src="29.jpg" id="129" width="35" height="30" onclick="put229()">&nbsp&nbsp&nbsp
				<br>
				<input readonly type="text" id='11' value="0" style="width:35px"/>&nbsp&nbsp&nbsp				
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
				<input readonly type="text" id='22'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='23'value="0" style="width:35px"/>&nbsp&nbsp&nbsp					
				<input readonly type="text" id='24'value="0" style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='25'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='26'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text" id='27'value="0"style="width:35px"/>&nbsp&nbsp&nbsp	
				<input readonly type="text" id='28'value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				<input readonly type="text"id='29' value="0"style="width:35px"/>&nbsp&nbsp&nbsp
				
			
				<br><br>
				<input readonly type="text" id='1' value="0"style="width:40px"/>&nbsp&nbsp
				<button onclick="updtinv1(1)">Sell</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
				
				<input readonly type="text" id='2' value="0" style="width:40px"/>&nbsp&nbsp
				<button onclick="updtinv1('2')">Sell</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
				
				<input readonly type="text" id='3' value="0"style="width:40px"/>&nbsp&nbsp
				<button onclick="updtinv1('3')">Sell</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
				
				<input readonly type="text" id='4' value="0"style="width:40px"/>&nbsp&nbsp
				<button onclick="updtinv1('4')">Sell</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
				
				<input readonly type="text" id='5' value="0"style="width:40px"/>&nbsp&nbsp
				<button onclick="updtinv1(document.getElementById('5').value)">Sell</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
				
				<input readonly type="text" id='6' value="0"style="width:40px"/>&nbsp&nbsp
				<button onclick="updtinv1('6')">Sell</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
				
				<input readonly type="text" id='7' value="0"style="width:40px"/>&nbsp&nbsp
				<button onclick="updtinv1('7')">Sell</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
				
				<br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img src="1.jpg" id="1" width="20" height="20" onclick="put11()">
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img src="2.jpg" id="2" width="20" height="20" onclick="put12()">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
				<img src="3.jpg" id="3" width="20" height="20" onclick="put13()">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
				<img src="4.jpg" id="4" width="20" height="20" onclick="put14()">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
				<img src="5.jpg" id="5" width="20" height="20" onclick="put15()">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp				<img src="6.jpg" id="6" width="20" height="20" onclick="put16()">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
		&nbsp&nbsp&nbsp	&nbsp&nbsp		<img src="7.jpg" id="7" width="20" height="20" onclick="put17()">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
			</td>
			
           
        </tr>
    </table>
				  
		 
		 
		 </div>
		 <span id="countdown" style="background-color:rgb(240, 225, 179) ;height:165px;width:150px ;float:right;text-align:center;" onmouseover="updtprice(document.getElementById('reactant').value)">
		 TIMER<br><br><br>
		 <div id="countdown-1"></div>
				
		<script src="./jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="jquery-1.9.1.min.js"><\/script>')</script>
    <script src="jquery.timeTo.min.js"></script>
    <script>
        /**
         * Set timer countdown in seconds with callback
         */
        $('#countdown-1').timeTo(300, function(){
            window.location.href='../home.htm';
	
        });
   
    </script>
	
</span>
		
</div>

  <!--    


===================================================================================================================================left

-->
<div id="menu" style="background-color:#D3C161;height:450px;width:150px;float:left;" onmouseover="updtprice(document.getElementById('reactant').value)">
<b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMarket <br> Buy Reactors and Reactants here.</b>
<form>
Virtual Money in your account&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp	<input type="number" id="gross" size="1" value="40000" >



</input>
</form>


<img id="reactantimg"  src="logofinal.png" draggable="true" style=" height:50px;width:50;" >
<form name='reactants'>

<select id='reactant' name='react' style="width: 90% float:centre" onchange="updtprice(document.getElementById('reactant').value)">
<option value="default">Choose Reactant</option>
<option value='1' style="background-color:green">Omnipotentic Acid</option>
<option value='2' style="background-color:red">Psyane</option>
<option value='3'style="background-color:grey">Peroxy</option>
<option value='4' style="background-color:orange">X-Potentate</option>
<!--<option value='5' style="background-color:pink">GOD</option>
<option value='6' style="background-color:lightblue">JoJo</option>
<option value='7'style="background-color:yellow">Rajini</option>-->
</select>

Cost (in Rs)<input type="number" id="price" size="2"></input>

<select id="dropdown" style="float:right">
<option value="default">Select quantity</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  
   
</select>
 
</form>
	
<button onclick="updtinv(document.getElementById('reactant').value)" style="float:right" >Buy</button>
<br>
<img id="rtrimg" style=" height:50px;width:50;">

<form name='reactors'>

<select id='reactor' name='reactqwe' style="width: 90% float:centre" onchange="updtprice(document.getElementById('reactant').value)">
<option value="default">Choose Reactor</option>
<option value='11' style="background-color:green;">Reactor 1</option>
<option value='12' style="background-color:green;">Reactor 2</option>
<option value='13' style="background-color:green;">Reactor 3</option>
<option value='14' style="background-color:red;">Reactor 4</option>
<option value='15' style="background-color:grey;">Reactor 5</option>
<option value='16' style="background-color:orange;">Reactor 6</option>
<option value='17' style="background-color:red;">Reactor 7</option>
<option value='18' style="background-color:red;">Reactor 8</option>
<option value='19' style="background-color:grey;">Reactor 9</option>
<option value='20' style="background-color:grey;">Reactor 10</option>
<option value='21' style="background-color:orange;">Reactor 11</option>
<option value='22' style="background-color:orange;">Reactor 12</option>
<option value='23' style="background-color:green;">Reactor 13</option>
<option value='24' style="background-color:green;">Reactor 14</option>
<option value='25' style="background-color:green;">Reactor 15</option>
<option value='26' style="background-color:red;">Reactor 16</option>
<option value='27' style="background-color:orange;">Reactor 17</option>
<option value='28' style="background-color:pink;">Reactor 18</option>
<option value='29' style="background-color:yellow;">Reactor 19</option>

</select>

Cost (in Rs)<input type="number" id="reactorprice" size="2"></input>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

<select id="dropdownrtr" style="float:right">
	<option value="default">Select Quantity</option>
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

<div id="content" style="background-color:#EEEEEE;height:200px;width:1000px;float:left;">

<div id="content1" style="background-color:rgb(226, 234, 235);height:400px;width:500px;float:left;"></div>
<div id="content2" style="background-color:rgb(203, 234, 236);height:400px;width:500px;float:left;"></div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button style="background-color: yellow;" onclick="convert()">Click Here To Convert</button>

<!--    =======================================================newsflsh====================================================-->

<div id="newsmenu" style="background-color: rgb(252, 100, 100);height:20px;width:1000px;text-align:center;" onmouseover="updtprice(document.getElementById('reactant').value)">
NEWS UPDATES!!
<ul class="newsticker">
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

<!--
<div id="myCanvas" ondrop="drop(event)" ondragover="allowDrop(event)">
</div>
-->

</div>


<!--    


===================================================================================================================================right

-->


<div id="rightmenu" style="background-color:#D3C161;height:450px;width:150px;float:right;" onmouseover="updtprice(document.getElementById('reactant').value)">
Demo version.
<!--
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
<button onclick="myFunction()">Sell</button> -->
</div>


  <!--    


===================================================================================================================================footer

-->

</div>
 
</body>
</html>
