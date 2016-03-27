/* based on https://www.smashingmagazine.com/2010/05/make-your-own-bookmarklets-with-jquery/ */
(function(){

  // the minimum version of jQuery we want
  var v = "2.2.2";

  // check prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName("body")[0].appendChild(script);
  } else {
    initMyBookmarklet();
  }
  
  function initMyBookmarklet() {
    (window.myBookmarklet = function() {
      alert("Starting test!");
      $("p").hide();
    })();
  }

})();