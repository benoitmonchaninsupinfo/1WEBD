// Ex 1
// let text = 'test';
// let nombre1 = 1;
// let nombre2 = 2;
// console.log('nombre1', nombre1);
// console.log('nombre2', nombre2);
// console.log('nombre1 - nombre2 =', nombre1 - nombre2);
// alert(text);

// Ex 2
// let age = prompt('Quel a age as-tu ?');
// console.log('L\'age de l\'utilisateur :', age);

// Ex 3
// let numbers = [1, 2, 3, 4];
// console.log('Le nombre d\'éléments :', numbers.length);
// console.log('Le premier élément :', numbers[0]);
// console.log('Le dernier élément :', numbers[numbers.length - 1]);
// console.log('La somme des valeurs :', numbers.reduce((total, number) => total + number, 0));

// Ex 4 => x = 4
// let x = 4;
// x++;
// x -= 1;
// console.log(x);

// Ex 5 => x = 0
// let x = 4;
// x = x**3;
// x %= 2;
// console.log(x);

// Ex 6 => x = '101'
// let x = '10';
// x += 1;
// console.log(x);


// Ex 7
// let age = prompt('Quela age as-tu ?');
// if (isNaN(Number(age))) {
//     console.log('C\'est pas un nombre');
// } else {
//     if (age >= 18) {
//         console.log('Majeur');
//     } else {
//         console.log('Mineur');
//     }
// }


// Ex 8
// let age = prompt('Quel age as-tu ?');
// if (isNaN(Number(age))) {
//     console.log('C\'est pas un nombre');
// } else {
//     if ((age >= 20 && age <= 30) || (age >= 40 && age <= 50)) {
//         console.log('Tu as entre 20 ans et 30 ans ou 40 ans et 50 ans');
//     } else {
//         console.log('Tu n\'as pas entre 20 ans et 30 ans ou 40 ans et 50 ans');
//     }
// }


// Ex 9
// let action = prompt('Quelle action va faire l\'utilisateur ?');
// switch(action) {
//     case 'marcher':
//         console.log('Il marche');
//         break;
//     case 'courir':
//         console.log('Il court');
//         break;
//     case 'tomber':
//         console.log('Il tombe');
//         break;
//     case 'frapper':
//         console.log('Il frappe');
//         break;
//     case 'mourir':
//         console.log('Il meurt');
//         break;
// }


// Ex 10
// let x = 2;

// x % 2 ? alert('impair') : alert('pair');

// (x >= 2 && x**2 < 5) ? alert('1ere tranche') : null


// Ex 11
// let x = '10';
// x = Number(x) + 1;
// console.log(x);


// Ex 12
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// alphabet.forEach((letter) => console.log(letter.toUpperCase()));


// Ex 13
// for(i = 10; i >= 0; i--) {
//     console.log(i);
// }


// Ex 14
// let sum = 0;
// let firstname = 'Benoit';
// for(let i = 0; i < firstname.length; i++) {
//     sum += firstname.charCodeAt(i);
// }
// console.log(sum);

// Ex 15
// let fibo = [0, 1];
// for(let i=1; i < 8; i++) {
//     fibo.push(fibo[i] + fibo[i - 1])
// }
// console.log(fibo);


// Ex 16


// Ex 17


// Ex 18


// Ex 19


// Ex 20













const DIV = document.getElementsByClassName('maDiv');
console.log(DIV);

const PARAPGRAPH = document.getElementById('monParagraphe');
console.log('PARAPGRAPH', PARAPGRAPH);



