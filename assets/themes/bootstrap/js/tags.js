$(function() {
  $(".tags").hide();
  $(".tagbtn").on("click", function(e) {
    $(".tags").hide();
    $(".tagbtn").removeClass("active");
    $(this).addClass("active");
    $("#"+$(this).data("tag")+"-ref").show();
  });
  if (window.location.hash) {
    var selected = window.location.hash.substr(1,window.location.hash.indexOf('-')-1);
    $(".tagbtn[data-tag="+selected+"]").click();
  }
});
