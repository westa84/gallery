(function () {

    // IIFE
    // Immediately-invoked function expression

    class Photo {
        constructor(url) {
            this.url = url;
        }
        render() {
            const $el = document.createElement('img');
            $el.setAttribute('src', this.url);
            document.body.append($el);
        }
    }

    window.gallery = window.gallery || {};
    window.gallery.Photo = Photo;

})();