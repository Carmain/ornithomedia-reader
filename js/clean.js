// All the items we want to hide
var itemsToDelete = {
  "right_panel": "#colonneDroite",
  "nav_bar": "nav",
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
var itemsToResize = {
  "column": "#colonne",
  "content": ".fiche"
};

var erase = function(data) {
  var key = Object.keys(data)[0];
  if(data[key]) {
    var htmlElement = document.querySelector(itemsToDelete[key]);
    htmlElement.parentNode.removeChild(htmlElement);

    if(key === "right_panel") {
      for (var item in itemsToResize) {
        var itemToResize = document.querySelector(itemsToResize[item]);
        itemToResize.style.width = "100%";
        itemToResize.style.fontSize = "13px";
      }
    }
  }
};

for (var key in itemsToDelete) {
  chrome.storage.sync.get(key, erase);
}
