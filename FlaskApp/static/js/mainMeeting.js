
  $("#addButton").click(function(){
    $("#Meeting").append(function(){
      newAttendee = $("#newAttendee").val()
      html = `<label class="btn btn-secondary"><input type="radio" name="options" id="${newAttendee}" autocomplete="off"> ${newAttendee}: 00:00</label>`
      $("#newAttendee").val("")
      return html
    })
  });

$('#sw-rst').click(function(){
  $("form#meetingform :input").each(function(){
    var name_button = $(this).attr('id');
    $(this).prop('checked', false);
    $(this).val(0);
    name = name_button.replace('_button', '');
    $('#' + name + '_timer').html('00:00:00');
  })
})
