(function init() {
  var itemsForm = document.querySelectorAll(".config");
  var form = document.getElementById('configuration_form');

  form.onsubmit = function() {
    var config = {};

    for(var i = 0; i < itemsForm.length; i++) {
      config[itemsForm[i].id] = itemsForm[i].checked;
    }

    chrome.storage.sync.set(config);
  };


  function checkItem(data) {
    var key = Object.keys(data)[0];
    document.getElementById(key).checked = data[key];
  }

  for(var i = 0; i < itemsForm.length; i++) {
    chrome.storage.sync.get(itemsForm[i].id, checkItem);
  }

  //Localize by replacing __MSG_***__ meta tags
  (function localizeHtmlPage()
  {
    var objects = document.getElementsByTagName('html');
    for (var j = 0; j < objects.length; j++) {
      var obj = objects[j];

      var valStrH = obj.innerHTML.toString();
      var valNewH = valStrH.replace(/__MSG_(\w+)__/g, function(match, v1) {
        return v1 ? chrome.i18n.getMessage(v1) : "";
      });

      if (valNewH != valStrH) {
        obj.innerHTML = valNewH;
      }
    }
  })();
})();
