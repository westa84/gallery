//consoleLog('123');

//const gallery = {};

function setup() {

    const zoom = new gallery.Zoom();
    const thumbList = new gallery.ThumbList();

    //gallery.db.photos.forEach(({ thumb, image }) => {
        //const photo = new gallery.Thumb(thumb);
        //photo.render();

        //photo.addEventListener('click', () => {
            //zoom.display(image);
        //});
    //});
}

window.addEventListener('DOMContentLoaded', setup);