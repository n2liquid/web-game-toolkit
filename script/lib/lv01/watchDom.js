'use strict'; {

const watches = [];

wgt.watchDom = spec => {
    watches.push(spec);
};

const watchesFor = (event, el, attrName) => watches.filter(w => {
    switch(event) {
        case 'attr':
            if(w.attr !== attrName) {
                return false;
            }
            break;

        case 'added':
        case 'removed':
            if(!w[event]) {
                return false;
            }
            break;

        default:
            throw new Error(`Unknown event: ${event}`);
    }

    if(w.is && !$(el).is(w.is)) {
        return false;
    }

    return true;
});

const fire = function(event, el, attrName) {
    const args = [...arguments].slice(2);

    watchesFor(event, el, attrName).forEach(
        w => w.fn(el, event, ...args)
    );
};

const observer = new MutationObserver(mutations => mutations.forEach(m => {
    m.attributeName && fire('attr', m.target, m.attributeName);

    Array.from(m.addedNodes).forEach(el => fire('added', el));
    Array.from(m.removedNodes).forEach(el => fire('removed', el));
}));

observer.observe(document, {
    attributes: true,
    subtree: true,
    childList: true,
});

}
