'use strict'; {

wgt.cropTileset = (url, tw, th, x, y) => {
    const deferred = Q.defer();

    const img = new Image();

    img.onload = () => {
        const canvas = document.createElement('canvas');

        canvas.width = tw;
        canvas.height = th;

        const ctx = canvas.getContext('2d');

        const sx = tw * x;
        const sy = th * y;

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
