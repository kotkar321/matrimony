$(document).ready(function(){
	$("#SearchFilterButton").click(function(){
		var gotra = [];
		var occupation = [];
		var city = [];
		var year = [];
		var height = [];
		
		if ($('#GotraFilter0').is(":checked") || $('#GotraFilter1').is(":checked") || $('#GotraFilter2').is(":checked") || $('#GotraFilter3').is(":checked") || $('#GotraFilter4').is(":checked") || $('#GotraFilter5').is(":checked")) {
			if ($('#GotraFilter0').is(":checked")) {
				gotra.push("0");
			}
			if ($('#GotraFilter1').is(":checked")) {
				gotra.push("1");
			}
			if ($('#GotraFilter2').is(":checked")) {
				gotra.push("2");
			}
			if ($('#GotraFilter3').is(":checked")) {
				gotra.push("3");
			}
			if ($('#GotraFilter4').is(":checked")) {
				gotra.push("4");
			}
			if ($('#GotraFilter5').is(":checked")) {
				gotra.push("5");
			}
		} else {
			console.log('all gotra false');
		}
		
		if ($('#cityFilter0').is(":checked") || $('#cityFilter1').is(":checked") || $('#cityFilter2').is(":checked") || $('#cityFilter3').is(":checked") || $('#cityFilter4').is(":checked") || $('#cityFilter5').is(":checked") || $('#cityFilter6').is(":checked") || $('#cityFilter7').is(":checked") || $('#cityFilter8').is(":checked") || $('#cityFilter9').is(":checked") || $('#cityFilter10').is(":checked")) {
			if ($('#cityFilter0').is(":checked")) {
				city.push("0");
			}			
			if ($('#cityFilter1').is(":checked")) {
				city.push("1");
			}
			if ($('#cityFilter2').is(":checked")) {
				city.push("2");
			}
			if ($('#cityFilter3').is(":checked")) {
				city.push("3");
			}
			if ($('#cityFilter4').is(":checked")) {
				city.push("4");
			}
			if ($('#cityFilter5').is(":checked")) {
				city.push("5");
			}
			if ($('#cityFilter6').is(":checked")) {
				city.push("6");
			}
			if ($('#cityFilter7').is(":checked")) {
				city.push("7");
			}
			if ($('#cityFilter8').is(":checked")) {
				city.push("8");
			}
			if ($('#cityFilter9').is(":checked")) {
				city.push("9");
			}
			if ($('#cityFilter10').is(":checked")) {
				city.push("10");
			}
		} else {
			console.log('all City false');
		}
		
		if ($('#occupationFilter0').is(":checked") || $('#occupationFilter1').is(":checked") || $('#occupationFilter2').is(":checked") || $('#occupationFilter3').is(":checked") || $('#occupationFilter4').is(":checked") || $('#occupationFilter5').is(":checked") || $('#occupationFilter6').is(":checked") || $('#occupationFilter7').is(":checked") || $('#occupationFilter8').is(":checked") || $('#occupationFilter9').is(":checked") || $('#occupationFilter10').is(":checked") || $('#occupationFilter11').is(":checked") || $('#occupationFilter12').is(":checked")) {
			if ($('#occupationFilter0').is(":checked")) {
				occupation.push("0");
			}
			if ($('#occupationFilter1').is(":checked")) {
				occupation.push("1");
			}
			if ($('#occupationFilter2').is(":checked")) {
				occupation.push("2");	
			}
			if ($('#occupationFilter3').is(":checked")) {
				occupation.push("3");	
			}
			if ($('#occupationFilter4').is(":checked")) {
				occupation.push("4");	
			}
			if ($('#occupationFilter5').is(":checked")) {
				occupation.push("5");	
			}
			if ($('#occupationFilter6').is(":checked")) {
				occupation.push("6");	
			}
			if ($('#occupationFilter7').is(":checked")) {
				occupation.push("7");	
			}
			if ($('#occupationFilter8').is(":checked")) {
				occupation.push("8");	
			}
			if ($('#occupationFilter9').is(":checked")) {
				occupation.push("9");	
			}
			if ($('#occupationFilter10').is(":checked")) {
				occupation.push("10");	
			}
			if ($('#occupationFilter11').is(":checked")) {
				occupation.push("11");	
			}
			if ($('#occupationFilter12').is(":checked")) {
				occupation.push("12");	
			}
		} else {
			console.log('all occupation false');
		}
		
		if ($('#BirthFilter0').is(":checked") || $('#BirthFilter1').is(":checked") || $('#BirthFilter2').is(":checked") || $('#BirthFilter3').is(":checked") || $('#BirthFilter4').is(":checked")) {
			if ($('#BirthFilter0').is(":checked")) {
				year.push("0");
			}
			if ($('#BirthFilter1').is(":checked")) {
				year.push("1");
			}
			if ($('#BirthFilter2').is(":checked")) {
				year.push("2");
			}
			if ($('#BirthFilter3').is(":checked")) {
				year.push("3");
			}
			if ($('#BirthFilter4').is(":checked")) {
				year.push("4");
			}
		} else {
			console.log('all year false');
		}
		
		if ($('#HeightFilter0').is(":checked") || $('#HeightFilter1').is(":checked") || $('#HeightFilter2').is(":checked") || $('#HeightFilter3').is(":checked") || $('#HeightFilter4').is(":checked") || $('#HeightFilter5').is(":checked")) {
			if ($('#HeightFilter0').is(":checked")) {
				height.push("0");
			}
			if ($('#HeightFilter1').is(":checked")) {
				height.push("1");
			}
			if ($('#HeightFilter2').is(":checked")) {
				height.push("2");
			}
			if ($('#HeightFilter3').is(":checked")) {
				height.push("3");
			}
			if ($('#HeightFilter4').is(":checked")) {
				height.push("4");
			}
			if ($('#HeightFilter5').is(":checked")) {
				height.push("5");
			}
		} else {
			console.log('all height false');
		}
		
	});
});
