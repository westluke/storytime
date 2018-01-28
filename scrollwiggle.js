window.onload = function(e){
}


var fonts = ["Arial","Times New Roman", "Calibri"]
var changeFont = function(font){
  console.log(font)
    document.getElementById("story").style.fontFamily = font;
}

var auto_jiggle = false;

function jiggle(){
  $("span").css("-webkit-transform", function(index){
    return "rotate(" + ((Math.random() * 20) - 10) + "deg)";
  });

  $("span").css("font-size", function(index){
    return ((Math.random() * 4) + 18) + "px";
  });

  $("span").css("color", function(index){
    var red = Math.floor((Math.random()*30 + 215));
    var green = Math.floor((Math.random()*30 + 210));
    var blue = Math.floor((Math.random()*30 + 195));
    result = "rgb(" + red + ", " + green + ", " + blue + ")";
    // return result;rgb(237,224,210)
  });

  $("article").css("left", function(index){
    return ((Math.random() * 10) - 5) + "px";
  });

  $("article").css("top", function(index){
    return ((Math.random() * 10) - 5) + "px";
  });

  $("body").css("background-color", function(index){
    var red = Math.floor((Math.random()*30 + 105));
    var green = Math.floor((Math.random()*30 + 10));
    var blue = Math.floor((Math.random()*20));
    result = "rgb(" + red + ", " + green + ", " + blue + ")";
    return result;
  });
}

window.onscroll = function(e){
  if (!auto_jiggle){
    if ($("html").scrollTop() > 5000){
      auto_jiggle = true;
      setInterval(jiggle, 30);
    } else {
      jiggle();
    }
  }
}




// Make some words red, randomly.

// Effects we may want:
/*
Either at character or line or paragraph level:
Changing font
Changing font color
Changing font size
Changing font spacing
Changing font rotation

Either universally or localized:
Changing background color
Changing UI
Maybe have a back to top button that stops working
"Like and Share" takes you to some other site
Text of back to top and "Like and Share" start changing
A login bar that doesn't work

Each effect is triggered differently.

This is based solely on amount scrolled in the past 5 minutes + active time.
And these changes are permanent, right? Should they be permanent? Or should some of them
*/
