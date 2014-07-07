require(['../util'], function(util) {

    describe('Test util function', function() {
        it('is function', function() {
            var f = function() {};
            var isFunction = util.isFunction(f);
            expect(true).toBe(isFunction);

            var s = 'string';
            var isString = util.isString(s);
            expect(true).toBe(isString);
        })
    })
})