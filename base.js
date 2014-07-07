define(function() {
    /**
     * name space
     */
    var p = function(namespace) {
        if (!namespace || !namespace.length) return null; //["ui","package"]
        var package = window;
        for (var a = namespace.split('.'),
                l = a.length, i = (a[0] == 'window') ? 1 : 0; i < l; package = package[a[i]] = package[a[i]] || {}, i++); //window.ui => package
        return package;
    }

    return {
        O: {},
        P: p,
        f: function() {
            return !1
        }
    }
})