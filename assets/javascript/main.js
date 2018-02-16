hax0r = {
    ready : function(fn)
    {
        if ( document.readyState != 'loading' ) {
            fn();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function () {
                if ( document.readyState != 'loading' ) {
                    fn();
                }
            });
        }
    },
    addEvent : function (evnt, elem, func)
    {
        if (elem.addEventListener) {
            elem.addEventListener(evnt,func,false);
        } else if (elem.attachEvent) {
            elem.attachEvent("on"+evnt, func);
        } else {
            elem[evnt] = func;
        }
    },
    addClass : function(el, className)
    {
        if ( el.classList ) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    },
    hasClass : function(el, className)
    {
        return ( el.classList ) ? el.classList.contains(className) : new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    },
    removeClass : function(el, className)
    {
        if ( el.classList ) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
}

window.hx = hax0r;
hx.ready(function()
{
    hx.removeClass(document.querySelector('nav.nav'), 'hide');
    hx.addEvent('click', document.querySelector('nav.nav > a'), function(e)
    {
        e.preventDefault();

        if ( hx.hasClass(e.currentTarget, 'is-on') ) {
            hx.removeClass(e.currentTarget, 'is-on');
            hx.removeClass(document.querySelector('ul.nav-list'), 'opended');
            hx.addClass(document.getElementById('veil'), 'hide');
        } else {
            hx.removeClass(document.getElementById('veil'), 'hide');
            hx.addClass(document.querySelector('ul.nav-list'), 'opended');
            hx.addClass(e.currentTarget, 'is-on');
        }
    });

    var shareButtons = document.getElementsByClassName("share-button");

    for ( var i = 0; i < shareButtons.length; i++ ) {
        hx.addEvent('click', shareButtons[i], function(e)
        {
            ga("send", "event", {
                eventCategory: "Outbound Link",
                eventAction: "click",
                eventLabel: e.target.href,
                transport: "beacon"
            });
        });
    }
})