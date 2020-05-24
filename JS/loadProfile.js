function loadProfiles(pageName, language) {
    console.log("loadProfiles invoked.");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var profile = this.responseText;
            console.log("Profile :" + profile);
            var myStr = "<div class='col-md-4 GOTRA OCCUPATION CITY all'><div class='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'><div class='col p-4 d-flex flex-column position-static'><strong class='d-inline-block text-success'>TYPE</strong><h3 class='mb-0'>NAME</h3><div class='mb-1 text-muted'>BIRTHDATE</div><div class=''>Height : <b><i>HEIGHT</i></b> </div><div class=''>Gotra : <b><i>GOTRA</i></b> </div><div class=''>Occupation : <b><i>OCCUPATION</i></b></div><div class=''>Work City : <b><i>CITY </i></b></div><a href='URL' class='' id='linkInfo'> More Info... </a></div></div></div>";

            if(profile !== undefined) {
            }
            
            if(language == "mr") {
                myStr = replaceAll(myStr, 'Gotra', 'गोत्र');	    
                myStr = replaceAll(myStr, 'Occupation', 'व्यवसाय');	    
                myStr = replaceAll(myStr, 'Work City', 'कार्य शहर');	    
                myStr = replaceAll(myStr, 'Height', 'उंची');	    
            }
            
            if(pageName == "groom" && language == "en") {
                myStr = replaceAll(myStr, 'TYPE', "Groom");							    
            }else if(pageName == "groom" && language == "mr") {
                myStr = replaceAll(myStr, 'TYPE', "वर");							    
            } else if(pageName == "bride" && language == "en") {
                myStr = replaceAll(myStr, 'TYPE', "Bride");							    
            } else if(pageName == "bride" && language == "mr") {
                myStr = replaceAll(myStr, 'TYPE', "वधू");							    
            }
            
            myStr = replaceAll(myStr, 'NAME', profile.firstName + " " + profile.firstName);	    
            if(language == "mr") {
                myStr = replaceAll(myStr, 'NAME', profile.firstNameMr + " " + profile.firstNameMr);	    
            }
            myStr = replaceAll(myStr, 'BIRTHDATE', profile.birthDate);
            myStr = replaceAll(myStr, 'GOTRA', profile.gotra);
            myStr = replaceAll(myStr, 'OCCUPATION', profile.occupation);
            myStr = replaceAll(myStr, 'CITY', profile.city);
            myStr = replaceAll(myStr, 'HEIGHT', profile.height);
            myStr = replaceAll(myStr, 'URL', profile.url);
            document.getElementById("profiles/groom"+"10001").innerHTML = myStr;
        }
    };
    xhttp.open("GET", "CSV/" + pageName + "_"+ language + ".csv", false);
    xhttp.send();
}
