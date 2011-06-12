I18n.defaultLocale = "pt-br";
I18n.locale = "pt-br";

I18n.translations = {};

I18n.translations.en = {
  title: "I am Dann Luciano",
  subtitle: "\"A lifelong student of the art of programming computers!\"",
  about: "About",
  blog: "Blog",
  contact: "Contact"
};

I18n.translations['pt-br'] = {
    title: "Eu sou Dann Luciano",
    subtitle: "\"Um eterno estudante da arte de programar computadores!\"",
    about: "Sobre",
    blog: "Blog",
    contact: "Contato"
};

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
