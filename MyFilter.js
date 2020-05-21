$(document).ready(function(){
			function escapeRegExp(string){
			    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
			}

			function replaceAll(str, term, replacement) {
			  return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
			}
	
			function replaceAll(type) {
			  var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
				    var csvdata = this.responseText;
				    var results = csvdata.split("\n");
				    var finalDataString = "";
				    $.each(results, function(index, element){
					    console.log(element);
					    var values = element.split(",");
					    if(values[1] === undefined) {
						    
					    }else {
					    var myStr = "<div class='col-md-4 CITY GOTRA OCCUPATION all'><div class='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'><div class='col p-4 d-flex flex-column position-static'><strong class='d-inline-block mb-2 text-success'>TYPE</strong><h3 class='mb-0'>NAME</h3><div class='mb-1 text-muted'>BIRTHDATE</div><div class='mb-1'>Gotra : <b><i>GOTRA</i></b> </div><div class='mb-1'>Occupation : <b><i>OCCUPATION</i></b></div><div class='mb-1'>Work City : <b><i>CITY </i></b></div><a href='URL' class='stretched-link'>Download Bio Data</a></div></div></div>";
					    myStr = replaceAll(myStr, 'CITY', values[3]);
					    myStr = replaceAll(myStr, 'OCCUPATION', values[2]);
					    myStr = replaceAll(myStr, 'NAME', values[1]);	    
					    finalDataString = finalDataString + myStr;
					    }
				    });
				    //document.getElementById("demo").innerHTML = this.responseText;
				    document.getElementById("profiles").innerHTML = finalDataString;
			    }
			  };
			  xhttp.open("GET", type, true);
			  xhttp.send();
			}
	$(".custom-control-input").click(function(){
		$(".all").show();
		if ($('#checkKashayp').is(":checked") || $('#checkKhalap').is(":checked") || $('#checkMandav').is(":checked") || $('#checkGahilam').is(":checked") || $('#checkGautam').is(":checked") || $('#checkLokaksha').is(":checked")) {
			if ($('#checkKashayp').is(":checked")) 
				console.log('your message');
			else
				$(".Kashayp").hide();
			
			if ($('#checkKhalap').is(":checked")) 
				console.log('your message');
			else
				$(".Khalap").hide();
			
			if ($('#checkMandav').is(":checked")) 
				console.log('your message');
			else
				$(".Mandav").hide();
			
			if ($('#checkGahilam').is(":checked")) 
				console.log('your message');
			else
				$(".Gahilam").hide();
			
			if ($('#checkGautam').is(":checked")) 
				console.log('your message');
			else
				$(".Gautam").hide();
			
			if ($('#checkLokaksha').is(":checked")) 
				console.log('your message');
			else
				$(".Lokaksha").hide();
		} else {
			console.log('all gotra false');
		}
		
		if ($('#checkPune').is(":checked") || $('#checkMumbai').is(":checked") || $('#chceckNagpur').is(":checked") || $('#checkNasik').is(":checked") || $('#checkAurangabad').is(":checked") || $('#checkDhule').is(":checked") || $('#checkJalgaon').is(":checked") || $('#checkNandurbar').is(":checked") || $('#checkSurat').is(":checked") || $('#checkForeignCountry').is(":checked") || $('#checkOther').is(":checked")) {
			if ($('#checkPune').is(":checked")) 
				console.log('your message');
			else
				$(".Pune").hide();
								
			if ($('#checkMumbai').is(":checked")) 
				console.log('your message');
			else
				$(".Mumbai").hide();
			
			if ($('#checkNagpur').is(":checked")) 
				console.log('your message');
			else
				$(".Nagpur").hide();
			
			if ($('#checkNasik').is(":checked"))
				console.log('your message');
			else			
				$(".Nasik").hide();
			
			if ($('#checkAurangabad').is(":checked"))
				console.log('your message');
			else			
				$(".Aurangabad").hide();
				
			if ($('#checkDhule').is(":checked"))
				console.log('your message');
			else			
				$(".Dhule").hide();

			if ($('#checkJalgaon').is(":checked"))
				console.log('your message');
			else			
				$(".Jalgaon").hide();

			if ($('#checkNandurbar').is(":checked"))
				console.log('your message');
			else			
				$(".Nandurbar").hide();	
			
			if ($('#checkSurat').is(":checked"))
				console.log('your message');
			else			
				$(".Surat").hide();
				
			if ($('#checkForeignCountry').is(":checked"))
				console.log('your message');
			else			
				$(".ForeignCountry").hide();
				
			if ($('#checkOther').is(":checked"))
				console.log('your message');
			else			
				$(".Other").hide();	
				
		} else {
			console.log('all City false');
		}
		
		if ($('#checkDoctor').is(":checked") || $('#checkEngineer').is(":checked") || $('#checkCA').is(":checked") || $('#checkBusinessman').is(":checked") || $('#checkEnterpreneur').is(":checked") || $('#checkBuilder').is(":checked") || $('#checkTeacher').is(":checked") || $('#checkFarmar').is(":checked") || $('#checkBankManager').is(":checked") || $('#checkPharmacist').is(":checked") || $('#checkMR').is(":checked") || $('#checkInsuranceAdvisor').is(":checked") || $('#checkOther').is(":checked")) {
			if ($('#checkDoctor').is(":checked")) 
				console.log('your message');
			else
				$(".Doctor").hide();
								
			if ($('#checkEngineer').is(":checked")) 
				console.log('your message');
			else
				$(".Engineer").hide();
			
			if ($('#checkCA').is(":checked")) 
				console.log('your message');	
			else
				$(".CA").hide();
				
			if ($('#checkBusinessman').is(":checked")) 
				console.log('your message');	
			else
				$(".Businessman").hide();

			if ($('#checkEnterpreneur').is(":checked")) 
				console.log('your message');	
			else
				$(".Enterpreneur").hide();
				
			if ($('#checkBuilder').is(":checked")) 
				console.log('your message');	
			else
				$(".Builder").hide();

			if ($('#checkTeacher').is(":checked")) 
				console.log('your message');	
			else
				$(".Teacher").hide();
				
			if ($('#checkFarmar').is(":checked")) 
				console.log('your message');	
			else
				$(".Farmar").hide();

			if ($('#checkBankManager').is(":checked")) 
				console.log('your message');	
			else
				$(".BankManager").hide();

			if ($('#checkPharmacist').is(":checked")) 
				console.log('your message');	
			else
				$(".Pharmacist").hide();

			if ($('#checkMR').is(":checked")) 
				console.log('your message');	
			else
				$(".MR").hide();

			if ($('#checkInsuranceAdvisor').is(":checked")) 
				console.log('your message');	
			else
				$(".InsuranceAdvisor").hide();	
				
			if ($('#checkOther').is(":checked")) 
				console.log('your message');	
			else
				$(".Other").hide();	
		} else {
			console.log('all occupation false');
		}
		
	});
});
