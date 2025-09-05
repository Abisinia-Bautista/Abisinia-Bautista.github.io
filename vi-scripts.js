var iframe = document.getElementById('embedvideo');
var player = $f(iframe);
var playButton = document.getElementById("closevid");
playButton.addEventListener("click", function() {
    player.api("play");
});

function StopEmbedVideo() {
    var $frame = $('iframe#embedvideo');

    // saves the current iframe source
    var vidsrc = $frame.attr('src');

    // sets the source to nothing, stopping the video
    $frame.attr('src', '');

    // sets it back to the correct link so that it reloads immediately on the next window open
    $frame.attr('src', vidsrc);

};

$(document).ready(function() {
    $('.modal').click(function() {
        StopEmbedVideo();
    });
});
