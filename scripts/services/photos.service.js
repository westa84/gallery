(function () {

    class PhotosService {
        fetchPhotos() {
            return window.fetch('backend/db.json')
                .then((response) => {
                    return response.json();
                })
        }

        async fetchPhotosAsync() {
            const response = await window.fetch('backend/db.json');
            const data = await response.json();
            return data;
        }
    }

    window.gallery = window.gallery || {};
    window.gallery.PhotosService = new PhotosService();

})();