var counter = 0

$('document').ready(function() {
  $('#counter').html(`<h1>${counter}</h1>`)
    $('#minus-button').hide()

  $('#plus-button').on('click', function() {
    counter += 1
    $('#minus-button').show()
    $('#counter').html(`<h1>${counter}</h1>`)
  })

  $('#minus-button').on('click', function() {
    if(counter > 0) {
      counter -= 1
      if(counter == 0) {
        $('#minus-button').hide()
      }
    }
    $('#counter').html(`<h1>${counter}</h1>`)
  })
})
