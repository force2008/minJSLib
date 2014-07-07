define(['./element.js'], function(e) {
    var addEvent = (function(elm, type, handler, isCap) {
        addEvent = document.all ? function(elm, type, handler, isCap) {
            elm = e.get(elm);
            elm.attachEvent('on' + type, handler);
        } :
            function(elm, type, handler, isCap) {
                elm = e.get(elm);
                elm.addEventListener(type, handler, isCap || false);
        }
        return addEvent
    })();
    var stop = function(event) {
        event = event || window.event;
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        if (event.preventDefault) {
            event.preventDefault()
        } else {
            event.returnValue = false;
        }
    }
    var get = function(event) {
        event = event || window.event;
        return event.srcElement || event.target;
    };
    return {
        addEvent: addEvent,
        get: get,
        stop: stop
    }
})