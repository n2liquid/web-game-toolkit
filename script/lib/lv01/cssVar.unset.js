'use strict'; {

const mod = wgt.cssVar;

mod.unset = (el, name) => {
    if(Array.isArray(name)) {
        name.forEach(name => {
            mod.unset(el, name);
        });

        return;
    }

    let originalStyle = el.style.cssText.trim();

    if(originalStyle && !originalStyle.endsWith(';')) {
        originalStyle += ';';
    }

    let re = new RegExp(`((^| *;| )--${name} *): *([^;$]+)`, 'g');
    let reRes = re.exec(originalStyle);

    if(reRes) {
        el.style = originalStyle.replace(re, '');
    }
};

}
