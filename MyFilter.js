$(document).ready(function(){
	$(".custom-control-input").click(function(){
		$(".all").fadeIn(3000);
		
		var gotra;
		if (!$('#checkKashayp').is(":checked") && !$('#checkKhalap').is(":checked") && !$('#checkMandav').is(":checked")
			&& !$('#checkGahilam').is(":checked") && !$('#checkGautam').is(":checked") && !$('#checkLokaksha').is(":checked")) {
			gotra = true;
		} else {
			if (!$('#checkKashayp').is(":checked")) 
				$(".Kashayp").fadeOut("slow");
			
			if (!$('#checkKhalap').is(":checked")) 
				$(".Khalap").fadeOut("slow");
			
			if (!$('#checkMandav').is(":checked")) 
				$(".Mandav").fadeOut("slow");
			
			if (!$('#checkGahilam').is(":checked")) 
				$(".Gahilam").fadeOut("slow");
			
			if (!$('#checkGautam').is(":checked")) 
				$(".Gautam").fadeOut("slow");
			
			if (!$('#checkLokaksha').is(":checked")) 
				$(".Lokaksha").fadeOut("slow");
		}
		
		if (!$('#checkPune').is(":checked") && !$('#checkMumbai').is(":checked") && !$('#chceckNagpur').is(":checked")
			&& !$('#checkNasik').is(":checked")) {
			gotra = true;
		} else {
			//pune
			if (!$('#checkPune').is(":checked")) 
				$(".Pune").fadeOut("slow");
								
			//Mumbai
			if (!$('#checkMumbai').is(":checked")) 
				$(".Mumbai").fadeOut("slow");
			
			//Nagpur
			if (!$('#checkNagpur').is(":checked")) 
				$(".Nagpur").fadeOut("slow");
			
			//Nasik
			if (!$('#checkNasik').is(":checked")) 
				$(".Nasik").fadeOut("slow");
			
		}
		
		if (!$('#checkDoctor').is(":checked") && !$('#checkEngineer').is(":checked") && !$('#checkCA').is(":checked")) {
			gotra = true;
		} else {
			//pune
			if (!$('#checkDoctor').is(":checked")) 
				$(".Doctor").fadeOut("slow");
								
			//Mumbai
			if (!$('#checkEngineer').is(":checked")) 
				$(".Engineer").fadeOut("slow");
			
			//Nagpur
			if (!$('#checkCA').is(":checked")) 
				$(".CA").fadeOut("slow");
		}
	});
});


	
			
