let object = document.getElementById(`object`);
let btnClear = document.getElementById(`btnClear`);
let btnCopy = document.getElementById("btnCopy");
let accordionExample = document.getElementById("accordionExample");
let cssCode = document.getElementById("cssCode");
let marginLeftRange = document.getElementById(`marginLeftRange`);
let marginLeftText = document.getElementById(`marginLeftText`);
let marginRightRange = document.getElementById(`marginRightRange`);
let marginRightText = document.getElementById(`marginRightText`);
let marginTopRange = document.getElementById(`marginTopRange`);
let marginTopText = document.getElementById(`marginTopText`);
let marginBottomRange = document.getElementById(`marginBottomRange`);
let marginBottomText = document.getElementById(`marginBottomText`);

marginLeftRange.oninput = () => {
  object.style.marginLeft = marginLeftRange.value + `px`;
  marginLeftText.value = marginLeftRange.value;
  cssCode.value = `margin-left: ${marginLeftRange.value}px; \nmargin-right: ${marginRightRange.value}px; \nmargin-top: ${marginTopRange.value}px; \nmargin-bottom ${marginBottomRange.value}px;`;
};

marginLeftText.oninput = () => {
  object.style.marginLeft = marginLeftText.value + `px`;
  marginLeftRange.value = marginLeftText.value;
  cssCode.value = `margin-left: ${marginLeftRange.value}px; \nmargin-right: ${marginRightRange.value}px; \nmargin-top: ${marginTopRange.value}px; \nmargin-bottom ${marginBottomRange.value}px;`;
};

marginRightRange.oninput = () => {
  object.style.marginLeft = -marginRightRange.value + `px`;
  marginRightText.value = marginRightRange.value;
  cssCode.value = `margin-left: ${marginLeftRange.value}px; \nmargin-right: ${marginRightRange.value}px; \nmargin-top: ${marginTopRange.value}px; \nmargin-bottom ${marginBottomRange.value}px;`;
};

marginRightText.oninput = () => {
  object.style.marginLeft = -marginRightText.value + `px`;
  marginRightRange.value = marginRightText.value;
  cssCode.value = `margin-left: ${marginLeftRange.value}px; \nmargin-right: ${marginRightRange.value}px; \nmargin-top: ${marginTopRange.value}px; \nmargin-bottom ${marginBottomRange.value}px;`;
};

marginTopRange.oninput = () => {
  object.style.marginTop = marginTopRange.value + `px`;
  marginTopText.value = marginTopRange.value;
  cssCode.value = `margin-left: ${marginLeftRange.value}px; \nmargin-right: ${marginRightRange.value}px; \nmargin-top: ${marginTopRange.value}px; \nmargin-bottom ${marginBottomRange.value}px;`;
};

marginTopText.oninput = () => {
  object.style.marginTop = marginTopText.value + `px`;
  marginTopRange.value = marginTopText.value;
  cssCode.value = `margin-left: ${marginLeftRange.value}px; \nmargin-right: ${marginRightRange.value}px; \nmargin-top: ${marginTopRange.value}px; \nmargin-bottom ${marginBottomRange.value}px;`;
};

marginBottomRange.oninput = () => {
  object.style.marginBottom = marginBottomRange.value + `px`;
  marginBottomText.value = marginBottomRange.value;
  cssCode.value = `margin-left: ${marginLeftRange.value}px; \nmargin-right: ${marginRightRange.value}px; \nmargin-top: ${marginTopRange.value}px; \nmargin-bottom ${marginBottomRange.value}px;`;
};

marginBottomText.oninput = () => {
  object.style.marginBottom = marginBottomText.value + `px`;
  marginBottomRange.value = marginBottomText.value;
  cssCode.value = `margin-left: ${marginLeftRange.value}px; \nmargin-right: ${marginRightRange.value}px; \nmargin-top: ${marginTopRange.value}px; \nmargin-bottom ${marginBottomRange.value}px;`;
};

btnCopy.onclick = () => {
  navigator.clipboard.writeText(cssCode.value);
};

btnClear.onclick = () => {
  cssCode.value = ``;
  marginLeftRange.value = 0;
  marginLeftText.value = 0;
  marginRightRange.value = 0;
  marginRightText.value = 0;
  marginTopRange.value = 0;
  marginTopText.value = 0;
  marginBottomRange.value = 0;
  marginBottomText.value = 0;
  object.style.marginLeft = `${0}px`;
  object.style.marginRight = `${0}px`;
  object.style.marginTop = `${0}px`;
  object.style.marginBottom = `${0}px`;
};
