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
  let checkTheme = () => {
    let theme = sessionStorage.getItem("theme");
    if (theme == "dark") {
      $("body").addClass("theme-dark");
      window.sessionStorage.setItem("theme", "dark");
      $("#theme-switch").attr("checked", true);
    } else if (theme == null || theme == "light") {
      window.sessionStorage.setItem("theme", "light");
      $("#theme-switch").attr("checked", false);
    }
  };
  checkTheme();

  let changeTheme = () => {
    let theme = sessionStorage.getItem("theme");
    if (theme == "dark") {
      $("body").removeClass("theme-dark");
      window.sessionStorage.setItem("theme", "light");
    } else if (theme == "light") {
      $("body").addClass("theme-dark");
      window.sessionStorage.setItem("theme", "dark");
    }
  };

  $("#theme-switch").on("change", () => {
    changeTheme();
    console.log("Hi");
  });
});
