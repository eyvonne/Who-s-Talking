
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

// generate the colors of the sections of chart
var dynamicColors = function() {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgb(" + r + "," + g + "," + b + ")";
         };
colors = []
// actually create the list
for (var i in window.Users){
  colors.push(dynamicColors())
}

// instanciate the chart
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: window.Users, // set the labels as the users
        datasets: [{
            label: 'time spoken',
            data: Array(window.Users.length).fill(1),
            backgroundColor: colors
        }]
    }
});


// two functions coppied from docs
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}


$('#meetingform').change(function(){
  var times = []
  $("form#meetingform :input").each(function(){
    times.push($(this).val())
  })
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update()

})
