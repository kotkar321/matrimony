$(document).ready(function(){
	$(".custom-control-input").click(function(){
		$(".all").show();
		if ($('#GotraFilter0').is(":checked") || $('#GotraFilter1').is(":checked") || $('#GotraFilter2').is(":checked") || $('#GotraFilter3').is(":checked") || $('#GotraFilter4').is(":checked") || $('#GotraFilter5').is(":checked")) {
			if ($('#GotraFilter0').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("GotraFilter_0").text()).hide();
			}
			
			if ($('#GotraFilter1').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("GotraFilter_1").text()).hide();
			}
			
			if ($('#GotraFilter2').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("GotraFilter_2").text()).hide();
			}
			
			if ($('#GotraFilter3').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("GotraFilter_3").text()).hide();
			}
			
			if ($('#GotraFilter4').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("GotraFilter_4").text()).hide();
			}
			
			if ($('#GotraFilter5').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("GotraFilter_5").text()).hide();
			}
		} else {
			console.log('all gotra false');
		}
		
		if ($('#cityFilter0').is(":checked") || $('#cityFilter1').is(":checked") || $('#cityFilter2').is(":checked") || $('#cityFilter3').is(":checked") || $('#cityFilter4').is(":checked") || $('#cityFilter5').is(":checked") || $('#cityFilter6').is(":checked") || $('#cityFilter7').is(":checked") || $('#cityFilter8').is(":checked") || $('#cityFilter9').is(":checked") || $('#cityFilter10').is(":checked")) {
			if ($('#cityFilter0').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("cityFilter_0").text()).hide();
			}			
			
			if ($('#cityFilter1').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("cityFilter_1").text()).hide();
			}
			if ($('#cityFilter2').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("cityFilter_2").text()).hide();
			}
			
			if ($('#cityFilter3').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("cityFilter_3").text()).hide();
			}
			
			if ($('#cityFilter4').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("cityFilter_4").text()).hide();
			}
			
			if ($('#cityFilter5').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("cityFilter_5").text()).hide();
			}
			
			if ($('#cityFilter6').is(":checked")) {
				console.log('your message');
			} else {			
				$("."+$("cityFilter_6").text()).hide();
			}
			
			if ($('#cityFilter7').is(":checked")) {
				console.log('your message');
			} else {			
				$("."+$("cityFilter_7").text()).hide();
			}
			
			if ($('#cityFilter8').is(":checked")) {
				console.log('your message');
			} else {			
				$("."+$("cityFilter_8").text()).hide();
			}
			
			if ($('#cityFilter9').is(":checked")) {
				console.log('your message');
			} else {			
				$("."+$("cityFilter_9").text()).hide();
			}
			
			if ($('#cityFilter10').is(":checked")) {
				console.log('your message');
			} else {			
				$("."+$("cityFilter_10").text()).hide();
			}
			
		} else {
			console.log('all City false');
		}
		
		if ($('#occupationFilter0').is(":checked") || $('#occupationFilter1').is(":checked") || $('#occupationFilter2').is(":checked") || $('#occupationFilter3').is(":checked") || $('#occupationFilter4').is(":checked") || $('#occupationFilter5').is(":checked") || $('#occupationFilter6').is(":checked") || $('#occupationFilter7').is(":checked") || $('#occupationFilter8').is(":checked") || $('#occupationFilter9').is(":checked") || $('#occupationFilter10').is(":checked") || $('#occupationFilter11').is(":checked") || $('#occupationFilter12').is(":checked")) {
			if ($('#occupationFilter0').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("occupationFilter_0").text()).hide();
			}
			
			if ($('#occupationFilter1').is(":checked")) {
				console.log('your message');
			} else {
				$("."+$("occupationFilter_1").text()).hide();
			}
			
			if ($('#occupationFilter2').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_2").text()).hide();
			}
			
			if ($('#occupationFilter3').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_3").text()).hide();
			}
			
			if ($('#occupationFilter4').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_4").text()).hide();
			}
			
			if ($('#occupationFilter5').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_5").text()).hide();
			}
			
			if ($('#occupationFilter6').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_6").text()).hide();
			}
			
			if ($('#occupationFilter7').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_7").text()).hide();
			}
			
			if ($('#occupationFilter8').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_8").text()).hide();
			}
			
			if ($('#occupationFilter9').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_9").text()).hide();
			}
			
			if ($('#occupationFilter10').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_10").text()).hide();
			}
			
			if ($('#occupationFilter11').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_11").text()).hide();
			}
			
			if ($('#occupationFilter12').is(":checked")) {
				console.log('your message');	
			} else {
				$("."+$("occupationFilter_12").text()).hide();
			}
			
		} else {
			console.log('all occupation false');
		}
		
	});
});
