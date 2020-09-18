


self.addEventListener('fetch', event => {

    if (event.request.url.includes('main.jpg')) {

        let respuesta = fetch('img/main-patas-arriba.jpg',
            {
                headers: {
                    'content-type': 'image/jpg'
                }
            });

        event.respondWith(respuesta);

    }

});

