


self.addEventListener('fetch', event => {

    // if (event.request.url.includes('style.css')) {
    //     event.respondWith(null);
    // } else {
    //     event.respondWith(fetch(event.request));
    // }

    //console.log(event.request.url.includes('.jpg'));

    if (event.request.url.includes('.jpg')) {
        console.log(event.request.url);

        //let fotoReq = fetch('img/main.jpg');  //path relativo
        //let fotoReq = fetch(event.request.url);  //url completo incluyendo el http..
        let fotoReq = fetch(event.request);  //envio completo del request

        event.respondWith(fotoReq);
    }

});

