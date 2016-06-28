'use strict'; {

let mod = wgt.cssVar;

mod.setIfUnset = (el, name, type) => {
    let val = el.style.getPropertyValue(`--${name}`);

    switch(type) {
        case 'int': val = parseInt(val); break;
        case 'float': val = parseFloat(val); break;
        case undefined: break;

        default: throw new Error(`Invalid type: ${type}`);
    }

    return val;
};

}
