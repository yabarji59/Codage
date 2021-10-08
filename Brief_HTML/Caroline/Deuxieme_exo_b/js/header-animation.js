var c = document.getElementById("header-animation");
var ctx = c.getContext("2d");

//making the canvas full screen
var parent = document.getElementById("main-header")
c.height = parent.offsetHeight;
c.width = parent.offsetWidth;

//chinese characters - taken from the unicode charset
var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function drawMatrix()
{

    //Black BG for the canvas
    //translucent BG to show trail
    var gradient = ctx.createLinearGradient(0,0,0,170);

    gradient.addColorStop(0, "rgba(1,24,28,0.2)");
    gradient.addColorStop(1, "rgba(5,14,16,0.2)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "rgba(0,255,225,0.05)"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = chinese[Math.floor(Math.random()*chinese.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;

    }

}



setInterval(drawMatrix, 42);


//drawing portrait
function drawPortrait(){
    var img = document.createElement('img');
    img.src = './img/portrait.png';
    img.style.zIndex = "10000";
    img.addEventListener("load", () => {
        for (let x = 10; x < 200; x += 30) {
            ctx.drawImage(img, x, 10);
        }
    });





}
