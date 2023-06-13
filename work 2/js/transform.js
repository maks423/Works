let box = document.getElementById(`box`);
let btnCopy = document.getElementById("btnCopy");
let btnClear = document.getElementById(`btnClear`);
let accordionExample = document.getElementById("accordionExample");
let scaleRange = document.getElementById(`scaleRange`);
let scaleText = document.getElementById(`scaleText`);
let rotateRange = document.getElementById(`rotateRange`);
let rotateText = document.getElementById(`rotateText`);
let skewRange = document.getElementById(`skewRange`);
let translateRange = document.getElementById(`translateRange`);
let skewText = document.getElementById(`skewText`);
let translateText = document.getElementById(`translateText`);


scaleRange.oninput = () => {
  box.style.scale = scaleRange.value /10 ;
  scaleText.value = scaleRange.value /10;
  cssCode.value = `transform:scale ${scaleRange.value /10}; \ntransform:rotate ${rotateRange.value}deg; \ntransform:skew ${skewRange.value}deg; \ntransform:translate ${translateRange.value}px; `;
};

scaleText.oninput = () => {
  box.style.scale = scaleText.value /10;
  scaleRange.value = scaleText.value /10;
  cssCode.value = `transform:scale ${scaleRange.value /10}; \ntransform:rotate ${rotateRange.value}deg; \ntransform:skew ${skewRange.value}deg; \ntransform:translate ${translateRange.value}px; `;
};

rotateRange.oninput = () => {
  box.style.rotate = rotateRange.value + `deg`;
  rotateText.value = rotateRange.value;
  cssCode.value = `transform:scale ${scaleRange.value /10}; \ntransform:rotate ${rotateRange.value}deg; \ntransform:skew ${skewRange.value}deg; \ntransform:translate ${translateRange.value}px; `;
};

rotateText.oninput = () => {
  box.style.rotate = rotateText.value + `deg`;
  rotateRange.value = rotateText.value;
  cssCode.value = `transform:scale ${scaleRange.value /10}; \ntransform:rotate ${rotateRange.value}deg; \ntransform:skew ${skewRange.value}deg; \ntransform:translate ${translateRange.value}px; `;
};

skewRange.oninput = () => {
  box.style.skew = skewRange.value + `px`;
  skewText.value = skewRange.value;
  cssCode.value = `transform:scale ${scaleRange.value /10}; \ntransform:rotate ${rotateRange.value}deg; \ntransform:skew ${skewRange.value}deg; \ntransform:translate ${translateRange.value}px; `;
};

skewText.oninput = () => {
  box.style.skew = skewText.value + `deg`;
  skewRange.value = skewText.value;
  cssCode.value = `transform:scale ${scaleRange.value /10}; \ntransform:rotate ${rotateRange.value}deg; \ntransform:skew ${skewRange.value}deg; \ntransform:translate ${translateRange.value}px; `;
};

translateRange.oninput = () => {
  box.style.translate = translateRange.value;
  translateText.value = translateRange.value;
  cssCode.value = `transform:scale ${scaleRange.value /10}; \ntransform:rotate ${rotateRange.value}deg; \ntransform:skew ${skewRange.value}deg; \ntransform:translate ${translateRange.value}px; `;
};

translateText.oninput = () => {
  box.style.translate = translateText.value;
  translateRange.value = translateText.value;
  cssCode.value = `transform:scale ${scaleRange.value /10}; \ntransform:rotate ${rotateRange.value}deg; \ntransform:skew ${skewRange.value}deg; \ntransform:translate ${translateRange.value}px; `;
};

btnCopy.onclick = () => {
  navigator.clipboard.writeText(cssCode.value);
};

btnClear.onclick = () => {
  cssCode.value = ``;
  scaleRange.value = 1;
  scaleText.value = 1;
  rotateRange.value = 0;
  rotateText.value = 0;
  skewRange.value = 0;
  skewText.value = 0;
  translateRange.value = 0;
  translateText.value = 0;
  box.style.scale = `1`;
  box.style.rotate = `${0}deg`;
  box.style.backgroundColor = `black`;
  box.style.skew = `${0}deg`;
  box.style.translate = `${0}deg`;
};
