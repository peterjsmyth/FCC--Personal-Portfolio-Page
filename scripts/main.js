$(document).ready(function() {

  // Nav menu display/hide
  $("#nav-menu p").on('click', () => {
    let navLinkDisplay = $("#nav-links").css("display")
    if (navLinkDisplay === 'none') {
      $("#nav-links").slideDown(1000, 'linear').css("display", "flex");
      // $("#nav-links").animate({display: flex}, 1500);
    } else {
      $("#nav-links").slideUp(1000, 'linear').css("display", "none");
    };
  });


});
