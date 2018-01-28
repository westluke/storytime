window.onload = function(e){
}


var fonts = ["Arial","Times New Roman", "Calibri"]
var changeFont = function(font){
  console.log(font)
    document.getElementById("story").style.fontFamily = font;
}

var auto_jiggle = false;

function jiggleHeader(){
  $("h1").css("-webkit-transform", function(index){
    return "rotate(" + ((Math.random() * 10) - 5) + "deg)";
  });
}

setInterval(jiggleHeader, 100);

function jiggle(){
  $("span").css("-webkit-transform", function(index){
    return "rotate(" + ((Math.random() * 20) - 10) + "deg)";
  });

  $("span").css("font-size", function(index){
    return ((Math.random() * 4) + 18) + "px";
  });

  $("span").css("color", function(index){
    var red = Math.floor((Math.random()*50 + 200));
    var green = Math.floor((Math.random()*50 + 100));
    var blue = Math.floor((Math.random()*50 + 100));
    result = "rgb(" + red + ", " + green + ", " + blue + ")";
    return result;
  });

  $("article").css("left", function(index){
    return ((Math.random() * 10) - 5) + "px";
  });

  $("article").css("top", function(index){
    return ((Math.random() * 10) - 5) + "px";
  });

  $("body").css("background-color", function(index){
    var red = Math.floor((Math.random()*20 + 100));
    var green = Math.floor((Math.random()*30 + 183));
    var blue = Math.floor((Math.random()*30 + 216));
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



