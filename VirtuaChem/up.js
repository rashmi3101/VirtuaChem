function updtprice(int)
	 {
	 var elapsed;
	 
	 elapsed=((new Date())-start)/120000;  // every 10 secs the price changes... change to every 2 mins..

		
	 var b=parseInt(int);
	
		var rct1=new Array("50","52","54","60","65","70","68","66","65","62","61","58","59","56","55",
,"55",
,"55",
,"55",
,"57",
,"56",
,"55",
,"55",
,"57",
,"54",
,"56",
,"55",
,"55",
,"54",
,"57",
,"59",
,"63",
,"62",
,"67",
,"57",
,"72",
,"69",
,"78",
,"82",
,"80",
,"82",
,"81",
,"80",
,"86",
,"75",
,"78",
,"70",
,"68",
,"67",
,"65",
,"65",
,"64",
,"64");
		var rct2=new Array("60","60","60","61","61","62","65","67","68","68","68","69","67","66","64",
,"63",
,"64",
,"67",
,"68",
,"70",
,"73",
,"72",
,"79",
,"76",
,"85",
,"84",
,"82",
,"79",
,"80",
,"77",
,"75",
,"76",
,"75",
,"72",
,"74",
,"70",
,"72",
,"68",
,"71",
,"71",
,"68",
,"65",
,"67",
,"72",
,"71",
,"74",
,"75",
,"76",
,"79",
,"80",
,"78",
,"90",
,"94",
,"95",
,"93",
,"92",
,"92",
,"94",
,"91",
,"90",
,"90",
,"94",
,"88",
,"90",
,"92",
,"90",
,"88",
,"87",
,"84",
,"86",
,"84",
,"86",
,"85",
,"80",
,"77",
,"79");
		var rct3=new Array("70","72","73","74","72","71","72","70","69","68","69","68","70","71","70",
,"72",
,"70",
,"71",
,"72",
,"71",
,"74",
,"76",
,"75",
,"79",
,"81",
,"84",
,"82",
,"83",
,"81",
,"80",
,"81",
,"80",
,"78",
,"79",
,"80",
,"82",
,"83",
,"82",
,"83",
,"82",
,"81",
,"82",
,"80",
,"79",
,"78",
,"76",
,"79",
,"78",
,"82",
,"84",
,"86",
,"85",
,"90",
,"93",
,"96",
,"98",
,"100",
,"99",
,"100",
,"98",
,"97",
,"96",
,"97",
,"97",
,"96",
,"98",
,"96",
,"93",
,"90",
,"92",
,"89",
,"87",
,"88",
,"85",
,"86",
,"85");

		var rct4=new Array("65","66","67","68","67","66","69","68","69","68","69","68","70","69","67",
,"68",
,"67",
,"68",
,"70",
,"72",
,"73",
,"76",
,"77",
,"80",
,"83",
,"84",
,"82",
,"80",
,"81",
,"79",
,"78",
,"77",
,"75",
,"77",
,"76",
,"79",
,"78",
,"76",
,"75",
,"77",
,"74",
,"77",
,"76",
,"76",
,"75",
,"78",
,"77",
,"75",
,"79",
,"82",
,"85",
,"89",
,"92",
,"94",
,"95",
,"94",
,"96",
,"92",
,"90",
,"88",
,"89",
,"87",
,"94",
,"93",
,"92",
,"94",
,"92",
,"90",
,"89",
,"90",
,"87",
,"85",
,"86",
,"83",
,"82",
,"80");
		var rct5=new Array("90",
,"84",
,"88",
,"88",
,"86",
,"86",
,"88",
,"92",
,"92",
,"96",
,"94",
,"94",
,"96",
,"94",
,"92",
,"92",
,"96",
,"94",
,"96",
,"96",
,"98",
,"94",
,"98",
,"96",
,"100",
,"94",
,"98",
,"102",
,"102",
,"104",
,"100",
,"102",
,"106",
,"102",
,"104",
,"104",
,"107",
,"108",
,"109",
,"106",
,"106",
,"109",
,"110",
,"110",
,"108",
,"108",
,"103",
,"100",
,"98",
,"99",
,"100",
,"98",
,"98",
,"102",
,"104",
,"104",
,"105",
,"107",
,"103",
,"106",
,"108",
,"110",
,"106",
,"106",
,"108",
,"112",
,"106",
,"110",
,"112",
,"110",
,"108",
,"104",
,"100",
,"104",
,"100",
,"100");
		var rct6=new Array("98",
,"98",
,"96",
,"98",
,"100",
,"95",
,"98",
,"102",
,"103",
,"104",
,"102",
,"104",
,"108",
,"108",
,"106",
,"106",
,"104",
,"104",
,"100",
,"104",
,"108",
,"100",
,"104",
,"108",
,"110",
,"112",
,"114",
,"106",
,"102",
,"104",
,"100",
,"102",
,"106",
,"102",
,"104",
,"104",
,"107",
,"108",
,"109",
,"106",
,"106",
,"114",
,"110",
,"110",
,"108",
,"108",
,"103",
,"100",
,"104",
,"102",
,"102",
,"106",
,"108",
,"110",
,"112",
,"112",
,"109",
,"107",
,"103",
,"106",
,"108",
,"110",
,"106",
,"106",
,"108",
,"112",
,"106",
,"110",
,"112",
,"110",
,"112",
,"114",
,"110",
,"108",
,"110",
,"110");
		var rct7=new Array("94",
,"91",
,"92",
,"93",
,"93",
,"91",
,"93",
,"97",
,"98",
,"100",
,"98",
,"99",
,"102",
,"101",
,"99",
,"99",
,"100",
,"99",
,"98",
,"100",
,"103",
,"97",
,"101",
,"102",
,"105",
,"103",
,"106",
,"104",
,"102",
,"104",
,"100",
,"102",
,"106",
,"102",
,"104",
,"104",
,"107",
,"108",
,"109",
,"106",
,"106",
,"112",
,"110",
,"110",
,"108",
,"108",
,"103",
,"100",
,"101",
,"101",
,"101",
,"102",
,"103",
,"106",
,"108",
,"108",
,"107",
,"107",
,"103",
,"106",
,"108",
,"110",
,"106",
,"106",
,"108",
,"112",
,"106",
,"110",
,"112",
,"110",
,"110",
,"109",
,"105",
,"106",
,"105",
,"105");
		
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
	 
	 
