let input = document.querySelector("#input");
let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", e=> {
   e.preventDefault();
  JsBarcode("#barcode", input.value, {
    format: "code128",
    displayValue: true,
    fontSize: 24,
    lineColor: "#000",
  });
});
window.onload = (event) => {
  input.value = "";
};