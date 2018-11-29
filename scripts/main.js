function setup() {
    const zoom = new gallery.Zoom();
    const thumbList = new gallery.ThumbList();
    thumbList.render();
    thumbList.on('click:thumb', ({ image }) => {
        zoom.display(image);
    });

}

window.addEventListener('DOMContentLoaded', setup);