const form = document.querySelector("#logoform");
const brandInput = document.querySelector("input[name='brandname']");
const colorInput = document.querySelector("input[name='color']");
const fontSizeInput = document.querySelector("input[name='fontsize']");
const results = document.querySelector("#results");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newLogo = makeLogo(
    brandInput.value,
    colorInput.value,
    fontSizeInput.value
  );
  results.appendChild(newLogo);
  // if you wanted to clear the input:
  //  brandInput.value = "";

  // console.log(brandInput.value, colorInput.value, fontSizeInput.value);
  // console.log("submit");
});

function makeLogo(text, color, size) {
  const logo = document.createElement("h2");
  logo.innerText = text;
  logo.style.color = color;
  logo.style.fontSize = size + "px";

  return logo;
}
