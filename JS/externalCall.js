      			function escapeRegExp(string){
			    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
			}

			function replaceAll(str, term, replacement) {
			  return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
			}

			function loadPageInfo(pageName, language) {
			  console.log("loadPageInfo invoked.");
			  var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
				    var csvdata = this.responseText;
				    var results = csvdata.split("\n");
				    $.each(results, function(index, element){
					    console.log("Property :" + element);
					    var values = element.split("=");
					    if(values[0] === undefined || values[0] == "") {

					    } else {						    
						document.getElementById(values[0]).innerHTML = values[1];
					    } 
				    });
			    }
			  };
			  xhttp.open("GET", "properties/"+ pageName +"_"+ language + ".properties?t="+ Math.random(), true);
			  xhttp.send();
			}
	
			function loadSiteInfo(pageName, language) {
			  console.log("loadSiteInfo invoked.");
			  var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
				    var csvdata = this.responseText;
				    var results = csvdata.split("\n");
				    $.each(results, function(index, element){
					    console.log("Property :" + element);
					    var values = element.split("=");
					    if(values[0] === undefined || values[0] == "") {
						    
					    } else {						    
					    	document.getElementById(values[0]).innerHTML = values[1];
					    } 
					    if(values[2] !== undefined && values[2] != "") {						    
					    	document.getElementById(values[0]).href=values[2]; 
					    }
					    
				    });
			    }
			  };
			  xhttp.open("GET", "properties/CommonInfo_" + language + ".properties?t="+ Math.random(), true);
			  xhttp.send();
			}

			function loadFilters(pageName, language) {
			  console.log("loadFilters invoked.");
			  var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
				    var csvdata = this.responseText;
				    var results = csvdata.split("\n");
				    $.each(results, function(index, element){
					    console.log("Filters :" + element);
					    var values = element.split("=");
					    if(values[0] === undefined || values[0] == "") {
						//skip
					    }
					    var keys = values[0].split(",");
					    if(keys[0] == "1") {						    
						document.getElementById("genderFilterText").innerHTML = keys[1];
						var filters = values[1].split(",");
						$.each(filters, function(count, dataValue){
							if(dataValue !== undefined || dataValue != "") {    
								document.getElementById("GenderFilter_"+count).innerHTML = dataValue;
							}
						});
					    } else if(keys[0] == "2") {						    
						document.getElementById("gotraFilterText").innerHTML = keys[1];
						var filters = values[1].split(",");
						$.each(filters, function(count, dataValue){
							if(dataValue !== undefined || dataValue != "") {    
								document.getElementById("GotraFilter_"+count).innerHTML = dataValue;
							}
						});
					    } else if(keys[0] == "3") {
						document.getElementById("cityFilterText").innerHTML = keys[1];
					    	var filters = values[1].split(",");
						$.each(filters, function(count, dataValue){
							if(dataValue !== undefined || dataValue != "") {    
								document.getElementById("cityFilter_"+count).innerHTML = dataValue;
							}
						});
					    } else if(keys[0] == "4") {	
						document.getElementById("occupationFilterText").innerHTML = keys[1];
					    	var filters = values[1].split(",");
						$.each(filters, function(count, dataValue){
							if(dataValue !== undefined || dataValue != "") {    
								document.getElementById("occupationFilter_"+count).innerHTML = dataValue;
							}
						});
					    } else if(keys[0] == "5") {	
						document.getElementById("birthFilterText").innerHTML = keys[1];
					    	var filters = values[1].split(",");
						$.each(filters, function(count, dataValue){
							if(dataValue !== undefined || dataValue != "") {    
								document.getElementById("BirthFilter_"+count).innerHTML = dataValue;
							}
						});
					    } else if(keys[0] == "6") {	
						document.getElementById("heightFilterText").innerHTML = keys[1];
					    	var filters = values[1].split(",");
						$.each(filters, function(count, dataValue){
							if(dataValue !== undefined || dataValue != "") {    
								document.getElementById("HeightFilter_"+count).innerHTML = dataValue;
							}
						});
					    } 
				    });
			    }
			  };
			  xhttp.open("GET", "CSV/filters_" + language + ".csv?t="+ Math.random(), false);
			  xhttp.send();
			}

