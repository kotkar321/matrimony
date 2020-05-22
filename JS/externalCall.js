      			function escapeRegExp(string){
			    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
			}

			function replaceAll(str, term, replacement) {
			  return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
			}
	
			function loadSiteInfo(typeFile, langFile) {
			  var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
				    var csvdata = this.responseText;
				    var results = csvdata.split("\n");
				    $.each(results, function(index, element){
					    //console.log("Property :" + element);
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
			  xhttp.open("GET", "PageInfo/CommonInfo_" + langFile + ".properties?t="+ Math.random(), true);
			  xhttp.send();
			
			  loadProfiles(typeFile, langFile);
			}


                        function loadProfiles(typeFile, langFile) {
			  var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
				    var csvdata = this.responseText;
				    var results = csvdata.split("\n");
				    var finalDataString = "";
				    var field1 = "";
				    var field2 = "";
				    var field3 = "";
				    var field4 = "";
				    
				    $.each(results, function(index, element){
					    console.log("Profile :" + element);
					    var values = element.split(",");
					    var myStr = "<div class='col-md-4 GOTRA OCCUPATION CITY all'><div class='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'><div class='col p-4 d-flex flex-column position-static'><strong class='d-inline-block text-success'>TYPE</strong><h3 class='mb-0'>NAME</h3><div class='mb-1 text-muted'>BIRTHDATE</div><div class=''>Height : <b><i>HEIGHT</i></b> </div><div class=''>Gotra : <b><i>GOTRA</i></b> </div><div class=''>Occupation : <b><i>OCCUPATION</i></b></div><div class=''>Work City : <b><i>CITY </i></b></div><a href='URL' class='stretched-link'>Download Bio Data</a></div></div></div>";
					
					    if(values[1] === undefined) {
						    
					    } else if( values[0] == 'Id') {
					    	    field1 = values[3];
						    field2 = values[4];
						    field3 = values[5];
						    field4 = values[6];
					    } else {
						    myStr = replaceAll(myStr, 'Gotra', field1);	    
						    myStr = replaceAll(myStr, 'Occupation', field2);	    
						    myStr = replaceAll(myStr, 'Work City', field3);	    
						    myStr = replaceAll(myStr, 'Height', field4);	    
						    
						    myStr = replaceAll(myStr, 'TYPE', typeFile);	    
						    myStr = replaceAll(myStr, 'NAME', values[1]);	    
						    myStr = replaceAll(myStr, 'BIRTHDATE', values[2]);
						    myStr = replaceAll(myStr, 'GOTRA', values[3]);
						    myStr = replaceAll(myStr, 'OCCUPATION', values[4]);
						    myStr = replaceAll(myStr, 'CITY', values[5]);
						    myStr = replaceAll(myStr, 'HEIGHT', values[6]);
						    myStr = replaceAll(myStr, 'URL', values[7]);
						    finalDataString = finalDataString + myStr;
					    }
				    });
				    document.getElementById("profiles").innerHTML = finalDataString;
			    }
			  };
			  xhttp.open("GET", "CSV/" + typeFile + "_"+ langFile + ".csv", true);
			  xhttp.send();
				
			  loadFilters(typeFile, langFile);
			}

			function loadFilters(typeFile, langFile) {
			  var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
				    var csvdata = this.responseText;
				    var results = csvdata.split("\n");
				    $.each(results, function(index, element){
					    //console.log("Property :" + element);
					    var values = element.split("=");
					    if(values[0] === undefined || values[0] == "") {
						    
					    } else if(values[0] == "Gotra") {						    
						var filters = element.split(",");
					    	document.getElementById("GotraFilter_"+0).innerHTML = filters[0];
						document.getElementById("GotraFilter_"+1).innerHTML = filters[1];
						document.getElementById("GotraFilter_"+2).innerHTML = filters[2];
						document.getElementById("GotraFilter_"+3).innerHTML = filters[3];
						document.getElementById("GotraFilter_"+4).innerHTML = filters[4];
						document.getElementById("GotraFilter_"+5).innerHTML = filters[5];
						    
					    } else if(values[0] == "") {						    
					    	document.getElementById(values[0]).innerHTML = values[1];
					    } else if(values[0] == "") {						    
					    	document.getElementById(values[0]).innerHTML = values[1];
					    } 
				    });
			    }
			  };
			  xhttp.open("GET", "CSV/Filters_" + langFile + ".csv?t="+ Math.random(), true);
			  xhttp.send();
			}

