'use strict'; {

wgt.strPad = (side, val, len, char_) => {
    val = val.toString();

    len -= val.length;

    if(len <= 0) {
        return val;
    }

    char_ = char_.toString().charAt(0);

    let padStr = new Array(len + 1).join(char_);

    switch(side) {
        case 'left':
            val = padStr + val;
            break;

        case 'right':
            val += padStr;
            break;

        default:
            throw new Error(`Unknown side: ${side}`);
    }

    return val;
};

}
