(function() {
  try {
    var url = window.location.href;
    var urlObj = new URL(url);
    var params = urlObj.searchParams;

    var isMobileParam = params.has('m') && params.get('m') === '1';
    var isAmpParam = params.has('amp') && params.get('amp') === '1';

    if (isMobileParam && !isAmpParam) {
      params.delete('m');
      urlObj.search = params.toString();
      var cleanUrl = urlObj.toString();
      window.location.replace(cleanUrl);
    }
  } catch (e) {
    console.error("Redirect cleaner error:", e);
  }
})();