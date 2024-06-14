let icon2 = document.querySelector(".icon2");
let menu = document.querySelector(".menu");
icon2.onclick = function () {
  menu.classList.toggle("active");
};

let icon = document.querySelector(".icon");
let body = document.getElementsByTagName("body")[0];

icon.onclick = function () {
  body.classList.toggle("active");
};

let textS1 = document.querySelector(".text-s1");
let textS2 = document.querySelector(".text-s2");
let textS3 = document.querySelector(".text-s3");

let boxPlan1 = document.querySelector(".box-plan1");
let boxPlan2 = document.querySelector(".box-plan2");
let boxPlan3 = document.querySelector(".box-plan3");

let BTN1 = document.getElementById("BTN1");
let BTN2 = document.getElementById("BTN2");
let BTN3 = document.getElementById("BTN3");

BTN1.onclick = function () {
  textS1.style.opacity = "0";
  textS1.style.translate = "-25px";
  textS1.style.zIndex = "-1";
  textS2.classList.toggle("show");
  textS3.style = "unset";

  boxPlan1.style.opacity = "0";
  boxPlan1.style.translate = "0px -50px";
  boxPlan1.style.zIndex = "-1";
  boxPlan2.classList.toggle("show");
  boxPlan3.style = "unset";
};

BTN2.onclick = function () {
  textS1.style.opacity = "0";
  textS1.style.translate = "-25px";
  textS1.style.zIndex = "-1";
  textS2.style.opacity = "0";
  textS2.style.translate = "-25px";
  textS2.style.zIndex = "-1";
  textS3.classList.toggle("show");

  boxPlan1.style.opacity = "0";
  boxPlan1.style.translate = "0px -50px";
  boxPlan1.style.zIndex = "-1";
  boxPlan2.style.opacity = "0";
  boxPlan2.style.translate = "0px -50px";
  boxPlan2.style.zIndex = "-1";
  boxPlan3.classList.toggle("show");
};

BTN3.onclick = function () {
  textS1.style = "unset";
  textS2.style = "unset";
  textS3.style = "unset";
  textS2.classList.remove("show");
  textS3.classList.remove("show");

  boxPlan1.style = "unset";
  boxPlan2.style = "unset";
  boxPlan3.style = "unset";
  boxPlan2.classList.remove("show");
  boxPlan3.classList.remove("show");
};
