'use strict'; {

let re = /\/([^\/]+):[0-9]+:[0-9]+$/;

wgt.getFileName = () => {
    let stack = new Error().stack;
    let callerLine = stack.split('\n')[2];
    let reRes = re.exec(callerLine);

    if(!reRes) {
        throw new Error("Can't parse stacktrace or caller file name.");
    }

    return reRes[1];
};

}
