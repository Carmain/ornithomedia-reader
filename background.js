chrome.runtime.onInstalled.addListener(function() {
  alert("Initialize !");
  chrome.storage.sync.set({'value': 12}, function() {
    chrome.storage.sync.get("value", function(data) {
      alert("data : " + data);
    });
  });
});
