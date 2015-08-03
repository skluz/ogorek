var One = function() {
    this.field = 'field one';
    this.sayHello = function() {
        this.say('Hello');
    }
    this.say = function(world) {
        console.log(world);
    }
    var Two = function() {
        this.field = 'field two';
    }
    this.two = new Two();

}

module.exports = One;