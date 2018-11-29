(function () {

    class PhotosService {
        fetchPhotos() {
           return window.fetch('backend/db.json')
                .then((response) => {
                    return response.json();
                })
        }
    }
    window.gallery = window.gallery || {};
    window.gallery.PhotosService = new PhotosService();
})();