
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let heading = document.querySelector('h1');
    let randomcolor = getrandomcolor();
    heading.innerText = randomcolor;
    // heading.style.backgroundColor=randomcolor;

    let div=document.querySelector('div');
    div.style.backgroundColor=randomcolor
    console.log('color updated')
})

function getrandomcolor() {
    let r = Math.floor(Math.random() * 225);
    let g = Math.floor(Math.random() * 225);
    let b = Math.floor(Math.random() * 225);

    let newColor = `rgb(${r},${g},${b})`
    return newColor;
}



