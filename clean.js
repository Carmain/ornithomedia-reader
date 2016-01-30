var elements = new Array();

// All the elements we want to remove
elements["right_panel"] = document.getElementById("colonneDroite");
//elements["translate_toolbar"] = document.getElementById("reseaux_sociaux_toolbar");
elements["menu"] = document.getElementById("menu");
elements["header"] = document.getElementById("bandeau");
elements["social_toolbar"] = document.getElementById("reseaux_sociaux_toolbar_bas");
elements["comments"] = document.getElementById("commentaire");
elements["donations"] = document.getElementById("forums_don_toolbar");
elements["fisrt_footer"] = document.getElementById("bas");
elements["second_footer"] = document.getElementById("piedpage");

for (var keys in elements) {
  console.log(elements[keys]);
  elements[keys].parentNode.removeChild(elements[keys]);
}
