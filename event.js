var Event = klass(function() {
    this.init();
    this.reset();
}).methods({
    init: function() {
        console.log('aaa');
    },
    batEvent: function() {
        console.log('batevent');
    },
    reset: function() {
        console.log('reset');
    }
}).statics({
    pool: [],
    allocate: function() {
        var instance = this.pool.length && this.pool.shift();
        if (!instance) {
            instance = new this;
        }
        console.log('allocate');
        instance.reset();
    }
})
Event.allocate();