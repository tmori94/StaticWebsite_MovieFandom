
window.value = "";

function Open(element) {
  var destImg = element.src;
  var final = destImg;
  window.value = final;
  console.log(window.value);
  SelectImg();

}

function SelectImg() {
  const ImgPage = window.open('OpenImg.html', "_self")
  document.getElementById('FSI').src = window.value;
  location.reload();
}



var images = [
  "img/Gallery/John_Wayne_Poster.png",
  "img/Gallery/Blue_Steel_Scene_Gun.png",
  "img/Gallery/John_Eleanor.png",
  "img/JW_StolenGoods.png"
];

var i;
var len = images.length;
var h;

function input(number) {
  h = number;
  console.log(h, number);
  navigate(event);
}

function navigate(event) {
  var img = document.getElementById("FS").childNodes[1];
  if (event.keyCode === 39 || h === 39) { /* keyCode 39 = ArrowRight*/
    i = (i + 1) >= len ? 0 : i + 1;
  } else if (event.keyCode === 37 || h === 37) { /* keyCode 37 = ArrowLeft */
    i = (i - 1) < 0 ? len-1 : i - 1;
  }
  img.setAttribute("src", images[i]);
  h = 0;
}
window.onkeydown = navigate;
window.onload = function() {
  i = len;
  var vEvent = {
    keyCode : 39
  };
  navigate(vEvent);
}
document.getElementById("previous").addEventListener("click", event.ArrowLeft);
