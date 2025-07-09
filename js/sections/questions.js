$(document).ready(function () {
  $(".listItems").hide();
  $(".listItems[data-btn='4']").show();

  $(".fxButtons button").click(function () {
    const tabIndex = $(this).data("tab");

    $(".fxButtons button").removeClass("active");
    $(this).addClass("active");

    $(".listItems").hide();
    $(`.listItems[data-btn='${tabIndex}']`).fadeIn(200);
  });

  $(document).on("click", ".itemQuestion", function () {
    const index = $(this).find(".fx-itemQuestion").data("index");

    $(this).toggleClass("active");
    $(`.questionContent[data-index=${index}]`, $(this).parent()).slideToggle(
      300
    );

    $(this)
      .siblings(".itemQuestion")
      .removeClass("active")
      .find(".questionContent")
      .slideUp(300);
  });
});
