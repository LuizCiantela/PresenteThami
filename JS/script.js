function fuja() {
  var btnNao = document.getElementById("nao");

  var larguraJanela = window.innerWidth;
  var alturaJanela = window.innerHeight;

  var maxX = larguraJanela - btnNao.offsetWidth;
  var maxY = alturaJanela - btnNao.offsetHeight;

  var X = Math.floor(Math.random() * maxX);
  var Y = Math.floor(Math.random() * maxY);

  btnNao.style.left = X + "px";
  btnNao.style.top = Y + "px";
}

function redirecionar() {
  window.location.href = document.getElementById("link").href;
}

function mostrarVideo() {
  var videoContainer = document.getElementById("video-container");
  videoContainer.style.display = "block";
}

function mostrarVideoShrek() {
  var videoContainer = document.getElementById("video-container");
  videoContainer.style.display = "block";
  setTimeout(function () {
    window.location.href = "../HTML/namoro.html";
  }, 30000);
}
