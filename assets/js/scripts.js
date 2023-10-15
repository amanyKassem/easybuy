$(document).ready(function () {
  // toggle menu
  $("header .toggle").click(function () {
    $(".overlay").css({
      transform: "scaleX(1)",
    });

    $(".menu").addClass("ulDir");
  });

  $("header .overlay").click(function () {
    $(this).removeAttr("style");
    $(".menu").removeClass("ulDir");
  });

  // toggle fav
  $(".toggle-fav").on("click", function () {
    $(this).find(".fa-heart").toggleClass("fw-bold");
  });

  $(".minus").on("click", function () {
    let $input = $(this).parent().find("input");
    let count = parseFloat($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
  });
  $(".plus").on("click", function () {
    let $input = $(this).parent().find("input");
    $input.val(parseFloat($input.val()) + 1);
    $input.change();
  });

  function initiateAnimation() {
    AOS.init({
      delay: 500, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: "ease-out-back", // default easing for AOS animations
    });

    if ($(window).width() < 560) {
      AOS.init({
        once: true,
      });
    }
  }
  initiateAnimation();

  //scroll top
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
      scrollButton.fadeIn(1000);
    } else {
      scrollButton.fadeOut(1000);
    }
  });

  //click to scroll top
  scrollButton.click(function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
