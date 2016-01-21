$(document).ready(function() {
  $("form#questions").submit(function(event) {
    $('#las-vegas').hide();
    $('#alaska').hide();
    $('#japan').hide();

    var genderFemale = $('#female:checked').val();
    var genderMale = $('#male:checked').val();
    var weatherHot = $('#hot:checked').val();
    var weatherCold = $('#cold:checked').val();
    var weatherBoth = $('#both:checked').val();
    var yesChildren = $('#childrenYes:checked').val();
    var noChildren = $('#childrenNo:checked').val();
    var yesMarried = $('#marriedYes:checked').val();
    var noMarried = $('#marriedNo:checked').val();
    var dogAnimal = $('#animalDog:checked').val();
    var catAnimal = $('#animalCat:checked').val();

    if (weatherBoth === 'both') {
      $('#japan').show();
    } else if (weatherHot === 'hot') {
      $('#las-vegas').show();
    } else if (weatherCold === 'cold') {
      $('#alaska').show();
    } else {
        alert('Please put in all your information, press OK to continue.');
      }

    event.preventDefault();
  })
});
