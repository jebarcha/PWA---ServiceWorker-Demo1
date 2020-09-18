


self.addEventListener('fetch', event => {

    const respuesta = fetch(event.request)
        .then(resp => {
            return resp.ok ? resp : fetch('img/main.jpg');
        });

    // const respuesta = fetch(event.request)
    //     .then(resp => resp.ok ? resp : fetch('img/main.jpg'));

    event.respondWith(
        respuesta
    );
});
