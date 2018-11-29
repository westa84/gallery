(function () {
    const db = {
        photos: [
            {
                thumb: 'https://picsum.photos/120/60?image=0',
                image: 'https://picsum.photos/300/150?image=0',
            },
            {
                thumb: 'https://picsum.photos/120/60?image=4',
                image: 'https://picsum.photos/301/150?image=4',
            },
            {
                thumb: 'https://picsum.photos/120/60?image=30',
                image: 'https://picsum.photos/302/150?image=30',
            },
        ]
    };

    window.gallery = window.gallery || {};
    window.gallery.db = db;

})();