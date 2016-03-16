chrome.runtime.onInstalled.addListener(function() {
  alert("Initialize !");
  chrome.storage.sync.set({
    'right_panel': true,
    'translate_toolbar': true,
    'return': true,
    'menu': true,
    'breadcrumb': true,
    'article_type': true,
    'header': true,
    'social_toolbar': true,
    'comments': true,
    'donations': true,
    'first_footer': true,
    'second_footer': true
  }, function() {
    chrome.storage.sync.get("right_panel", function(data) {
      console("right_panel : " + data);
    });
  });
});
