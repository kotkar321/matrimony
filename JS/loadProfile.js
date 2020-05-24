function loadProfiles(pageName, language) {
    console.log("loadProfiles invoked.");
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var profile = this.responseText;
        var results = csvdata.split("\n");
        var finalDataString = "";
        var field1 = "";
        var field2 = "";
        var field3 = "";
        var field4 = "";

        $.each(results, function(index, profile){
          console.log("Profile :" + profile);
          var myStr = "<div class='col-md-4 GOTRA OCCUPATION CITY all'><div class='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'><div class='col p-4 d-flex flex-column position-static'><strong class='d-inline-block text-success'>TYPE</strong><h3 class='mb-0'>NAME</h3><div class='mb-1 text-muted'>BIRTHDATE</div><div class=''>Height : <b><i>HEIGHT</i></b> </div><div class=''>Gotra : <b><i>GOTRA</i></b> </div><div class=''>Occupation : <b><i>OCCUPATION</i></b></div><div class=''>Work City : <b><i>CITY </i></b></div><a href='URL' class='' id='linkInfo'> More Info... </a></div></div></div>";

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


            if(pageName == "groom" && language == "en") {
          myStr = replaceAll(myStr, 'TYPE', "Groom");							    
            }else if(pageName == "groom" && language == "mr") {
          myStr = replaceAll(myStr, 'TYPE', "वर");							    
            } else if(pageName == "bride" && language == "en") {
          myStr = replaceAll(myStr, 'TYPE', "Bride");							    
            } else if(pageName == "bride" && language == "mr") {
          myStr = replaceAll(myStr, 'TYPE', "वधू");							    
            }
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
        document.getElementById("profiles/groom"+"10001").innerHTML = finalDataString;
      }
  };
