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
    // alert(itemsForm[i].id); // TODO : Remove this
    chrome.storage.sync.get(itemsForm[i].id, checkItem);
  }
})();
