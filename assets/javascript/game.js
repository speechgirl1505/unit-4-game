$(document).ready(function(){

    var numberToMatch;
    var wins = 0;
    var losses = 0;
    var counter = 0;

    reset();

    
    // function reset() {
    //     numberToMatch = Math.floor(Math.random() * 101) + 19;
    //     var crystal1 = Math.floor(Math.random() * 11) + 1;
    //     var crystal2 = Math.floor(Math.random() * 11) + 1;
    //     var crystal3 = Math.floor(Math.random() * 11) + 1;
    //     var crystal4 = Math.floor(Math.random() * 11) + 1;
    //     $("#crystal1").attr("data-value", crystal1);
    //     $("#crystal2").attr("data-value", crystal2);
    //     $("#crystal3").attr("data-value", crystal3);
    //     $("#crystal4").attr("data-value", crystal4);
    // }
    
    function reset() {
        numberToMatch = 0;
        numberToMatch = Math.floor(Math.random() * 101) + 19;
        $("#number-to-guess").text(numberToMatch);
        counter = 0;
        $("#current-score").text(counter);
        // userNumber = 0;
        var crystal1 = Math.floor(Math.random() * 11) + 1;
        var crystal2 = Math.floor(Math.random() * 11) + 1;
        var crystal3 = Math.floor(Math.random() * 11) + 1;
        var crystal4 = Math.floor(Math.random() * 11) + 1;
        $("#crystal1").attr("data-value", crystal1);
        $("#crystal2").attr("data-value", crystal2);
        $("#crystal3").attr("data-value", crystal3);
        $("#crystal4").attr("data-value", crystal4);
    };

    
    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-value"));
        console.log(crystalValue);
        
        crystalValue = parseInt(crystalValue);
        
        counter += crystalValue;
        $("#current-score").text(counter);
        
        // alert("New score: " + counter);
        
        if (counter === numberToMatch) {
            alert("You win!");
            wins++;
            $("#current-wins").text(wins);
            reset();
        }
        
        else if (counter > numberToMatch) {
            alert("You lose!!");
            losses++;
            $("#current-losses").text(losses);
            reset();
        }

    });






})