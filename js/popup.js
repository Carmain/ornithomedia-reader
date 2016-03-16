(function checkTheBoxes() {
  var itemsForm = document.querySelectorAll(".config");

  function checkItem(data) {
      console.log(data, data[key]); // TODO : Remove this
      var key = Object.keys(data)[0];
      document.getElementById(key).checked = data[key];
  }

  for(var i = 0; i < itemsForm.length; i++) {
    // alert(itemsForm[i].id); // TODO : Remove this
    chrome.storage.sync.get(itemsForm[i].id, checkItem);
  }
})();
