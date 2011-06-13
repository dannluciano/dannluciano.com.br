function change_language(lang) {
  if (lang === null) {
    
  } else {
    I18n.locale = lang;
  }
  
  $("#title").html(I18n.t("title"));
  $("#subtitle").html(I18n.t("subtitle"));
  $("#about").html(I18n.t("about"));
  $("#blog").html(I18n.t("blog"));
  $("#contact").html(I18n.t("contact"));
}
change_language();

$("#en").click(function() {
  change_language("en");
});

$("#pt-br").click(function() {
  change_language("pt-br");
});

$.facebox.settings.closeImage = '/images/closelabel.png'
$.facebox.settings.loadingImage = '/images/loading.gif'

jQuery(document).ready(function($) {
  $('a[rel*=facebox]').facebox()
})