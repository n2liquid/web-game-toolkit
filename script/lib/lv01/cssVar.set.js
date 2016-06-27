'use strict'; {

let mod = wgt.cssVar;

mod.set = function() {
    let args = wgt.overloaded(arguments, {
        2: ['el', 'hash'],
        3: ['el', 'name', 'val'],
    });

    let el = args.el;

    if(args.hash) {
        Object.keys(args.hash).forEach(
            k => mod.set(el, k, args.hash[k])
        );

        return;
    }

    let { name, val } = args;

    let originalStyle = el.style.cssText.trim();

    if(originalStyle && !originalStyle.endsWith(';')) {
        originalStyle += ';';
    }

    let re = new RegExp(`((^| *;| )--${name} *): *([^;$]+)`, 'g');
    let reRes = re.exec(originalStyle);

    if(!reRes) {
        el.style = originalStyle + ' --' + name + ': ' + val + ';';
    }
    else {
        el.style = originalStyle.replace(
            re, `$1: ${val}`
        );
    }
};

}
