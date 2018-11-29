(function () {
    class Zoom {
        display(image) {
            const $zoom = document.querySelector('.zoom');
            if ($zoom) {
                $zoom.remove();
            }

            const $el = document.createElement('img');
            $el.setAttribute('src', image);
            $el.classList.add('zoom');
            document.body.append($el);
        }
    }

    window.gallery = window.gallery || {};
    window.gallery.Zoom = Zoom;

})();