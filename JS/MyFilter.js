$(document).ready(function(){
	$("#loadMoreFilterProfileButton").hide();
	$(".custom-checkbox").click(function(){
		$("#lastProfile").val("10000");
		$("#loadMoreFilterProfileButton").hide();
		document.getElementById("profiles").innerHTML = "";
	});
	
	$("#SearchFilterButton").click(function(){
		var filters = [];
		var gender = [];
		var gotra = [];
		var occupation = [];
		var city = [];
		var year = [];
		var height = [];
		$("#loadMoreFilterProfileButton").show();
		
		$("#SearchFilterButton").addClass("disabled");
		$("#SearchFilterButton").val("Searching...");
		
		$("#loadMoreFilterProfileButton").addClass("disabled");
		$("#loadMoreFilterProfileButton").val("Loading...");
		
		if ($('#GenderFilter0').is(":checked") || $('#GenderFilter1').is(":checked") || $('#GenderFilter2').is(":checked") || $('#GenderFilter3').is(":checked") || $('#GenderFilter4').is(":checked") || $('#GenderFilter5').is(":checked")) {
			if ($('#GenderFilter0').is(":checked")) {
				gender.push("0");
			}
			if ($('#GenderFilter1').is(":checked")) {
				gender.push("1");
			}
		} else {
			console.log('all gender false');
		}
		
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
		console.log(" " + gotra + " "  + gotra.length);
		console.log(" " + occupation + " "  + occupation.length);
		console.log(" " + city + " "  + city.length);
		console.log(" " + year + " "  + year.length);
		console.log(" " + height + " "  + height.length);
		filters.push(gender);
		filters.push(gotra);
		filters.push(occupation);
		filters.push(city);
		filters.push(year);
		filters.push(height);
		var lastProfileId = Number($("#lastProfile").val());
		var language = $("#language").val();
		var totalFilterProfile = Number($("#totalFilterProfile").val());
		searchProfiles(filters, lastProfileId, totalFilterProfile, language);
	});
	
	function searchProfiles(filters, profileId, total, language) {
		var genderArray = ["Groom","Bride"];
		var gotraArray = ["Kashayp","Khalap","Mandav","Gahilam","Gautam","Lokaksha"];
		var cityArray = ["Mumbai","Pune","Nasik","Nagpur","Aurangabad","Dhule","Jalgaon","Nandurbar","Surat","ForeignCountry","Other"];
		var occupationArray =["Engineer","Doctor","CA","Businessman","Enterpreneur","Builder","Teacher","Farmar","BankManager","Pharmacist","MR","InsuranceAdvisor","Other"];
		var genderArrayMr = ["वर","वधू"];
		var gotraArrayMr = ["काशैप","खलाप","मांडव","गहिलम","गौतम","लोकाक्ष"];
		var cityArrayMr = ["मुंबई","पुणे","नाशिक","नागपूर","औरंगाबाद","धुळे","जळगाव","नंदुरबार","सूरत","परराष्ट्र","इतर"];
	    	var occupationArrayMr = ["अभियंता","डॉक्टर","सीए","उद्योगपती","एंटरप्रेनर","बिल्डर","शिक्षक"," फरमार","बँकमॅनेजर","फार्मासिस्ट","एमआर","विमासल्लागार","इतर"];		
	    for (count = 0; count < total; count++) {
		profileId = profileId + 1;
		console.log("checking Profile ID: " + profileId);
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
			var profileData = this.responseText;
			//console.log("Profile :" + profileData);
			var profile = JSON.parse(profileData);
			var myStr = "<div class='col-md-4 GOTRA OCCUPATION CITY all'><div class='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'><div class='col p-4 d-flex flex-column position-static'><strong class='d-inline-block text-success'>TYPE</strong><h3 class='mb-0'>NAME</h3><div class='mb-1 text-muted'>BIRTHDATE</div><div class=''>Height : <b><i>HEIGHT</i></b> </div><div class=''>Gotra : <b><i>GOTRA</i></b> </div><div class=''>Occupation : <b><i>OCCUPATION</i></b></div><div class=''>Work City : <b><i>CITY </i></b></div><a href='URL' class='' id='linkInfo'> More Info... </a></div></div></div>";
			    
			var matched = isMatched(filters, profile);   
			if(matched === true) {
			    if(language == "mr") {
				myStr = replaceAll(myStr, 'Gotra', 'गोत्र');	    
				myStr = replaceAll(myStr, 'Occupation', 'व्यवसाय');	    
				myStr = replaceAll(myStr, 'Work City', 'कार्य शहर');	    
				myStr = replaceAll(myStr, 'Height', 'उंची');	    
			    }

			    if(language == "en") {
				myStr = replaceAll(myStr, 'TYPE', genderArray[profile.gender] + " [" + profile.id + "]");
				myStr = replaceAll(myStr, 'NAME', profile.firstName + " " + profile.lastName);	    
				myStr = replaceAll(myStr, 'BIRTHDATE', profile.birthDate.birthDay + "-" + profile.birthDate.birthMonth + "-" +profile.birthDate.birthYear + " " + profile.birthDate.birthTimeHr + ":"+ profile.birthDate.birthTimeMin);
				myStr = replaceAll(myStr, 'GOTRA', gotraArray[profile.gotra]);
				myStr = replaceAll(myStr, 'OCCUPATION', occupationArray[profile.occupation]);
				myStr = replaceAll(myStr, 'CITY', cityArray[profile.address.city]);
				myStr = replaceAll(myStr, 'HEIGHT', profile.height);
				myStr = replaceAll(myStr, 'URL', profile.url.bioData);
			    }
			    if(language == "mr") {
				myStr = replaceAll(myStr, 'TYPE', genderArrayMr[profile.gender] + " [" + profile.id + "]");
				myStr = replaceAll(myStr, 'NAME', profile.firstNameMr + " " + profile.lastNameMr);	    
				myStr = replaceAll(myStr, 'BIRTHDATE', profile.birthDate.birthDay + "-" + profile.birthDate.birthMonth + "-" +profile.birthDate.birthYear + " " + profile.birthDate.birthTimeHr + ":"+ profile.birthDate.birthTimeMin);
				myStr = replaceAll(myStr, 'GOTRA', gotraArrayMr[profile.gotra]);
				myStr = replaceAll(myStr, 'OCCUPATION', occupationArrayMr[profile.occupation]);
				myStr = replaceAll(myStr, 'CITY', cityArrayMr[profile.address.city]);
				myStr = replaceAll(myStr, 'HEIGHT', profile.height);
				myStr = replaceAll(myStr, 'URL', profile.url.bioData);
			    }
			    document.getElementById("profiles").innerHTML = document.getElementById("profiles").innerHTML + myStr;
			}
			else {
			    count--;
			}    
		    }
		    if (this.readyState == 4 && this.status != 200) {
			$("#loadMoreFilterProfileButton").hide();
			count = total;    
		    } 
		};
		//var gender = filters[0];
		//if(gender.includes("0") ) {
		//   xhttp.open("GET", "profiles/groom/" + profileId + ".json", true);
		//   xhttp.send();        
		//} else if(gender.includes("1") ) {
	 	//   xhttp.open("GET", "profiles/bride/" + profileId + ".json", true);	
		//   xhttp.send();        
		//}
		xhttp.open("GET", "profiles/groom/" + profileId + ".json", false);
		xhttp.send();
	    }
	    $("#lastProfile").val(profileId);
	    $("#SearchFilterButton").removeClass("disabled");
	    $("#loadMoreFilterProfileButton").removeClass("disabled");	
	    $("#loadMoreFilterProfileButton").val("Load More Filtered Profiles");
	    $("#SearchFilterButton").val("Search");
	}	
	
	function isMatched(filters, profile) {
		var gender = filters[0];
		var gotra = filters[1];
		var occupation = filters[2];
		var city = filters[3];
		var year = filters[4];
		var height = filters[5];
		
		var genderFlag = false;
		var gotraFlag = false;
		var occupationFlag = false;
		var cityFlag = false;
		var yearFlag = false;
		
		if(gender.length == 0 || gender.includes(profile.gender) ) {
			genderFlag = true;
		} 
		if(gotra.length == 0 || gotra.includes(profile.gotra) ) {
			gotraFlag = true;
		} 
		if(occupation.length == 0 || occupation.includes(profile.occupation) ) {
			occupationFlag = true;
		} 
		if(city.length == 0 || city.includes(profile.address.city) ) {
			cityFlag = true;
		} 
		if(year.length == 0 || year.includes(getYearCategory(profile.birthDate.birthYear))) {
			yearFlag = true;
		}
		//if(height.length == 0 || height.includes(profile.gotra) ) {
		//	flag = true;
		//}
		
		if(genderFlag && gotraFlag && occupationFlag && cityFlag && yearFlag) {
			return true;
		} else {
			return false;
		}
	}
		
	function getYearCategory(year) {
		var yearFilter0 = ["1980","1981","1982","1983","1984"];
		var yearFilter1 = ["1985","1986","1987","1988","1989"];
		var yearFilter2 = ["1990","1991","1992","1993","1994"];
		var yearFilter3 = ["1995","1996","1997","1998","1999"];
		var yearFilter4 = ["2000","2001","2002","2003","2004"];
		if(yearFilter0.includes(year)) {
			return "0";	
		} else if(yearFilter1.includes(year)) {
			return "1";	
		} else if(yearFilter2.includes(year)) {
			return "2";	
		} else if(yearFilter3.includes(year)) {
			return "3";	
		} else if(yearFilter4.includes(year)) {
			return "4";	
		}
	}
});
