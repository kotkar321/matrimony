function fetchProfiles(profileId, total, pageName, language) {
    var genderArray = ["Groom","Bride"];
    var gotraArray = ["Kashayp","Khalap","Mandav","Gahilam","Gautam","Lokaksha"];
    var cityArray = ["Mumbai","Pune","Nasik","Nagpur","Aurangabad","Dhule","Jalgaon","Nandurbar","Surat","ForeignCountry","Other"];
    var occupationArray =["Engineer","Doctor","CA","Businessman","Enterpreneur","Builder","Teacher","Farmar","BankManager","Pharmacist","MR","InsuranceAdvisor","Other"];
    var yearArray = ["Before 1985","1985 To 1990","1991 To 1995","1996 to 2000","After 2000"];
    var heightArray = ["5.0-"," 5.1 to 5.6"," 5.7 to 6.0"," 6.1 To 6.6"," 6.7 To 7.0"," 7.0+"];
    
    for (count = 0; count < total; count++) {
        profileId = profileId + 1;
        console.log("fetching Profile ID: " + profileId);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var profileData = this.responseText;
                console.log("Profile :" + profileData);
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
                    myStr = replaceAll(myStr, 'GOTRA', gotraArray[profile.gotra]);
                    myStr = replaceAll(myStr, 'OCCUPATION', occupationArray[profile.occupation]);
                    myStr = replaceAll(myStr, 'CITY', cityArray[profile.address.city]);
                    myStr = replaceAll(myStr, 'HEIGHT', profile.height);
                    myStr = replaceAll(myStr, 'URL', profile.url.bioData);
                    document.getElementById("profiles").innerHTML = document.getElementById("profiles").innerHTML + myStr;
                }
                else {
                    count--;
                } 
            }
            if (this.readyState == 4 && this.status != 200) {
                $("#loadMoreProfileButton").hide();
                count = total;    
            }
        };
        xhttp.open("GET", "profiles/groom/" + profileId + ".json", false);
        xhttp.send();        
    }
    $("#lastProfile").val(profileId);
}
