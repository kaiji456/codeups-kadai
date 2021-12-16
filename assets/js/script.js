"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $(".pagetop");
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 300, "swing");
    return false;
  }); //ドロワーメニュー

  $(".hamburger__btn").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(this).toggleClass("active");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer").toggleClass("open");
    $("html").toggleClass("is-fixed");
  }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    var time = 400;
    var header = $("header").innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $("html,body").animate({
      scrollTop: targetY
    }, time, "swing");
    return false;
  }); // スライダー

  $(".slider-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true
  }); // トップへ戻る

  $(function () {
    var height = $(".info, .breadcrumbs, .js-start").offset().top;
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > height) {
        $(".pagetop-btn").fadeIn("slow");
      } else {
        $(".pagetop-btn").fadeOut("slow");
      }
    });
  }); // ヘッダー

  $(function () {
    var height = $(".info, .breadcrumbs, .js-start").offset().top;
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > height) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
    });
  });
}); // スワイパー

var swipeOption = {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
};
new Swiper(".slider1", swipeOption); //メイン

var slider2 = new Swiper(".slider2", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 8,
  //スライドの枚数と同じ値を指定
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); //サムネイル

var thumbs2 = new Swiper(".slider2-thumbnail", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true
}); //4系～
//メインとサムネイルを紐づける

slider2.controller.control = thumbs2;
thumbs2.controller.control = slider2; //サムネイル
// var slider2 = new Swiper('.slider2-thumbnail', {
//   slidesPerView: 3,
//   freeMode: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });
// //スライダー
// var slider2 = new Swiper('.slider2', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   thumbs: {
//     swiper: sliderThumbnail
//   }
// });