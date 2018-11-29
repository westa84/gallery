(function () {
    class ThumbList {
        constructor() {
            const $el = document.createElement('div');
            $el.setAttribute('id', 'thumb-list');
            const $app = document.querySelector('#app');
            $app.append($el);
        }

    }

    window.gallery = window.gallery || {};
    window.gallery.ThumbList = ThumbList;

})();