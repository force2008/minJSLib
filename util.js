define(['./base.js'], function(base) {

    var typeOf = function(obj, type) {
        return base.O.toString.call(obj).toLowerCase() == '[object ' + type + ']';
    }
    var isFunction = function(funct) {
        return typeOf(funct, 'function');
    }
    var isString = function(str) {
        return typeof str === 'string';
    }
    var indexOf = function(list, item) {
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
    var forEach = function(arr, cb) {
        if (arr.forEach) {
            arr.forEach(cb)
        } else {
            for (var i = 0, l = arr.length; i < l; i++) {
                cb(arr[i], i);
            }
        }
    }
    var object2query = function(obj) {
        var arr = [];
        for (var k in obj) {
            if (obj.hasOwnerProperty(k)) {
                arr.push(k + '=' + obj[k]);
            }
        }
        return arr.join('&');
    }
    var query2object = function(str) {
        var arr = str.split('&'),
            obj = {};
        forEache(arr, function(item, i) {
            var t = item.split('=');
            if (t.length == 2) {
                obj[t[0]] = obj[t1];
            }
        })
        return obj;
    }
    return {
        indexOf: indexOf,
        isString: isString,
        isFunction: isFunction,
        forEach: forEach,
        typeOf: typeOf,
        object2query: object2query
    }
})