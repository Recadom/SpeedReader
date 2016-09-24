var num = 0;
var length = text.length;

function change() {
    "use strict";
    var amt = document.getElementById("s2").value, i, txt_disp = "";
    for (i = 0; i < amt && (num + 15) < length; i += 1) {
        txt_disp += text[i + num] + ' ';
    }
    
    document.getElementById("text").innerHTML = txt_disp;
    num += 1;
}

var bool = false;
var loop;

document.getElementById("textbtn").onmousedown = function () {
    "use strict";
    var speed = 1 / ((document.getElementById("s1").value) / 60) * 1000;
    bool = !bool;
    if (bool) {
        loop = setInterval(change, speed);
    } else {
        clearInterval(loop);
    }
};
