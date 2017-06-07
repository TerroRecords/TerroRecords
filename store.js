function main() {
  var albumsLI = document.getElementById('albumsli');
  var shirtsLI = document.getElementById('shirtsli');
  var rugzakkenLI = document.getElementById('rugzakkenli');

  var infoStore = document.getElementById('infostore');
  var albumsS = document.getElementById('albums');
  var shirtsS = document.getElementById('shirts');
  var rugzakkenS = document.getElementById('rugzakken');

  albumsLI.onclick = function () {
    infoStore.className = "displaynone";
    albumsS.className = "display";
    shirtsS.className = "displaynone";
    rugzakkenS.className = "displaynone";
  }
  shirtsLI.onclick = function () {
    infoStore.className = "displaynone";
    albumsS.className = "displaynone";
    shirtsS.className = "display";
    rugzakkenS.className = "displaynone";
  }
  rugzakkenLI.onclick = function () {
    infoStore.className = "displaynone";
    albumsS.className = "displaynone";
    shirtsS.className = "displaynone";
    rugzakkenS.className = "display";
  }

  var ISalbums = document.getElementById('ISalbums');
  var PSalbums = document.getElementById('PSalbums');
  var ALalbums = document.getElementById('ALalbums');
  var DOCalbums = document.getElementById('DOCalbums');

  var ISalbumsbox = document.getElementById('ISalbumsbox');
  var PSalbumsbox = document.getElementById('PSalbumsbox');
  var ALalbumsbox = document.getElementById('ALalbumsbox');
  var DOCalbumsbox = document.getElementById('DOCalbumsbox');

  ISalbums.onclick = function () {
    ISalbumsbox.className = "display";
    PSalbumsbox.className = "displaynone";
    ALalbumsbox.className = "displaynone";
    DOCalbumsbox.className = "displaynone";
  }
  PSalbums.onclick = function () {
    ISalbumsbox.className = "displaynone";
    PSalbumsbox.className = "display";
    ALalbumsbox.className = "displaynone";
    DOCalbumsbox.className = "displaynone";
  }
  ALalbums.onclick = function () {
    ISalbumsbox.className = "displaynone";
    PSalbumsbox.className = "displaynone";
    ALalbumsbox.className = "display";
    DOCalbumsbox.className = "displaynone";
  }
  DOCalbums.onclick = function () {
    ISalbumsbox.className = "displaynone";
    PSalbumsbox.className = "displaynone";
    ALalbumsbox.className = "displaynone";
    DOCalbumsbox.className = "display";
  }
}

window.onload = function() {
       main();
}
