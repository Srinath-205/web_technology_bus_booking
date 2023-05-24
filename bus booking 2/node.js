window.addEventListener("load", start, false);
document.addEventListener("mousemove", mouseover, false);
document.addEventListener("mouseout", mouseout, false);
  function start() {
    document.getElementById("picture").addEventListener("mouseover", over, false);
    document.getElementById("picture").addEventListener("mouseout", out, false);

    document.getElementById("picture1").addEventListener("mouseover", over1, false);
    document.getElementById("picture1").addEventListener("mouseout", out1, false);
  
  }

  function over() {
    document.getElementById("picture").setAttribute("src", "download (1).jpg");
  }

  function out() {
    document.getElementById("picture").setAttribute("src", "download (2).jpg");
  }

  

  function over1() {
    document.getElementById("picture1").setAttribute("src", "download (1).jpg");
  }

  function out1() {
    document.getElementById("picture1").setAttribute("src", "download.jpeg");
  }
function mouseover() {
    document.getElementById('idd').innerHTML = "LOCATION"
}
function mouseout() {
    document.getElementById('idd').innerHTML = "Choose a Location"
}

window.addEventListener("load", begin, false);
function begin() {
    document.getElementById('name').addEventListener("focus", focus1, false);
    document.getElementById('password').addEventListener("focus", focus2, false);
    document.getElementById('email').addEventListener("focus", focus3, false);
    document.getElementById('phone').addEventListener("focus", focus4, false);
    document.getElementById('password1').addEventListener("focus", focus5, false);
    document.getElementById('name').addEventListener("blur", blur1, false);
    document.getElementById('password').addEventListener("blur", blur2, false);
    document.getElementById('email').addEventListener("blur", blur3, false);
    document.getElementById('phone').addEventListener("blur", blur4, false);
    document.getElementById('text').addEventListener("blur", blur5, false);
}
function focus1() {
    document.getElementById("name").style.color = "red";
}
function focus2() {
    document.getElementById("password").style.color = "red";
}
function focus3() {
    document.getElementById("email").style.color = "red";
}
function focus4() {
    document.getElementById("phone").style.color = "red";
}
function focus5() {
    document.getElementById("password1").style.color = "red";
}
function blur1() {
    document.getElementById("name").style.color = "black";
}
function blur2() {
    document.getElementById("password").style.color = "black";
}
function blur3() {
    document.getElementById("email").style.color = "black";
}
function blur4() {
    document.getElementById("phone").style.color = "black";
}
function blur5() {
    document.getElementById("password1").style.color = "black";
}
