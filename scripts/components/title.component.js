class Title {
    render() {
        const $el = document.createElement('h2');
        $el.textContent = 'Galeria';
        document.querySelector('#app').append($el);
    }
}
module.exports = { Title };