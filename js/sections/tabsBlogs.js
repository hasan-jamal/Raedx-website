$(document).ready(function () {
  $(".fxButtons button").on("click", function () {
    var tabId = $(this).data("tab");

    $(".fxButtons button").removeClass("active");
    $(this).addClass("active");

    $(".listBlogs:visible").fadeOut(200, function () {
      $(".listBlogs").hide();

      var $target = $('.listBlogs[data-btn="' + tabId + '"]');
      $target.css("display", "flex").hide().fadeIn(300);
    });
  });
});
