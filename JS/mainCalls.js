function loadHomePageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
}

function loadGroomPageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
   fetchProfiles(10000, 3, "male", language);
   //loadProfiles(pageName, language);
   //loadFilters(pageName, language);
}

function loadBridePageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
   fetchProfiles(10000, 3, "female", language);
   //loadProfiles(pageName, language);
   //loadFilters(pageName, language);
}

function loadSamajPageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
}

function loadContactPageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
}

function loadSearchPageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
   loadFilters(pageName, language);
}
}

function loadHelpPageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
}

