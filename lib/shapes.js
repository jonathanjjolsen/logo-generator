//Used to set the fill color of the background shape
class ShapeColor{
    constructor(){
        this.color = '';
    }
    setColor(color) {
        this.color=(color);
    }
}

//Circle class to set the shape of the logo background
class Circle extends ShapeColor{
    render(){
        return `<circle cx="50%" cy ="50%" r="40%" height="100%" width="100%" fill="${this.color}"></circle>`
    }
}

//Triangle class to set the shape of the logo background
class Triangle extends ShapeColor{
    render(){
        //Uses points to form the polygon into a triangle shape
        return `<polygon points="200,0 400,250 0,250" fill="${this.color}"></polygon>`
    }
}

//Square class to set the shape of the logo background
class Square extends ShapeColor{
    render(){
        return`<rect x="100" y="30" height="200" width="200" fill="${this.color}"></rect>`
    }
}

//Exports the shape to the index.js for use
module.exports = {Circle,Triangle, Square}