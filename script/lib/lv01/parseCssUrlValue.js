'use strict'; {

const re = /^url\("([^"]*)"\)$/;

wgt.parseCssUrlValue = url => {
    url = url.trim();

    const reRes = re.exec(url);

    if(!reRes) {
        throw new Error(`Cannot parse CSS URL value: ${url}`);
    }

    return reRes[1];
};

}
