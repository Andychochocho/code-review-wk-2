$(document).ready(function() {
  $("form#questions").submit(function(event) {

    var weatherHot = $('#hot:checked').val();
    var weatherCold = $('#cold:checked').val();
    var weatherBoth = $('#both:checked').val();

    if (weatherHot === 'hot') {
      $('#las-vegas').show();
    }
    else if (weatherCold === 'cold') {
      $('#alaska').show();
    }
    else if (weatherBoth === 'both')
      $('#japan').show();
      else {
        prompt('Please put in all your information, press OK to continue.');
      }
    event.preventDefault();
  })
});
