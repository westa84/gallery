function setup() {

    const zoom = new gallery.Zoom();

    const thumbList = new gallery.ThumbList();


    thumbList.on('click:thumb', ({ image }) => {
        zoom.render(image);
    });

    gallery.PhotosService.fetchPhotos()
        .then(({ photos }) => {
            thumbList.render(photos);
        });
}

window.addEventListener('DOMContentLoaded', setup);