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

for (var keys in elements) {
  var html_element = document.querySelector(elements[keys]);
  console.log(html_element);
  html_element.parentNode.removeChild(html_element);
}

for (var keys in items_to_delete) {
  var html_element = document.querySelector(items_to_delete[keys]);
  html_element.parentNode.removeChild(html_element);
}

column.style.removeProperty('width');
content[0].style.removeProperty('width');*/
