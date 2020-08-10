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

function copyToClipboard(element) {
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
    apply(elements);
  });
});

function apply(elements) {
  var $_header =
    createHeader("col-sm-6 col-md-6 col-lg-3 col-xl-3 kCity") +
    createBody(
      elements.city.valueAr,
      elements.city.valueDelimiter,
      elements.city.valueEn
    ) +
    closeBodyHeader() +
    closeHeader();
  var $_body = body(elements.elements);
  document.getElementById("mainContainer").innerHTML +=
    $_br + $_header + $_body;
  $_br = '<div class="clear-text"></div>';
}

function body(elements) {
  var $_body = "";
  $_body += createHeader();
  elements[0].header.forEach((header, idx) => {
    $_body += createBodyHeader(header);

    elements[1].body.forEach((body) => {
      if (idx === body.length - 1) {
        $_body += createCopyButton(
          body[idx].valueAr,
          body[idx].valueDelimiter,
          body[idx].valueEn
        );
      } else {
        $_body += createBody(
          body[idx].valueAr,
          body[idx].valueDelimiter,
          body[idx].valueEn
        );
      }
    });
    $_body += closeBodyHeader();
  });
  $_body += closeHeader();

  return $_body;
}

function createHeader(kCity = "") {
  var $_header = `<div class="row kMainRow ${kCity}">`;

  return $_header;
}

function closeHeader() {
  var $_closeHeader = "</div>";
  return $_closeHeader;
}

function createBodyHeader(header) {
  var $_header =
    '<div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">' +
    '<div class="row kHeading"><ul><li><span class="name" dir="auto">' +
    header.titleAr +
    "</span>" +
    header.titleDelimiter +
    header.titleEn +
    "</li></ul></div>";
  return $_header;
}

function closeBodyHeader() {
  var $_closeBodyHeader = "</div>";
  return $_closeBodyHeader;
}

function createBody(valueAr, valueDelimiter, valueEn) {
  var $_body =
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
  return $_body;
}

function createCopyButton(valueAr, valueDelimiter, valueEn) {
  var $_copyButton =
    '<div class="row kBody kBodyHasButton">' +
    '<button type="button" value="' +
    valueAr +
    '" class="btn btn-primary kBtnCopy" onclick="copyToClipboard(this)">' +
    valueEn +
    "</button> " +
    "</div>";

  return $_copyButton;
}
