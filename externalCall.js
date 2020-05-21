      function escapeRegExp(string){
			    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
			}

			function replaceAll(str, term, replacement) {
			  return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
			}
	
			function loadProfiles(fileName) {
			  var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
				    var csvdata = this.responseText;
				    var results = csvdata.split("\n");
				    var finalDataString = "";
				    $.each(results, function(index, element){
					    console.log(element);
					    var values = element.split(",");
					    if(values[1] === undefined) {
						    
					    }else {
					    var myStr = "<div class='col-md-4 CITY GOTRA OCCUPATION all'><div class='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'><div class='col p-4 d-flex flex-column position-static'><strong class='d-inline-block mb-2 text-success'>TYPE</strong><h3 class='mb-0'>NAME</h3><div class='mb-1 text-muted'>BIRTHDATE</div><div class='mb-1'>Gotra : <b><i>GOTRA</i></b> </div><div class='mb-1'>Occupation : <b><i>OCCUPATION</i></b></div><div class='mb-1'>Work City : <b><i>CITY </i></b></div><a href='URL' class='stretched-link'>Download Bio Data</a></div></div></div>";
					    myStr = replaceAll(myStr, 'CITY', values[3]);
					    myStr = replaceAll(myStr, 'OCCUPATION', values[2]);
					    myStr = replaceAll(myStr, 'NAME', values[1]);	    
					    finalDataString = finalDataString + myStr;
					    }
				    });
				    //document.getElementById("demo").innerHTML = this.responseText;
				    document.getElementById("profiles").innerHTML = finalDataString;
			    }
			  };
			  xhttp.open("GET", fileName, true);
			  xhttp.send();
			}
