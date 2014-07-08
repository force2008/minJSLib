require(['event'], function(v) {
    v.addEvent('btn', 'click', function(event) {
        console.log(v.get(event));
    })
})