
  $("#addButton").click(function(){
    $("#Meeting").append(function(){
      newAttendee = $("#newAttendee").val()
      html = `<label class="btn btn-secondary"><input type="radio" name="options" id="${newAttendee}" autocomplete="off"> ${newAttendee}: 00:00</label>`
      $("#newAttendee").val("")
      return html
    })
  });
