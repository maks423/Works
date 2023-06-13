let box = document.getElementById("box");
let widthRange = document.getElementById("widthRange");
let widthText = document.getElementById("widthText");
let cssCode = document.getElementById("cssCode");
let btnCopy = document.getElementById("btnCopy");
let accordionExample = document.getElementById("accordionExample");
let btnClear = document.getElementById(`btnClear`);
let heightRange = document.getElementById(`heightRange`);
let heightText = document.getElementById(`heightText`);
let borderRange = document.getElementById(`borderRange`);
let borderText = document.getElementById(`borderText`);
let bgColor = document.getElementById(`bgColor`);
let bgText = document.getElementById(`bgText`);

widthRange.oninput = () => {
  box.style.width = widthRange.value + "px";
  widthText.value = widthRange.value;
  cssCode.value = `background-color: ${bgColor.value}; \nwidth: ${widthRange.value}px; \nheight: ${heightRange.value }px;`;
};

widthText.oninput = () => {
  box.style.width = widthText.value + "px";
  widthRange.value = widthText.value;
  cssCode.value = `background-color: ${bgColor.value}; \nwidth: ${widthRange.value}px; \nheight: ${heightRange.value }px;`;
};

heightRange.oninput = () => {
  box.style.height = heightRange.value + `px`;
  heightText.value = heightRange.value;
  cssCode.value = `background-color: ${bgColor.value}; \nwidth: ${widthRange.value}px; \nheight: ${heightRange.value }px;`;
};

heightText.oninput = () => {
  box.style.height = heightText.value + `px`;
  heightRange.value = heightText.value;
  cssCode.value = `background-color: ${bgColor.value}; \nwidth: ${widthRange.value}px; \nheight: ${heightRange.value }px;`;
};

bgColor.oninput = () => {
  box.style.backgroundColor = bgColor.value;
  bgText.value = bgColor.value;
  cssCode.value = `background-color: ${bgColor.value}; \nwidth: ${widthRange.value}px; \nheight: ${heightRange.value }px;`;
};

bgText.oninput = () => {
  box.style.backgroundColor = bgText.value;
  bgColor.value = bgText.value;
  cssCode.value = `background-color: ${bgColor.value}; \nwidth: ${widthRange.value}px; \nheight: ${heightRange.value }px;`;
};

btnCopy.onclick = () => {
  navigator.clipboard.writeText(cssCode.value);
};

btnClear.onclick = () => {
  cssCode.value = ``;
  widthRange.value = 200;
  widthText.value = 200;
  heightRange.value = 200;
  heightText.value = 200;
  bgColor.value = `black`
  bgText.value = `#000000`
  box.style.width = `${200}px`;
  box.style.height = `${200}px`;
  box.style.backgroundColor = `black`;
};
