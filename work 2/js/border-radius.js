let cssCode = document.getElementById(`cssCode`);
let btnCopy = document.getElementById("btnCopy");
let btnClear = document.getElementById(`btnClear`);
let accordionExample = document.getElementById("accordionExample");
let box = document.getElementById("box");
let borderRadRange = document.getElementById(`borderRadRange`);
let borderRadText = document.getElementById(`borderRadText`);
let borderRadTopLeftRange = document.getElementById(`borderRadTopLeftRange`);
let borderRadTopLeftText = document.getElementById(`borderRadTopLeftText`);
let borderRadTopRightRange = document.getElementById(`borderRadTopRightRange`);
let borderRadTopRightText = document.getElementById(`borderRadTopRightText`);
let borderRadBottomLeftRange = document.getElementById(`borderRadBottomLeftRange`);
let borderRadBottomLeftText = document.getElementById(`borderRadBottomLeftText`);
let borderRadbottomRightRange = document.getElementById(`borderRadbottomRightRange`);
let borderRadBottomRightText = document.getElementById(`borderRadBottomRightText`);

borderRadRange.oninput = () => {
  box.style.borderRadius = borderRadRange.value + `px`;
  borderRadText.value = borderRadRange.value;
  cssCode.value = `border-radius: ${borderRadRange.value}px; \nborder-top-left-radius: ${borderRadTopLeftRange.value}px; \nborder-top-right-radius: ${borderRadTopRightRange.value}px; \nborder-bottom-left-radius: ${borderRadBottomLeftRange.value}px; \nborder-bottom-right-radius: ${borderRadbottomRightRange.value}px;`;
};

borderRadText.oninput = () => {
  box.style.borderRadius = borderRadText.value + `px`;
  borderRadRange.value = borderRadText.value;
  cssCode.value = `border-radius: ${borderRadRange.value}px; \nborder-top-left-radius: ${borderRadTopLeftRange.value}px; \nborder-top-right-radius: ${borderRadTopRightRange.value}px; \nborder-bottom-left-radius: ${borderRadBottomLeftRange.value}px; \nborder-bottom-right-radius: ${borderRadbottomRightRange.value}px;`;
};

borderRadTopLeftRange.oninput = () => {
  box.style.borderTopLeftRadius = borderRadTopLeftRange.value + `px`;
  borderRadTopLeftText.value = borderRadTopLeftRange.value;
  cssCode.value = `border-radius: ${borderRadRange.value}px; \nborder-top-left-radius: ${borderRadTopLeftRange.value}px; \nborder-top-right-radius: ${borderRadTopRightRange.value}px; \nborder-bottom-left-radius: ${borderRadBottomLeftRange.value}px; \nborder-bottom-right-radius: ${borderRadbottomRightRange.value}px;`;
};

borderRadTopLeftText.oninput = () => {
  box.style.borderTopLeftRadius = borderRadTopLeftText.value + `px`;
  borderRadTopLeftRange.value = borderRadTopLeftText.value;
  cssCode.value = `border-radius: ${borderRadRange.value}px; \nborder-top-left-radius: ${borderRadTopLeftRange.value}px; \nborder-top-right-radius: ${borderRadTopRightRange.value}px; \nborder-bottom-left-radius: ${borderRadBottomLeftRange.value}px; \nborder-bottom-right-radius: ${borderRadbottomRightRange.value}px;`;
};

borderRadTopRightRange.oninput = () => {
  box.style.borderTopRightRadius = borderRadTopRightRange.value + `px`;
  borderRadTopRightText.value = borderRadTopRightRange.value;
  cssCode.value = `border-radius: ${borderRadRange.value}px; \nborder-top-left-radius: ${borderRadTopLeftRange.value}px; \nborder-top-right-radius: ${borderRadTopRightRange.value}px; \nborder-bottom-left-radius: ${borderRadBottomLeftRange.value}px; \nborder-bottom-right-radius: ${borderRadbottomRightRange.value}px;`;
};

borderRadTopRightText.oninput = () => {
  box.style.borderTopRightRadius = borderRadTopRightText.value + `px`;
  borderRadTopRightRange.value = borderRadTopRightText.value;
  cssCode.value = `border-radius: ${borderRadRange.value}px; \nborder-top-left-radius: ${borderRadTopLeftRange.value}px; \nborder-top-right-radius: ${borderRadTopRightRange.value}px; \nborder-bottom-left-radius: ${borderRadBottomLeftRange.value}px; \nborder-bottom-right-radius: ${borderRadbottomRightRange.value}px;`;
};

borderRadBottomLeftRange.oninput = () => {
  box.style.borderBottomLeftRadius = borderRadBottomLeftRange.value + `px`;
  borderRadBottomLeftText.value = borderRadBottomLeftRange.value;
  cssCode.value = `border-radius: ${borderRadRange.value}px; \nborder-top-left-radius: ${borderRadTopLeftRange.value}px; \nborder-top-right-radius: ${borderRadTopRightRange.value}px; \nborder-bottom-left-radius: ${borderRadBottomLeftRange.value}px; \nborder-bottom-right-radius: ${borderRadbottomRightRange.value}px;`;
};

borderRadBottomLeftText.oninput = () => {
  box.style.borderBottomLeftRadius = borderRadBottomLeftText.value + `px`;
  borderRadBottomLeftRange.value = borderRadBottomLeftText.value;
  cssCode.value = `border-radius: ${borderRadRange.value}px; \nborder-top-left-radius: ${borderRadTopLeftRange.value}px; \nborder-top-right-radius: ${borderRadTopRightRange.value}px; \nborder-bottom-left-radius: ${borderRadBottomLeftRange.value}px; \nborder-bottom-right-radius: ${borderRadbottomRightRange.value}px;`;
};

borderRadbottomRightRange.oninput = () => {
  box.style.borderBottomRightRadius = borderRadbottomRightRange.value + `px`;
  borderRadBottomRightText.value = borderRadbottomRightRange;
  cssCode.value = `border-radius: ${borderRadRange.value}px; \nborder-top-left-radius: ${borderRadTopLeftRange.value}px; \nborder-top-right-radius: ${borderRadTopRightRange.value}px; \nborder-bottom-left-radius: ${borderRadBottomLeftRange.value}px; \nborder-bottom-right-radius: ${borderRadbottomRightRange.value}px;`;
};

borderRadBottomRightText.oninput = () => {
  box.style.borderBottomRightRadius = borderRadBottomRightText.value + `px`;
  borderRadbottomRightRange.value = borderRadBottomRightText;
  cssCode.value = `border-radius: ${borderRadRange.value}px; \nborder-top-left-radius: ${borderRadTopLeftRange.value}px; \nborder-top-right-radius: ${borderRadTopRightRange.value}px; \nborder-bottom-left-radius: ${borderRadBottomLeftRange.value}px; \nborder-bottom-right-radius: ${borderRadbottomRightRange.value}px;`;
};

btnCopy.onclick = () => {
  navigator.clipboard.writeText(cssCode.value);
};

btnClear.addEventListener(`click`, function handleClick() {
    cssCode.value = ``;
    borderRadRange.value = 0;
    borderRadText.value = 0;
    borderRadTopLeftRange.value = 0;
    borderRadTopLeftText.value = 0;
    borderRadTopRightRange.value = 0;
    borderRadTopRightText.value = 0;
    borderRadBottomLeftRange.value = 0;
    borderRadBottomLeftText.value = 0;
    borderRadbottomRightRange.value = 0;
    borderRadBottomRightText.value = 0;
    box.style.borderRadius = `${0}px`;
    box.style.borderTopLeftRadius = `${0}px`;
    box.style.backgroundColor = `black`;
    box.style.borderTopRightRadius = `${0}px`;
    box.style.borderBottomLeftRadius = `${0}px`;
    box.style.borderBottomRightRadius = `${0}px`;
});
