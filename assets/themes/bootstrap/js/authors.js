$(function() {
  $(".authors").hide();
  $(".authorsbtn").on("click", function(e) {
    $(".authors").hide();
    $(".authorsbtn").removeClass("active");
    $(this).addClass("active");
    $("#"+$(this).data("authors")+"-ref").show();
  });
  if (window.location.hash) {
    var selected = window.location.hash.substr(1,window.location.hash.indexOf('-')-1);
    $(".authorsbtn[data-authors="+selected+"]").click();
  }
});
