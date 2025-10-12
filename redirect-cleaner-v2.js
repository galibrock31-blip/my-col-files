(function() {
  try {
    if (window.location.href.includes("amp=1")) return;
    if (window.top !== window.self) return;

    const targets = ["%3D%3D", "%3D", "?m=1", "&m=1"];
    let url = window.location.toString();
    let cleanUrl = url;

    targets.forEach(param => {
      const index = cleanUrl.indexOf(param);
      if (index > -1) {
        cleanUrl = cleanUrl.substring(0, index);
      }
    });

    if (cleanUrl !== url) {
      window.history.replaceState({}, document.title, cleanUrl);
      console.info("✅ Cleaned URL:", cleanUrl);
    }
  } catch (e) {
    console.error("❌ Redirect cleaner error:", e);
  }
})();