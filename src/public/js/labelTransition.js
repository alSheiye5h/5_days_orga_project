// labelTransition.js
$(document).ready(function () {
  $(".work-request--information input").focusout(function () {
    var textVal = $(this).val();

    if (textVal === "") {
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }

    window.scrollTo(0, 0);
  });
});
