


self.addEventListener('fetch', event => {

    if (event.request.url.includes('style.css')) {

        let respuesta = new Response(`
            body {
                background-color: red !important;
                color: pink;
            }
        `, {
            headers: {
                'content-type': 'text/css'
            }
        });

        event.respondWith(respuesta);

    }

});

