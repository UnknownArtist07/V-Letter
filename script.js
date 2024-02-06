// When the document is fully loaded
$(document).ready(function(){
    // Display the modal when the document is loaded
    $("#myModal").css("display", "block");

    // When the user clicks on <span> (x), close the modal
    $(".close").click(function(){
        $("#myModal").css("display", "none");
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        if (event.target == $("#myModal")[0]) {
            $("#myModal").css("display", "none");
        }
    });

    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top:"-90px"
        }, "slow");
    }).mouseleave(function(){
        $(".card").stop().animate({
            top:0
        }, "slow");
    });

    // Function to play the love song
    function playLoveSong() {
        var loveSong = document.getElementById("loveSong");
        // Check if the audio is paused or has ended before playing
        if (loveSong.paused || loveSong.ended) {
            // Play the love song
            loveSong.play();
        }
    }

    // Add event listener for each letter animation
    $(".one, .two, .three, .four, .five").on("animationiteration", function() {
        // Play the love song when a letter animation occurs
        playLoveSong();
    });

    // Trigger the love song playback on user interaction (click event)
    $(".container").on("click", function() {
        playLoveSong();
    });
});
