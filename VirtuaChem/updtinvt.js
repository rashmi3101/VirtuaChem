  function updtinv(int)
  {	
                  
				  
				// a is number of reactors buying
				// b is number of reactors of id int 
				
				//c is cost of a reacotr at tht moment
				 // tot is total availabale cash
				 
				  
                     var a=parseInt(document.getElementById('dropdown').value);
					 
					 var b=parseInt(document.getElementById(int).value);
					 var c=parseInt(document.getElementById('price').value);
					 var tot=parseInt(document.getElementById('gross').value);
					if(tot>=(a*c))
					{					
						 tot-=(a*c);
						 document.getElementById('gross').value=tot;
						  b+=a;
										 document.getElementById(int).value=b;
					 }
						 
					 else
					 {
					   alert("Insufficient Funds");
					 }
					 
	
	 
					
					 
                   //document.getElementById(int).value=b;
				   
  }
   function updtinv1(int)
  {	
                  
				  var b=parseInt(document.getElementById(int).value);
				  document.getElementById("dropdown").value=int;
					 var c=parseInt(document.getElementById('price').value);
				// a is number of reactors sold
				// b is number of reactants 
				
				//c is cost of a reacotr at tht moment
				 // tot is total availabale cash
				 
				  
                     var a=1;
					 
					 
					 
					 var tot=parseInt(document.getElementById('gross').value);
					if(b-a>=0)
					{					
						 tot+=(a*c);
						 document.getElementById('gross').value=tot;
						  b-=a;
						  
									document.getElementById(int).value=b;
					 }
						 
					 else
					 {
					   alert("Can't sell");
					 }
					 
	
	 
					
					 
                   //document.getElementById(int).value=b;
				   
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 