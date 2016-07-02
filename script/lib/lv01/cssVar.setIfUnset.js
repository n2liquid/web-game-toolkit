'use strict'; {

const mod = wgt.cssVar;

mod.setIfUnset = function() {
    const args = wgt.overloaded(arguments, {
        2: ['el', 'hash'],
        3: ['el', 'name', 'val'],
    });

    const el = args.el;

    if(args.hash) {
        Object.keys(args.hash).forEach(
            k => mod.setIfUnset(el, k, args.hash[k])
        );

        return;
    }

    const name = args.name;

    if(mod.get(el, name) !== '') {
        return;
    }

    mod.set(el, name, args.val);
};

}
