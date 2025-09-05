$(document).ready(function() {
  $('#closevid').on('click', function(ev) {
 
    $("#embedvideo")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });
});