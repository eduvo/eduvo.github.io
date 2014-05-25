$(function() {
  $(".tags").hide();
  $(".tagbtn").on("click", function(e) {
    e.preventDefault();
    $(".tags").hide();
    $(".tagbtn").removeClass("active");
    $(this).addClass("active");
    $("#"+$(this).data("tag")+"-ref").show();
  });

});
