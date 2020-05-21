      			function escapeRegExp(string){
			    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
			}

			function replaceAll(str, term, replacement) {
			  return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
			}
	
			function loadSiteInfo(fileName1, fileName2) {
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
			  xhttp.open("GET", "PageInfo/" + fileName1 + ".properties", true);
			  xhttp.send();
			
			  loadProfiles(fileName2);
			}


                        function loadProfiles(fileName) {
			  var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
				    var csvdata = this.responseText;
				    var results = csvdata.split("\n");
				    var finalDataString = "";
				    $.each(results, function(index, element){
					    console.log("Profile :" + element);
					    var values = element.split(",");
					    if(values[1] === undefined || values[1] == 'Name') {
						    
					    }else {
						    var myStr = "<div class='col-md-4 GOTRA OCCUPATION CITY all'><div class='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'><div class='col p-4 d-flex flex-column position-static'><strong class='d-inline-block text-success'>TYPE</strong><h3 class='mb-0'>NAME</h3><div class='mb-1 text-muted'>BIRTHDATE</div><div class=''>Height : <b><i>HEIGHT</i></b> </div><div class=''>Gotra : <b><i>GOTRA</i></b> </div><div class=''>Occupation : <b><i>OCCUPATION</i></b></div><div class=''>Work City : <b><i>CITY </i></b></div><a href='URL' class='stretched-link'>Download Bio Data</a></div></div></div>";
						    myStr = replaceAll(myStr, 'TYPE', fileName);	    
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
				    //document.getElementById("demo").innerHTML = this.responseText;
				    document.getElementById("profiles").innerHTML = finalDataString;
			    }
			  };
			  xhttp.open("GET", "CSV/" + fileName + ".csv", true);
			  xhttp.send();
			}

