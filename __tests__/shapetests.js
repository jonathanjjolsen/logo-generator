const {Circle,Triangle,Square} = require('../lib/shapes.js')

//Tests for circle by creating a new circle and setting its color value to blue
describe('circle', () => {
    test('Generate Circle', () => {
        const shape = new Circle();
        let color =('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy ="50%" r="40%" height="100%" width="100%" fill="${color}"></circle>`)
    })
})

describe('triangle', () => {
    test('Generate Triangle', () => {
        const shape = new Triangle();
        let color =('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="200,0 400,250 0,250" fill="${color}"></polygon>`)
    })
})

describe('square', () => {
    test('Generate Square', () => {
        const shape = new Square();
        let color =('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="100" y="30" height="200" width="200" fill="${color}"></rect>`)
    })
})
