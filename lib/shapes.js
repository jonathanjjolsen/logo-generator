class shape{
    setColor(color) {
        this.color=(color);
    }
}

class Circle extends Shape{
    render(){
        return `circle cx="50%" cy ="50%" r="100%" height=100%" width="100%" fill=${this.color}">`
    }
}

module.exports = {Circle}