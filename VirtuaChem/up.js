function updtprice(int)
	 {
	 var elapsed;
	 
	 elapsed=((new Date())-start)/20000;  // every 10 secs the price changes... change to every 2 mins..

		
	 var b=parseInt(int);
	
		var rct1=new Array("50","52","54","60","65","70","68","66","65","62","61","58","59","56");
		var rct2=new Array("60","60","60","61","61","62","65","67","68","68","68","69","67","66");
		var rct3=new Array("70","72","73","74","72","71","72","70","69","68","69","68","70","71");
		var rct4=new Array("65","66","67","68","67","66","69","68","69","68","69","68","70","69");
		var rct5=new Array();
		var rct6=new Array();
		var rct7=new Array();
		
		elapsed=Math.floor(elapsed);
		
		switch(b)
		{
		case 1:
		document.getElementById('price').value=rct1[elapsed];
		document.getElementById('reactantimg').src="1.jpg";
		break;
	    case 2:
		document.getElementById('price').value=rct2[elapsed];
		document.getElementById('reactantimg').src="2.jpg";
		break;
		case 3:
		document.getElementById('price').value=rct3[elapsed];
		document.getElementById('reactantimg').src="3.jpg";
		break;
		case 4:
		document.getElementById('price').value=rct4[elapsed];
		document.getElementById('reactantimg').src="4.jpg";
		break;
		}
		
		updtrtr(document.getElementById('reactor').value);
		
	 }
	 
	 