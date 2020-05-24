function loadHomePageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
}

function loadGroomPageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);

   loadProfiles(pageName, language);
   loadFilters(pageName, language);
}

function loadBridePageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
   
   loadProfiles(pageName, language);
   loadFilters(pageName, language);
}

function loadSamajPageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
   fetchProfiles("10001", "2", pageName, language);
}

function loadContactPageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
}

function loadNewsPageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
}

function loadHelpPageDetails(pageName, language) {
   loadSiteInfo(pageName, language);
   loadPageInfo(pageName, language);
}

