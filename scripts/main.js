$(document).ready(function() {

  // Nav menu display/hide
  $("#nav-menu i").on('click', () => {
    console.log("click");
    let navLinkDisplay = $("#navbar").css("display")
    if (navLinkDisplay === 'none') {
      //$("#navbar").css("display", "flex");
      $("#navbar").slideDown(1000, 'linear').css("display", "flex");
      // $("#nav-links").animate({display: flex}, 1500);
    } else {
      $("#navbar").slideUp(1000, 'linear').css("display", "none");
    };
  });

  // Word Rotator
  let words = ["GIS Administrator", "Web Developer", "Spatial Analyst", "Lifelong Learner"];
  let element = $('#header-tagline h1.role');
  let currentword = -1;

  window.setInterval(function(){
    currentword++;
    if (currentword > words.length-1) currentword = 0;
    element.text(words[currentword]);
    // console.log(element.text() + 'Currentword: '+currentword);
  }, 4000);

});
