
function publishSite(siteId) {
  //if(showHelpLinks(siteId)) {
/*
    var reqUrl = '/direct/site/'+siteId+'.json';
    var resp = $.ajax({
      type: 'GET',
      url: reqUrl,
      async: false
    }).responseText;

    resp = JSON.parse(resp);
*/
    var reqUrl = '/direct/batch?_refs=/direct/site/'+siteId+'/edit&_method=PUT';
    var resp = $.ajax({
      type: 'POST',
      data: 'published=true',
      url: reqUrl,
      success: function() { location.reload(); }
    }).responseText;


  /* } else {
    alert("Sorry, I was not able to publish your site!");
  } */
}

