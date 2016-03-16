// All the items we want to hide
var items_to_delete = {
  "right_panel": "#colonneDroite",
  "translate_toolbar": ".reseaux_sociaux_toolbar",
  "menu": "#menu",
  "return": "#retour",
  "breadcrumb": "#ariane",
  "article_type": ".rubrique",
  "header": "#bandeau",
  "social_toolbar": "#reseaux_sociaux_toolbar_bas",
  "comments": "#commentaire",
  "donations": "#forums_don_toolbar",
  "first_footer": "#bas",
  "second_footer": "#piedpage"
};

// All the items we want to resize
var items_to_resize = {
  "column": "#colonne",
  "content": ".fiche"
};

var erase = function(data) {
  var key = Object.keys(data)[0];
  console.log(data, data[key]); // TODO : Remove this
  if(data[key]) {
    var html_element = document.querySelector(items_to_delete[key]);
    html_element.parentNode.removeChild(html_element);
  }
};

for (var key in items_to_delete) {
  chrome.storage.sync.get(key, erase);
}

for (var key in items_to_resize) {
  var html_element = document.querySelector(items_to_resize[key]);
  html_element.style.width = "100%";
  html_element.style.fontSize = "13px";
}
