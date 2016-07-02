'use strict'; {

let mod = wgt.cssVar;

mod.setIfUnset = function() {
    let args = wgt.overloaded(arguments, {
        2: ['el', 'hash'],
        3: ['el', 'name', 'val'],
    });

    let el = args.el;

    if(args.hash) {
        Object.keys(args.hash).forEach(
            k => mod.setIfUnset(el, k, args.hash[k])
        );

        return;
    }

    let name = args.name;

    if(mod.get(el, name) !== '') {
        return;
    }

    mod.set(el, name, args.val);
};

}
