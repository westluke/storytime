// window.onload = function(e){
//   console.log("adsl;kfj");
//   //console.log($('span'));
//   $("span").css({'transform' : 'rotate(' + 40 + 'deg)'});
// }

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

window.onscroll = function(e){
  $("span").css("-webkit-transform", function(index){
    return "rotate(" + ((Math.random() * 2) - 1) + "deg)";
  });
}

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
