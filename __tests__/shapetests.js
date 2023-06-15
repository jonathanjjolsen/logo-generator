const {Circle,Triangle,Square} = require('../lib/shapes.js')

describe('circle', () => {
    test('Render Circle', () => {
        const shape = new Circle();
        let color =('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy ="50%" r="40%" height="100%" width="100%" fill="${color}"></circle>`)
    })
})
