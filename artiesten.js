function main() {

  var isB = document.getElementById('IS1');
  var psB = document.getElementById('PS1');
  var alB = document.getElementById('BR1');
  var dcB = document.getElementById('HL1');

  var infoArtiesten = document.getElementById('informatieartiesten');
  var infoIS = document.getElementById('informatieIS');
  var infoPS = document.getElementById('informatiePS');
  var infoAL = document.getElementById('informatieAL');
  var infoDC = document.getElementById('informatieDC');

  isB.onclick = function () {
    infoArtiesten.className = "displaynone";
    infoIS.className = "display";
    infoPS.className = "displaynone";
    infoAL.className = "displaynone";
    infoDC.className = "displaynone";
  }

  psB.onclick = function () {
    infoArtiesten.className = "displaynone";
    infoIS.className = "displaynone";
    infoPS.className = "display";
    infoAL.className = "displaynone";
    infoDC.className = "displaynone";
  }

  alB.onclick = function () {
    infoArtiesten.className = "displaynone";
    infoIS.className = "displaynone";
    infoPS.className = "displaynone";
    infoAL.className = "display";
    infoDC.className = "displaynone";
  }

  dcB.onclick = function () {
    infoArtiesten.className = "displaynone";
    infoIS.className = "displaynone";
    infoPS.className = "displaynone";
    infoAL.className = "displaynone";
    infoDC.className = "display";
  }

}

window.onload = function() {
       main();
}
