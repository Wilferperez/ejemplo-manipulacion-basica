// h1 { color red}
// .parrafito { ...}
// #pid { ... }

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('submit', summaInputValues);

function summaInputValues() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "resultado: " + sumaInputs;
}


// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// // console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });


// h1.innerHTML = 'patito <br> feo';
// h1.innerText = 'patito <br> feo';
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle('verde');
// // h1.classList.contains('verde');

// input.value = "456"

// const img = document.createElement('img');
// img.setAttribute('src', 'https://imagen.io/content/uploads/2019/12/imagen-logo-Brand-2019.png');

// console.log(img)

// pid.innerHTML = "";
// pid.append(img);