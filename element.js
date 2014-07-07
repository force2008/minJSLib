define(['./util.js'], function(u) {
    var get = function(elm) {
        if (u.isString(elm)) {
            return document.getElementById(elm);
        } else {
            return elm;
        }
    };
    var getByClassName = function(elm, className) {
        elm = get(elm);
        if (elm.getElementsByClassName) {
            return elm.getElementsByClassName(className);
        } else if ( !! _element.querySelectorAll) {
            _element.querySelectorAll(className)
        } else {
            var _result = [],
                _regexp = new RegExp('(\\s|^)(?:' + _event.args[1]
                    .replace(/\s+/g, '|') + ')(?=\\s|$)');
            u.forEach(_element.getElementsByTagName('*'),
                function(_node) {
                    if (_regexp.test(_node.className))
                        _result.push(_node);
                });
            return _result;
        }
    };
    return {
        get: get,
        getByClassName: getByClassName
    }
})