let color = document.getElementById('cHex');
let textH = document.getElementById('pHex');

textH.textContent = "Background Color: White";

const sbg = function(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomMayus = randomColor.toUpperCase()
    document.body.style.backgroundColor = `#${randomMayus}`;
    textH.textContent = `Background Color: #${randomMayus}`;
}

color.onclick = function(){
    sbg()
}