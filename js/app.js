
// if ('serviceWorker' in navigator) {
//     console.log('Podemos usarlo!!');
// }

// Confirmar si podemos usar el SW
if (navigator.serviceWorker) {
    //console.log('Podemos usar el service Worker!');
    navigator.serviceWorker.register('/sw.js');

}

