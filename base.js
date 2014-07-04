var P = function(namespace) {
    if (!namespace || !namespace.length) return null; //["ui","package"]
    var _package = window;
    for (var a = namespace.split('.'),
            l = a.length, i = (a[0] == 'window') ? 1 : 0; i < l; _package = _package[a[i]] = _package[a[i]] || {}, i++); //window.ui => _package
    return _package;
}
var O = {};