$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var weather = $('select(name=weather):checked').val();
    var gender = $('select(name=gender):checked').val();
    var children = $('select(name=children):checked').val();
    var married = $('select (name=married):checked').val();
    var animal = $('select(name=animal):checked').val();

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
