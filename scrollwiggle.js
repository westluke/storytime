// window.onload = function(e){
//   console.log("adsl;kfj");
//   //console.log($('span'));
//   $("span").css({'transform' : 'rotate(' + 40 + 'deg)'});
// }

window.onload = function(e){
  $("p")
  // .text() on each p. How to isolate?
}

window.onscroll = function(e){
  $("span").css("-webkit-transform", function(index){
    return "rotate(" + (Math.floor(Math.random() * 6.1) - 3) + "deg)";
  })
}
