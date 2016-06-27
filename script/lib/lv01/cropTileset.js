'use strict'; {

wgt.cropTileset = (url, tw, th, x, y) => {
    let deferred = Q.defer();

    let img = new Image();

    img.onload = () => {
        let canvas = document.createElement('canvas');

        canvas.width = tw;
        canvas.height = th;

        let ctx = canvas.getContext('2d');

        let sx = tw * x;
        let sy = th * y;

        ctx.drawImage(img, sx, sy, tw, th, 0, 0, tw, th);

        canvas.toBlob(blob => {
            deferred.resolve(blob);
        });
    };

    img.onerror = err => {
        deferred.reject(err);
    };

    img.src = url;

    return deferred.promise;
};

}
