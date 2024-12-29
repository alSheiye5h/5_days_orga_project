$(".header--nav-toggle").click(function () {
  $(".perspective").addClass("perspective--modalview");
  setTimeout(function () {
    $(".perspective").addClass("effect-rotate-left--animate");
  }, 25);
  $(".outer-nav, .outer-nav li, .outer-nav--return").addClass("is-vis");
});

$(".outer-nav--return, .outer-nav li").click(function () {
  $(".perspective").removeClass("effect-rotate-left--animate");
  setTimeout(function () {
    $(".perspective").removeClass("perspective--modalview");
  }, 400);
  $(".outer-nav, .outer-nav li, .outer-nav--return").removeClass("is-vis");
});
