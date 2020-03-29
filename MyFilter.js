$(document).ready(function(){
	$(".custom-control-input").click(function(){
		$(".all").show();
		var gotra;
		if (!$('#checkKashayp').is(":checked") && !$('#checkKhalap').is(":checked") && !$('#checkMandav').is(":checked")
			&& !$('#checkGahilam').is(":checked") && !$('#checkGautam').is(":checked") && !$('#checkLokaksha').is(":checked")) {
			gotra = true;
		} else {
			if (!$('#checkKashayp').is(":checked")) 
				$(".Kashayp").fadeOut(1000);
			
			if (!$('#checkKhalap').is(":checked")) 
				$(".Khalap").fadeOut(1000);
			
			if (!$('#checkMandav').is(":checked")) 
				$(".Mandav").fadeOut(1000);
			
			if (!$('#checkGahilam').is(":checked")) 
				$(".Gahilam").fadeOut(1000);
			
			if (!$('#checkGautam').is(":checked")) 
				$(".Gautam").fadeOut(1000);
			
			if (!$('#checkLokaksha').is(":checked")) 
				$(".Lokaksha").fadeOut(1000);
		}
		
		if (!$('#checkPune').is(":checked") && !$('#checkMumbai').is(":checked") && !$('#chceckNagpur').is(":checked")
			&& !$('#checkNasik').is(":checked")) {
			gotra = true;
		} else {
			//pune
			if (!$('#checkPune').is(":checked")) 
				$(".Pune").fadeOut(1000);
								
			//Mumbai
			if (!$('#checkMumbai').is(":checked")) 
				$(".Mumbai").fadeOut(1000);
			
			//Nagpur
			if (!$('#checkNagpur').is(":checked")) 
				$(".Nagpur").fadeOut(1000);
			
			//Nasik
			if (!$('#checkNasik').is(":checked")) 
				$(".Nasik").fadeOut(1000);
			
		}
		
		if (!$('#checkDoctor').is(":checked") && !$('#checkEngineer').is(":checked") && !$('#checkCA').is(":checked")) {
			gotra = true;
		} else {
			//pune
			if (!$('#checkDoctor').is(":checked")) 
				$(".Doctor").fadeOut(1000);
								
			//Mumbai
			if (!$('#checkEngineer').is(":checked")) 
				$(".Engineer").fadeOut(1000);
			
			//Nagpur
			if (!$('#checkCA').is(":checked")) 
				$(".CA").fadeOut(1000);
		}
	});
});
