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
