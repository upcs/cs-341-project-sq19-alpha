const extra = require('./extra');

describe('extra (info page) suite', function () {
    test('test function calls', () => {
        var slides = document.getElementsByClassName("mySlides");
        expect(extra.showSlides(1)).toContain(slides);
    });
});