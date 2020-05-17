$(document).ready(function(){

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
