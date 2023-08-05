// create a digital seconds clock using setInterval and data object in javaScript.The data time,hours and seconds which can be the updated using setInterval.Try to keep the UI good looking

hhand = document.getElementById("hour");
mhand = document.getElementById("min");
shand = document.getElementById("sec");
setInterval(() => {
  var a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let mili = a.getMilliseconds();
  hrotate = 30 * h + m / 2;
  mrotate = 6 * m + s / 10;
  srotate = s * 6 + mili * (6 / 1000);
  hhand.style.transform = `rotate(${hrotate}deg)`;
  mhand.style.transform = `rotate(${mrotate}deg)`;
  shand.style.transform = `rotate(${srotate}deg)`;
}, 1);
let hour = document.getElementById("dhour");
let min = document.getElementById("dmin");
let sec = document.getElementById("dsec");
let inday = document.getElementById("inday");
let inmonth = document.getElementById("inmonth");
let inyear = document.getElementById("inyear");
let indate = document.getElementById("indate");
// let am_pm = documnet.getElementById("am_pm")

setInterval(() => {
  let a = new Date();
  if (a.getHours() == 12 || a.getHours() == 0) {
    h = 12;
  } else {
    h = a.getHours() % 12;
  }
  m = a.getMinutes();
  s = a.getSeconds();
  am = a.getHours() > 12 ? "PM" : "AM";
  hour.innerText = `${h}`;
  min.innerText = `${m}`;
  sec.innerText = `${s}`;
  am_pm.innerText = `${am}`;
  let monnth = a.getMonth() + 1;
  let year = a.getFullYear();
  let date = a.getDate();
  let d = a.getDay();
  day = (d) => {
    if (d == 1) {
      return "Monday";
    } else if (d == 2) {
      return "Tuesday";
    } else if (d == 3) {
      return "Wednesday";
    } else if (d == 4) {
      return "Thursday";
    } else if (d == 5) {
      return "Friday";
    } else if (d == 6) {
      return "Saturday";
    } else {
      return "Sunday";
    }
  };
  let v = day(d);
  inday.innerText = `${v}`;
  indate.innerText = `${date}`;
  inmonth.innerText = `${monnth}`;
  inyear.innerText = `${year}`;
}, 1);
