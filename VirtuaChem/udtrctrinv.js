
    function updtinvrtr(int)
  {	
                  
				  
				// a is number of reactors buying
				// b is number of reactors of id int 
				
				//c is cost of a reacotr at tht moment
				 // tot is total availabale cash
		
                    
					
					var a=parseInt(document.getElementById('dropdownrtr').value);
					 
					 
					 var b=parseInt(document.getElementById(int).value);
					 var c=parseInt(document.getElementById('reactorprice').value);
					 var tot=parseInt(document.getElementById('gross').value);

					 var elapsed;
	 
		var mintime=new Array(0,0,0,0,0,0,30,30,30,30,30,30,60,60,60,90,90,120,120);
		
	elapsed=((new Date())-start)/10000;  // every 10 secs the price changes
	elapsed=Math.floor(elapsed);
	
	var temp= parseInt(document.getElementById('reactor').value);
	temp=temp-11;
	
				if(elapsed>mintime[temp])
					{ 
						if(tot>=(a*c))
						{					
								tot-=(a*c);
						 document.getElementById('gross').value=tot;
						  b=b+a*20;
										 document.getElementById(int).value=b;
										 
						 }
						 
			 
					 else
					 {
					   alert("Insufficient Funds");
					 }
					 
					}
					
					else
							alert("Reactor unavailable as of now.");
			 
	
	 
					
					 
                   //document.getElementById(int).value=b;
				   
  }
  
  
  
  
  
 
  
  
  
 