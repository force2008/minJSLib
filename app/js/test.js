//Load common code that includes config, then load the app logic for this page.
// require(['./common'], function(common) {
//     require(['app1/test']);
// });
requirejs.config({
    baseUrl: 'js/lib/nejmin',
    paths: {
        app1: '../../app'
    }
});

require(['event'], function(v) {
    v.addEvent('btn', 'click', function(event) {
        console.log(v.get(event));
    })
})