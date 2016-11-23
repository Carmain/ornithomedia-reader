//Localize by replacing __MSG_***__ meta tags
(function localizeHtmlPage()
{
  var htmlElement = document.getElementsByTagName('html');
  var replaceTags = function(match, tagName) {
    return tagName ? chrome.i18n.getMessage(tagName) : '';
  };

  for (var j = 0; j < htmlElement.length; j++) {
    var htmlItem = htmlElement[j];
    var htmlToString = htmlItem.innerHTML.toString();
    var htmlUpdated = htmlToString.replace(/__MSG_(\w+)__/g, replaceTags);

    if (htmlUpdated != htmlToString) {
      htmlItem.innerHTML = htmlUpdated;
    }
  }
})();

(function init() {
  var itemsForm = document.querySelectorAll('.config');
  var form = document.getElementById('configuration-form');

  form.onsubmit = function() {
    var config = {};

    for(var i = 0; i < itemsForm.length; i++) {
      config[itemsForm[i].id] = itemsForm[i].checked;
    }

    chrome.tabs.query({url: 'http://www.ornithomedia.com/*'}, function(tabs){
      tabs.forEach(function(tab){
        chrome.tabs.reload(tab.id);
      });
   });

    chrome.storage.sync.set(config);
  };


  function checkItem(data) {
    var key = Object.keys(data)[0];
    document.getElementById(key).checked = data[key];
  }

  for(var i = 0; i < itemsForm.length; i++) {
    chrome.storage.sync.get(itemsForm[i].id, checkItem);
  }
})();
