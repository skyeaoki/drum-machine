// THIS IS THE VANILLA JAVASCRIPT VERSION OF MAIN.JS WRITTEN FOR FUN

// All drum pad buttons
const drumPadButtons = document.querySelectorAll('.drum-pad');
// Display div (that displays name of drum clip)
var display = document.getElementById('display');

// Add click listener to each drum pad button
drumPadButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        var button = e.target;
        var audio = e.target.querySelector('audio');

        // Change the display HTML to the value of the button clicked
        display.innerHTML = button.id;
        // Play the child audio
        audio.play();
    });
});

// Add keypress listener
document.addEventListener('keypress', function (e) {
    var audio = document.getElementById(e.key.toUpperCase());
    var button = audio && audio.parentNode;

    // If key pressed corresponds to a drum pad button
    if (button) {
        // Play element audio element
        audio.play();
        // Change the display HTML to the value of the button
        display.innerHTML = button.id;
    }
});