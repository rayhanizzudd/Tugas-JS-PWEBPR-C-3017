function button1() {
  document.getElementById("main").style.backgroundColor = "#E12E2E";
  document.getElementById("descjob").innerHTML = "Anda adalah seorang Teknis!";
  document.getElementById("header").innerHTML = "Anda Berbohong!";
  document.getElementById("imgjob").src = "/asset/2.png";
  const element = document.getElementById("button");
  element.remove();
}

function button2() {
  document.getElementById("main").style.backgroundColor = "#6FD240";
  document.getElementById("descjob").innerHTML = "Anda adalah seorang Mahasiswa";
  document.getElementById("header").innerHTML = "Anda Benar!";
  document.getElementById("imgjob").src = "/asset/3.png";
  const element = document.getElementById("button");
  element.remove();
}
