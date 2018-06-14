//Assign random numbers to each 4 crystals, call function to start over (1-12)
//Assign a random number to compare to (19-120)
var crystalOne = Math.floor(Math.random() * 11) + 1;
var crystalTwo = Math.floor(Math.random() * 11) + 1;
var crystalThree = Math.floor(Math.random() * 11) + 1;
var crystalFour = Math.floor(Math.random() * 11) + 1;
var crystals = [crystalOne, crystalTwo, crystalThree, crystalFour]
var yourScore = 0;
var randomNumber = Math.floor(Math.random() * 101) + 19;
var wins = 0;
var losses = 0;
var score = 0;



$(document).ready(function () {
    //When reset/restart a new random number should be shown along with new random numbers for the crystals. Clear slate under your score field.


    function reset() {
        randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#random-number").text(randomNumber);
        crystalOne = Math.floor(Math.random() * 11) + 1;
        crystalTwo = Math.floor(Math.random() * 11) + 1;
        crystalThree = Math.floor(Math.random() * 11) + 1;
        crystalFour = Math.floor(Math.random() * 11) + 1;
        yourScore = 0;
        $("#your-score").text(yourScore);


    };



    $("#random-number").text(randomNumber);



    //document and add to the user number

    // yourScore = Number(yourScore) + Number($(this).val());
    //Using onclick to use arithmatic to adding what the crystal is worth from random number to your score. Display
    //The player wins when they match the score to the random number produced. Then game starts over
    //The player loses if it goes above the random number choice 

    $("#crystal-1").on("click", function () {

        yourScore = crystalOne + yourScore;

        $("#your-score").text(yourScore);

        if (yourScore === randomNumber) {
            win();
        }
        else if (yourScore > randomNumber) {
            lose();
        }
    });



    $("#crystal-2").on("click", function () {

        yourScore = crystalTwo + yourScore;

        $("#your-score").html(yourScore);

        if (yourScore === randomNumber) {
            win();
        }
        else if (yourScore > randomNumber) {
            lose();
        }
    });




    $("#crystal-3").on("click", function () {

        yourScore = crystalThree + yourScore;

        $("#your-score").html(yourScore);

        if (yourScore === randomNumber) {
            win();
        }
        else if (yourScore > randomNumber) {
            lose();
        }
    });





    $("#crystal-4").on("click", function () {

        yourScore = crystalFour + yourScore;

        $("#your-score").html(yourScore);

        if (yourScore === randomNumber) {
            win();
        }
        else if (yourScore > randomNumber) {
            lose();
        }
    });




    //Score counter will show if they lost or won.


    function win() {
        alert("You won!")
        wins++;
        $(".wins").text("Wins: " + wins);
        reset();
    }
    function lose() {
        alert("You lost!")
        losses++;
        $(".losses").text("Losses: " + losses);
        reset();
    }

});







