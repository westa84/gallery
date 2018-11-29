const { Title } = require('./components/title.component');
const { Zoom } = require('./components/zoom.component');
const { ThumbList } = require('./components/thumb-list.component');
const { PhotosService } = require('./services/photos.service');


function setup() {
    const title = new Title();
    title.render();

    const zoom = new Zoom();

    const thumbList = new ThumbList();


    thumbList.on('click:thumb', ({ image }) => {
        zoom.render(image);
    });

    PhotosService.fetchPhotosAsync()
        .then(({ photos }) => {
            thumbList.render(photos);
        });
}

window.addEventListener('DOMContentLoaded', setup);