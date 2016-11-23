chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({
    'right_panel': true,
    'nav_bar': false,
    'translate_toolbar': true,
    'return': true,
    'menu': true,
    'breadcrumb': true,
    'article_type': true,
    'header': false,
    'social_toolbar': true,
    'comments': true,
    'donations': true,
    'first_footer': true,
    'second_footer': true
  });
});
