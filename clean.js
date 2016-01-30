var elements = {
  "right_panel": "#colonneDroite",
  "translate_toolbar": ".reseaux_sociaux_toolbar",
  "menu": "#menu",
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

/*var column = document.getElementById("colonne");
var content = document.getElementsByClassName("fiche");

column.style.removeProperty('width');
content[0].style.removeProperty('width');*/
