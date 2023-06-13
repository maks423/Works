let box = document.getElementById('box')
let widthRange = document.getElementById('widthRange')
let widthText = document.getElementById('widthText')
let cssCode = document.getElementById('cssCode')
let btnCopy = document.getElementById('btnCopy')
let accordionExample = document.getElementById('accordionExample')


widthRange.oninput = () => {
    box.style.width = widthRange.value + "px"
    widthText.value = widthRange.value
    cssCode.innerText = `width: ${widthRange.value}px;`
}


widthText.oninput = () => {
    box.style.width = widthText.value + "px"
    widthRange.value = widthText.value
}


btnCopy.onclick = () => {
    navigator.clipboard.writeText(cssCode.value)
}


accordionExample.addEventListener("show.bs.collapse", function () {
    cssCode.value = ''
});
// accordionExample.addEventListener("hide.bs.collapse", function () {
//   alert("Hidden orange");
// });