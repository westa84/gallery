//consoleLog('123');

//const gallery = {};

function setup() {

    const zoom = new gallery.Zoom();

    gallery.db.photos.forEach(({ thumb, image }) => {
        const photo = new gallery.Photo(thumb);
        photo.render();

        //photo.addEventListener('click', () => {
            zoom.display(image);
        //});
    });
}

window.addEventListener('DOMContentLoaded', setup);