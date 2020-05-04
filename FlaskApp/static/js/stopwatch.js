// var start_button = '#Eyve_button'
// var time_slot = '#Eyve_timer'
//
// $(start_button).click(function(){
//   alert('start_button works')
//   timer($(start_button).val())
// })
//
// function timer(time){
//
//     if ($('input[name=options]:checked', '#meetingform').attr('id') == 'Eyve_button'){
//         setTimeout(function() {
//             time++;
//
//             var min = Math.floor(time/100/60);
//             var sec = Math.floor(time/100);
//             var mSec = time % 100;
//
//             if (min < 10) min = "0" + min;
//
//             if (sec >= 60) sec = sec % 60;
//
//             if (sec < 10) sec = "0" + sec;
//
//             if (mSec < 10) mSec = "0" + mSec;
//
//             display_time = min + ":" + sec + ":" + mSec
//             $('#Eyve_timer').html(display_time);
//             $('#Eyve_button').val(time)
//
//             timer(time);
//         }, 10);}
//     }
