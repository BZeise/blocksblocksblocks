// Blocks Blocks Blocks
// In this challenge you will test your knowledge of CSS and jQuery.
//
// Instructions
// In your index.html, create a button that makes a square box every time it is clicked.
// Add a rule in your stylesheet to make each of your boxes appear inline (i.e. they will appear next to each other).
// When a box is clicked on, change its color to black.
// Hard Mode
// When each box is first generated, give it a randomly assigned color.
//
// You can use the following code for your random functionality.
//
// function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }
// Pro Mode
// Add an 'x' in each box that allows the user to completely remove a box.

$(onReady);

function onReady() {
    console.log('loaded JS');

    //register click event
    $('#button').on('click', makeBox);
    $('#putBox').on('click', '.box', blackBox);  //second input is the thing it's targeting
    $('#putBox').on('click', '.xit', closeBox);
}

function randomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

function makeBox() {
    var $color = randomColor();
    var $box = $('<p>');
    $box.addClass('box');
    $box.css('background-color', $color);

    // create x, add class to x, put x in $box
    var $xit = $('<div>x</div>');
    $xit.addClass('xit');
    $box.append($xit);

    // append the completed box object into putBox
    $('#putBox').append($box);
}

function blackBox() {
    $(this).css('background-color', 'black');
}

function closeBox() {
    console.log('closeBox function activated');
    console.log($(this));
    console.log($(this).parent());
    $(this).parent().remove();
}
