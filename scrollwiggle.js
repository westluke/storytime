window.onload = function(e){
  $("p").each(function(index){
    words = $(this).text().split(" ");
    words = words.filter(function(word){
      return !((word.length <= 1) && (word.trim() == ""))
    });
    $(this).empty();
    var para = this;
    $.each(words, function(i, v){
      $(para).append("<span>" + v + "</span> ");
    });
  });
}


var fonts = ["Arial","Times New Roman", "Calibri"]
var changeFont = function(font){
  console.log(font)
    document.getElementById("story").style.fontFamily = font;
}

window.onscroll = function(e){
    var d = new Date();
    var next = Math.floor(d.getSeconds() / 20)
    console.log(next)
    switch (next){
      case 0:
          changeFont(fonts[0])
          break
      case 1:
          changeFont(fonts[1])
          break
      case 2:
          changeFont(fonts[2])
          break

    }

    $("span").css("-webkit-transform", function(index){
      return "rotate(" + ((Math.random() * 10) - 5) + "deg)";
    });

    $("article").css("left", function(index){
      return ((Math.random() * 5) - 2.5) + "px";
    });

    $("article").css("top", function(index){
      return ((Math.random() * 5) - 2.5) + "px";
    });
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
