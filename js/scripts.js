$(document).ready(function () {
  $(".basic-screen-wrp, .back-and-title-wrp").addClass("visible");
  //Инициализируем стайлер для селектов
  if ($(".js-formstyller-style").length > 0) {
    setTimeout(function () {
      $(".js-formstyller-style").css("visibility", "visible");
    }, 300);
    $(".js-formstyller-style").styler();
  }

  //Делаем маску для телефона
  if ($("input[type=tel]").length > 0) {
    $("input[type=tel]").inputmask("+7 (999) 999-99-99");
    $("input[type=tel]").inputmask({
      clearIncomplete: true,
    });
  }

  //Акктордеон с ответами на вопросы
  $(".questions-akkordeon__link").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings(".questions-akkordeon-info").slideToggle();
  });

  //Возврат на предыдущую страницу
  $(".js-go-back").click(function (e) {
    e.preventDefault();
    window.history.back();
  });

  //Жмем "продолжить" после гото как вставили флешку
  $(".js-wait-for-init-usb").click(function (e) {
    e.preventDefault();
    $(".modal").modal("hide");
    setTimeout(function () {
      $("#init-usb").modal("show");
    }, 300);
  });

  //Оплатить
  $(".js-pay").click(function (e) {
    e.preventDefault();
    $("#pay-method").modal("show");
  });

  //Оплатить через qr код
  $(".js-show-pay-qr-code").click(function (e) {
    e.preventDefault();
    $(".modal").modal("hide");
    setTimeout(function () {
      $("#qr-code-pay").modal("show");
    }, 300);
  });

  //Проверка платежа
  $(".js-check-my-pay").click(function (e) {
    e.preventDefault();
    $(".modal").modal("hide");
    setTimeout(function () {
      $("#check-my-pay").modal("show");
    }, 300);
  });

  //Распечатать чек
  $(".js-get-check").click(function (e) {
    e.preventDefault();
    $(".modal").modal("hide");
    setTimeout(function () {
      $("#printing-check").modal("show");
    }, 300);
  });

  //Оплатить при копировании документа
  $(".js-pay-copied").click(function (e) {
    e.preventDefault();
    $("#drop-document").modal("show");
  });

  //Проверка оборудования
  $(".js-next-to-copy-document").click(function (e) {
    e.preventDefault();
    $(".modal").modal("hide");
    setTimeout(function () {
      $("#checking-device").modal("show");
    }, 300);
  });

  //Слайдер на главной (баннер)
  if ($(".pages-slider").length > 0) {
    var $status = $(".pagin-info");
    var $slickElement = $(".pages-slider");

    $slickElement.on(
      "init reInit afterChange",
      function (event, slick, currentSlide, nextSlide) {
        $(this).css("visibility", "visible");
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + "  из  " + slick.slideCount);
      }
    );
    $slickElement.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 700,
      arrows: true,
      adaptiveHeight: false,
      dots: false,
      infinite: false,
      fade: false,
      prevArrow: $(".prev-page"),
      nextArrow: $(".next-page"),
    });
  }
});
