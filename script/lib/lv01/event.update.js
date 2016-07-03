'use strict'; {

const mod = wgt.event;

mod.update = ev => {
    const currentPage = ev.pages.find(
        page => !page.testConditions || page.testConditions(ev)
    );

    if(currentPage === ev.currentPage) {
        return;
    }

    ev.currentPage = currentPage;

    if(!currentPage) {
        if(ev.$spr) {
            ev.$spr.remove();
            delete ev.$spr;
        }

        return;
    }

    if(ev.$spr) {
        ev.$spr.attr('wgt-spriteset-id', currentPage.spritesetId);
    }
    else {
        ev.$spr = wgt.sprite.create(
            ev.initialParent,
            currentPage.spritesetId,
            ev.initialPos[0],
            ev.initialPos[1]
        );

        ev.$spr.addClass(`wgtEv${ev.name}`);
    }

    if(!currentPage.spritesetId && currentPage.tsCoords) {
        wgt.tilemap.setTile(
            ev.$spr,
            currentPage.tsCoords[0],
            currentPage.tsCoords[1]
        );
    }
    else {
        wgt.tilemap.unsetTile(ev.$spr);
    }

    ev.$spr.data('wgtEvent', ev);
};

}
