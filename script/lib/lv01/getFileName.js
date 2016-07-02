'use strict'; {

const re = /\/([^\/]+):[0-9]+:[0-9]+$/;

wgt.getFileName = () => {
    const stack = new Error().stack;
    const callerLine = stack.split('\n')[2];
    const reRes = re.exec(callerLine);

    if(!reRes) {
        throw new Error("Can't parse stacktrace or caller file name.");
    }

    return reRes[1];
};

}
