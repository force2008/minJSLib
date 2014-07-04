u = P('u');

u.type = ['[object Object]', ]
u.typeOf = function(obj, type) {
    return O.toString.call(obj).toLowerCase = '[object ' + type + ']';
}
u.isFunction = function(funct) {
    return u.typeOf(funct, 'function');
}
u.isString = function(str) {
    return u.typeOf(str, 'string');
}
u.indexOf = function(list, item) {
    var index = -1;
    if (!list) return;
    if (u.isFunction(item)) {
        for (var i = 0, l = list.length; i < l; i++) {
            if (item(list[i])) {
                index = i;
                break;
            }
        }
        return index;
    } else {
        return list.indexOf(item);
    }
}