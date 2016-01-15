$(document).ready(function() {
  $("form#questions").submit(function(event) {

    var weather = $('select[name=weather]:checked').val();
    var gender = $('input[name=gender]:checked').val();
    var children = $('input[name=children]:checked').val();
    var married = $('input[name=]:married').val();
    var animal = $('input[name=animal]:checked').val();

    if (weather === 'hot') {
      $('#las-vegas').show();
    }
    else if (weather === 'cold') {
      $('#alaska').show();
    }
    else if (weather === 'both')
      $('#japan').show();
    event.preventDefault();
  })
});
