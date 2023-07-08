// let names = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
// // names.pop()

// function replacing() {
//     for (let x = 0; x < names.length; x++) {
//         if (names[x].indexOf('Max') / 2 === 0) {
//             console.log('even')
//         } else if (names[x].indexOf('Reboot') / 2 === 0) {
//             console.log('even')
//         } else if (names[x].indexOf('Trucks') / 2 === 0) {
//             console.log('even')
//         } else {
//             console.log('not even')
//         }
//     }
// }

// replacing()

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i+2) {
        let (arr[i].splice(i,1,'even index'))
    }
    console.log(arr)
}

replaceEvens(arr)

// function replaceEvens(arr){
//     for (let i = 0; i < arr.length; i+2) {
//         qwerty = arr.remove(i);
//     }
//     console.log(qwerty)
// }

// replaceEvens(arr)