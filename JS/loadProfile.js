function fetchProfiles(profileId, total, pageName, language) {
    for (count = 0; count < total; count++) {
        profileId = profileId + 1;
        console.log("fetching Profile ID: " + profileId);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var profileData = this.responseText;
                console.log("Profile :" + profile);
                var profile = JSON.parse(profileData);
                var myStr = "<div class='col-md-4 GOTRA OCCUPATION CITY all'><div class='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'><div class='col p-4 d-flex flex-column position-static'><strong class='d-inline-block text-success'>TYPE</strong><h3 class='mb-0'>NAME</h3><div class='mb-1 text-muted'>BIRTHDATE</div><div class=''>Height : <b><i>HEIGHT</i></b> </div><div class=''>Gotra : <b><i>GOTRA</i></b> </div><div class=''>Occupation : <b><i>OCCUPATION</i></b></div><div class=''>Work City : <b><i>CITY </i></b></div><a href='URL' class='' id='linkInfo'> More Info... </a></div></div></div>";

                if(pageName == profile.gender) {
                    if(language == "mr") {
                        myStr = replaceAll(myStr, 'Gotra', 'गोत्र');	    
                        myStr = replaceAll(myStr, 'Occupation', 'व्यवसाय');	    
                        myStr = replaceAll(myStr, 'Work City', 'कार्य शहर');	    
                        myStr = replaceAll(myStr, 'Height', 'उंची');	    
                    }

                    if(profile.gender == "male" && language == "en") {
                        myStr = replaceAll(myStr, 'TYPE', "Groom" + " [" + profile.id + "]");
                    }else if(profile.gender == "male" && language == "mr") {
                        myStr = replaceAll(myStr, 'TYPE', "वर" + " [" + profile.id + "]");							    
                    } else if(profile.gender == "female" && language == "en") {
                        myStr = replaceAll(myStr, 'TYPE', "Bride"+ " [" + profile.id + "]");							    
                    } else if(profile.gender == "female" && language == "mr") {
                        myStr = replaceAll(myStr, 'TYPE', "वधू"+ " [" + profile.id + "]");							    
                    }

                    myStr = replaceAll(myStr, 'NAME', profile.firstName + " " + profile.lastName);	    
                    if(language == "mr") {
                        myStr = replaceAll(myStr, 'NAME', profile.firstNameMr + " " + profile.lastNameMr);	    
                    }
                    myStr = replaceAll(myStr, 'BIRTHDATE', profile.birthDate.birthDay + "-" + profile.birthDate.birthMonth + "-" +profile.birthDate.birthYear + " " + profile.birthDate.birthTimeHr + ":"+ profile.birthDate.birthTimeMin);
                    myStr = replaceAll(myStr, 'GOTRA', profile.gotra);
                    myStr = replaceAll(myStr, 'OCCUPATION', profile.occupation);
                    myStr = replaceAll(myStr, 'CITY', profile.address.district + " " + profile.address.city);
                    myStr = replaceAll(myStr, 'HEIGHT', profile.height);
                    myStr = replaceAll(myStr, 'URL', profile.url.bioData);
                    document.getElementById("profiles").innerHTML = document.getElementById("profiles").innerHTML + myStr;
                }
                else {
                    count--;
                } 
            } else if (this.readyState == 1 && this.status == 0) {
                $("#loadMoreProfileButton").hide();
                count = total;
            }
            
        };
        
        xhttp.open("GET", "profiles/groom/" + profileId + ".json", false);
        xhttp.send();        
    }
    $("#lastProfile").val(profileId);
}
