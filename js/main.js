$(document).ready(function () {
    // Listen for drum pad button click
    $(".drum-pad").click(function (e) {
        // Change the display HTML to the value of the button clicked
        $("#display").html(e.target.id);
        // Play the child audio
        e.target.querySelector('audio').play();
    });
    // Listen for key presses
    $(document).keypress(function (e) {
        var audio = document.getElementById(e.originalEvent.key.toUpperCase());
        var button = audio && audio.parentNode;
        if (button) {
            $("#display").html(button.id);
            audio.play();
        }
    });
});
