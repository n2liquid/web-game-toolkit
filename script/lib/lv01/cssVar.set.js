'use strict'; {

const mod = wgt.cssVar;

mod.set = function() {
    const args = wgt.overloaded(arguments, {
        2: ['el', 'hash'],
        3: ['el', 'name', 'val'],
    });

    const el = args.el;

    if(args.hash) {
        Object.keys(args.hash).forEach(
            k => mod.set(el, k, args.hash[k])
        );

        return;
    }

    const { name, val } = args;

    const originalStyle = el.style.cssText.trim();

    if(originalStyle && !originalStyle.endsWith(';')) {
        originalStyle += ';';
    }

    const re = new RegExp(`((^| *;| )--${name} *): *([^;$]+)`, 'g');
    const reRes = re.exec(originalStyle);

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
