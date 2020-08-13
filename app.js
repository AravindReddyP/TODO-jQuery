// strike through functionality

$(document).ready(function () {
  $('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
  });
});

// deleting a todo
$(document).ready(function () {
  $('ul').on('click', 'span', function (event) {
    $(this)
      .parent()
      .fadeOut(100, function () {
        $(this).remove();
      });
    event.stopPropagation();
  });
});

// adding

$('input').keypress(function (event) {
  var task = $('input').val();
  if ((task == null || task == ' ') && event.which === 13) {
    alert('Please enter a Task!!');
  } else {
    if (event.which === 13) {
      var task = $('input').val();
      $('ul').append(
        "<li><span class='del'><i class='fas fa-trash'></i> </span>" +
          ' ' +
          task +
          ' </li>'
      );
      $('input').val(' ');
    }
  }
});

//toggle input
$('#add').click(function () {
  $('input').fadeToggle();
});
