$(function(){
  $("#numAttendees").change(function(){
      $("#nameEntry").html(function(){
        html = ''
        for (let attendee = 0; attendee<$("#numAttendees").val(); attendee++){
          html = html.concat('<input class="form-control" type="text" placeholder="Enter Name">')
        }
        alert(html)
        return html
      })
  })
})


var enter_names = `{{% for i in numAttend %}}
  <input class="form-control" type="text" placeholder="Enter Name {i}">
{{% endfor %}}`