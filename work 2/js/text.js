let fontRange = document.getElementById(`fontRange`);
let fontText = document.getElementById(`fontText`);
let Color = document.getElementById(`Color`);
let colorText = document.getElementById(`colorText`);
let cssCode = document.getElementById(`cssCode`);
let tex = document.getElementById(`tex`);
let btnCopy = document.getElementById("btnCopy");
let btnClear = document.getElementById(`btnClear`);
let accordionExample = document.getElementById("accordionExample");

fontRange.oninput = () => {
  tex.style.fontSize = fontRange.value + `px`;
  fontText.value = fontRange.value;
  cssCode.value = `font-size: ${fontRange.value}px; \ncolor: ${Color.value};`;
};

fontText.oninput = () => {
  tex.style.fontSize = fontText.value + `px`;
  fontRange.value = fontText.value;
  cssCode.value = `font-size: ${fontRange.value}px; \ncolor: ${Color.value};`;
};

Color.oninput = () => {
  tex.style.color = Color.value;
  colorText.value = Color.value;
  cssCode.value = `font-size: ${fontRange.value}px; \ncolor: ${Color.value};`;
};

colorText.oninput = () => {
  tex.style.color = colorText.value;
  Color.value = colorText.value;
  cssCode.value = `font-size: ${fontRange.value}px; \ncolor: ${Color.value};`;
};

btnCopy.onclick = () => {
  navigator.clipboard.writeText(cssCode.value);
};

btnClear.onclick = () => {
  cssCode.value = ``;
  fontRange.value = 20;
  fontText.value =20;
  Color.value = `black`;
  colorText.value = `#000000`
  tex.style.color = `black`;
  tex.style.fontSize = `${20}px`;
};
