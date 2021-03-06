(function () {
    class ThumbList {
        constructor() {
            EventEmitter.mixin(this);

            const $el = document.createElement('div');
            $el.setAttribute('id', 'thumb-list');

            const $app = document.querySelector('#app');
            $app.append($el);
        }


        render(photos) {
            photos.forEach(({ thumb, image }) => {
                const photo = new gallery.Thumb(thumb);
                photo.render();

                photo.on('click', () => {
                    this.trigger('click:thumb', { image });
                });
            });
        }

    }

    window.gallery = window.gallery || {};
    window.gallery.ThumbList = ThumbList;
})();