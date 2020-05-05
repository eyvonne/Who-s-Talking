
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

// start of making the chart work
var ctx = document.getElementById('talking_chart');

$('#meetingform').change(function(){
  var times = []
  $("form#meetingform :input").each(function(){
    times.push($(this).val())
  })

  var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: window.Users,
          datasets: [{
              label: '# of Votes',
              data: times,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
          }]
      }
  });

})
