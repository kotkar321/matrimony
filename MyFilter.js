$(document).ready(function(){
	
	
	$("#header").load("Header");
	$("#filter").load("Filter");
	$("#footer").load("Footer");
	
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
		
		if ($('#checkPune').is(":checked") || $('#checkMumbai').is(":checked") || $('#chceckNagpur').is(":checked") || $('#checkNasik').is(":checked")) {
			//pune
			if ($('#checkPune').is(":checked")) 
				console.log('your message');
			else
				$(".Pune").hide();
								
			//Mumbai
			if ($('#checkMumbai').is(":checked")) 
				console.log('your message');
			else
				$(".Mumbai").hide();
			
			//Nagpur
			if ($('#checkNagpur').is(":checked")) 
				console.log('your message');
			else
				$(".Nagpur").hide();
			
			//Nasik
			if ($('#checkNasik').is(":checked"))
				console.log('your message');
			else			
				$(".Nasik").hide();
			
		} else {
			console.log('all City false');
		}
		
		if ($('#checkDoctor').is(":checked") || $('#checkEngineer').is(":checked") || $('#checkCA').is(":checked")) {
			//pune
			if ($('#checkDoctor').is(":checked")) 
				console.log('your message');
			else
				$(".Doctor").hide();
								
			//Mumbai
			if ($('#checkEngineer').is(":checked")) 
				console.log('your message');
			else
				$(".Engineer").hide();
			
			//Nagpur
			if ($('#checkCA').is(":checked")) 
				console.log('your message');	
			else
				$(".CA").hide();
		} else {
			console.log('all occupation false');
		}
		
	});
});
