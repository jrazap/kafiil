// ===============================================
// NAVBAR TOGGLE
// ===============================================
$(document).ready(() => {
  $("#bars").on("click", () => {
    $(".xl-navbar").addClass("active");
  });

  $("#close-nav").on("click", () => {
    $(".xl-navbar").removeClass("active");
  });
});

// ===============================================
// CAROUSELS
// ===============================================
$("#hero-slider").flickity({
  cellAlign: "center",
});

// ===============================================
// ADDS-ON FORM LOGIC
// ===============================================
$(document).ready(() => {
  let selectAllBtn = $("#select-all");
  let items = $(".service-checkbox");

  $(selectAllBtn).click(function (e) {
    $(items).not(this).prop("checked", this.checked);
  });

  $("#adds-form").on("change", (e) => {
    let totalPrice = 0;
    let checkedItemsLength = $(".service-checkbox:checked").length;

    $(".service-checkbox:checked").each(function () {
      totalPrice += parseInt($(this).attr("data-price"));
    });

    $("#selectedServices").text(checkedItemsLength);
    $("#totalPrice").text(totalPrice + "$");

    if (checkedItemsLength == $(items).length) {
      $(selectAllBtn).prop("checked", true);
    } else {
      $(selectAllBtn).prop("checked", false);
    }
  });
});

// ===============================================
// TOGGLE LIKE
// ===============================================
$(document).ready(() => {
  $(".like").on("click", (e) => {
    $(e.target).toggleClass("liked");
  });
  $(".like img").on("click", (e) => {
    $(e.target).parent().toggleClass("liked");
  });
});

// ===============================================
// TOGGLE THEMES
// ===============================================
$(document).ready(() => {
  $("#theme-switch").on("change", () => {
    $("body").toggleClass("theme-dark");
  });
});
