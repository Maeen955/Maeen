// javascript
const btnEl = document.getElementById("btnEl");
const hexEl = document.getElementById("hexEl");
const main = document.getElementById("main");
const colors = [
 "#000000", // Black
  "#111111", // Dark Gray 1
  "#222222", // Dark Gray 2
  "#333333", // Dark Gray 3
  "#444444", // Dark Gray 4
  "#555555", // Dark Gray 5
  "#666666", // Dark Gray 6
  "#777777", // Dark Gray 7
  "#888888", // Dark Gray 8
  "#999999", // Dark Gray 9
  "#8B0000", // Dark Red
  "#8B008B", // Dark Magenta
  "#00008B", // Dark Blue
  "#006400", // Dark Green
  "#B8860B", // Dark Goldenrod
  "#A52A2A", // Brown
  "#A0522D", // Sienna
  "#808080", // Gray
  "#008080", // Teal
  "#4B0082"  // Indigo
];
btnEl.addEventListener("click", function(){
    let random = Math.floor(Math.random() * colors.length)
    let color = colors[random];
    main.style.backgroundColor = color;
    hexEl.innerText = color;
})
