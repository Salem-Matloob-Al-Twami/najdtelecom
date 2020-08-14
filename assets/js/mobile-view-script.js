jQuery(document).ready(function () {
  $("#toggle").click(function () {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
    return false;
  });

  // loader
  setTimeout(function () {
    $(".loader").fadeOut();
  }, 1000);

  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null,
    resetAnimation: true,
  });
  wow.init();

  // scroll-Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".scrolltotop").fadeIn();
    } else {
      $(".scrolltotop").fadeOut();
    }
  });

  $(".scrolltotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});

function copyToMobileClipboard(element) {
  console.info("selecte:", $(element).val());
  var $_temp = $("<input>");
  $("body").append($_temp);
  $_temp.val($(element).val()).select();
  document.execCommand("copy");
  $_temp.remove();
}

var $_br = "";

$.getScript("./assets/js/data.js", function () {
  var $_branchData = data;
  $_branchData.forEach((elements) => {
    applyMobileView(elements);
  });
});

function applyMobileView(elements) {
  var $_header =
    createMobileHeader("col-sm-6 col-md-6 col-lg-3 col-xl-3 kCity") +
    createMobileBodyHeader(
      elements.city.valueAr,
      elements.city.valueDelimiter,
      elements.city.valueEn
    ) +
    closeMobileBodyHeader() +
    closeMobileHeader();
  var $_body = kBodyMobileView(elements.elements[1]);
  document.getElementById("kMobileMainContainer").innerHTML +=
    $_br + $_header + $_body;
  $_br = '<div class="clear-text"></div>';
}

function kBodyMobileView(elements) {
  var $_body = "";
  elements.body.forEach((body) => {
    $_body += createMobileBody(body[2], body[1], body[0], body[3]);
  });
  $_body += closeMobileHeader();

  return $_body;
}

function createMobileHeader(kCity = "") {
  var $_header = `<div class="row kMainRow ${kCity}">`;

  return $_header;
}

function closeMobileHeader() {
  var $_closeMobileHeader = "</div>";
  return $_closeMobileHeader;
}

function createMobileBodyHeader(valueAr, valueDelimiter, valueEn) {
  var $_header =
    '<div class="row kBody">' +
    "<ul>" +
    "<li>" +
    '<span class="name" dir="auto">' +
    valueAr +
    "</span> " +
    valueDelimiter +
    valueEn +
    "</li>" +
    "</ul>" +
    "</div>";
  return $_header;
}

function closeMobileBodyHeader() {
  var $_closeMobileBodyHeader = "</div>";
  return $_closeMobileBodyHeader;
}

function createMobileBody(number, street, center, location) {
  var $_body =
    '<div class="row kMobileMainContent">' +
    '<div class="col-1 kMobileLabel">' +
    '<span class="name" dir="auto">(' +
    number.valueEn +
    ')</span></div><div class="col-8 kMobileBody">' +
    '<div class="row kTableMobileBody">' +
    '<span class="name" dir="rtl">' +
    street.valueAr +
    center.valueAr +
    '</span></div><div class="row kTableMobileBody">' +
    '<span class="name" dir="auto">' +
    street.valueEn +
    center.valueEn +
    '</span></div></div><div class="col-3 kMobileButton">' +
    '<button type="button" value="' +
    location.valueAr +
    '"onclick="copyToMobileClipboard(this)" class="btn btn-primary kBtnCopy"> ' +
    "نسخ<br />" +
    location.valueEn +
    "</button>" +
    "</div>" +
    "</div>";
  return $_body;
}
