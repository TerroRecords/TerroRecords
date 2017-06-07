function main() {

var afbeeldingenbox = document.getElementById('afbeeldingenbox');

var myFunction = function () {
  if (afbeeldingenbox.className === "homeimg1") {
    afbeeldingenbox.className = "homeimg2";
  } else {
    afbeeldingenbox.className = "homeimg1";
  }
}

setInterval(myFunction, 6000);
}

window.onload = function() {
       main();
}
