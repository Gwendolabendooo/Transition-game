var load = document.querySelectorAll(".load");
var title = document.querySelector(".title");
console.log(-title.style.width)
  title.animate([
  // keyframes
  { left: 0 - title.style.width},
  { left: 100 + "%" }
], {
  // timing options
  duration: 2000,
  iterations: Infinity
})

load.forEach(stick =>{
  console.log(stick)
  stick.style.top = Math.random() * 100 + "%";
  stick.animate([
  // keyframes
  { left: 0},
  { left: 100 + "%" }
], {
  // timing options
  duration: Math.random() * (1000 - 400) + 400,
  iterations: Infinity
});
})