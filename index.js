const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const color3 = document.getElementById("color-3");
const color4 = document.getElementById("color-4");
const color5 = document.getElementById("color-5");
const color1hex = document.getElementById("color-1-hex");
const color2hex = document.getElementById("color-2-hex");
const color3hex = document.getElementById("color-3-hex");
const color4hex = document.getElementById("color-4-hex");
const color5hex = document.getElementById("color-5-hex");

const colorBtn = document.getElementById("generate-color-btn");
const selectScheme = document.getElementById("color-scheme");
const colorInput = document.getElementById("color-picker");

const colorsElementArr = [color1, color2, color3, color4, color5];
const colorsHexArr = [color1hex, color2hex, color3hex, color4hex, color5hex];

colorBtn.addEventListener("click", generateColorPalette)

function generateColorPalette(){
    const hex = colorInput.value.slice(1);
    const mode = selectScheme.value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}`)
        .then(res=>res.json())
        .then(data=>{
            const colorsArr = data.colors;
            for(let i = 0; i < colorsElementArr.length;i++){
                colorsElementArr[i].style.backgroundColor = colorsHexArr[i].textContent = colorsArr[i].hex.value;
            }
        })
}