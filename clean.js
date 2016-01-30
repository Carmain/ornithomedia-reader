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
  "fisrt_footer": "#bas",
  "second_footer": "#piedpage"
};

// All the items we want to resize
var items_to_resize = {
  "column": "#colonne",
  "content": ".fiche"
}

for (var keys in items_to_delete) {
  var html_element = document.querySelector(items_to_delete[keys]);
  html_element.parentNode.removeChild(html_element);
}

for (var keys in items_to_resize) {
  var html_element = document.querySelector(items_to_resize[keys]);
  html_element.style.width = "100%";
  html_element.style.fontSize = "13px";
}
