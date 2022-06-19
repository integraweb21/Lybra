$(document).ready(function() {

  var myline = document.getElementById("myline");
  var length = myline.getTotalLength();
  myline.style.strokeDasharray = length;
  
  myline.style.strokeDashoffset = length;
  
  window.addEventListener("scroll", myFunction);
  
  function myFunction() {
    var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var draw = length * scrollpercent;
  
    myline.style.strokeDashoffset = length - draw;
  
    endPoint = myline.getPointAtLength(draw);
  
  }

  /* ===============================  parallaxie  =============================== */

  $('.parallaxie').parallaxie({
    speed: 0.2,
    size: "cover"
  });

});