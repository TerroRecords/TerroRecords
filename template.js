function main() {

var boxesOne = document.getElementsByClassName('gameonebox');
var teller = 0;

while (teller < boxesOne.length) {
  boxesOne[teller].onclick = function () {
    if (this.id === 'box') {
        this.id = 'gameoneboxanimation';
    } else {
      this.id = 'box';
    }
  };
  teller++;
};

};

window.onload = function() {
       main();
}
