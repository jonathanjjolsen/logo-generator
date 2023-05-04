//Class shape to set the fill color of the shape
class shape{
    setColor(color) {
        this.color=(color);
    }
}

//Circle class to create the shape of the logo background
class circle extends shape{
    render(){
        return `circle cx="50%" cy ="50%" r="100%" height=100%" width="100%" fill=${this.color}">`
    }
}

//Exports the shape to the index.js for use
module.exports = {circle}