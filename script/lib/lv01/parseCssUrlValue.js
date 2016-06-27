'use strict'; {

let re = /^url\("([^"]*)"\)$/;

wgt.parseCssUrlValue = url => {
    url = url.trim();

    let reRes = re.exec(url);

    if(!reRes) {
        throw new Error(`Cannot parse CSS URL value: ${url}`);
    }

    return reRes[1];
};

}
