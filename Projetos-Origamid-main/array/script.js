const videoGames = ['switch', 'PS4', 'XBOX', '3DS'];

// for (let item = 0; item < videoGames.length; item++) {
//     console.log(videoGames[item]);
//     if (videoGames[item] === 'XBOX') {
//         break
//     }
// }

// videoGames.forEach(function (pedro) {
//     console.log(pedro)
// })

const copa = [1959, 1962, 1970, 1994, 2002];

copa.forEach(function (copa) {
    console.log(`O Brasil ganhou a copa de ${copa}`);
})

let fruit = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (let item = 0; item < fruit.length; item++) {
    console.log(fruit[item]);
    if (fruit[item] === 'Pera') {
        break;
    }
}

let arrayNovo = fruit.pop()
console.log(arrayNovo)