export const NEW_GAME = 'NEW_GAME';
export function newGame() {
    return {type: NEW_GAME}
}

export const CLICK_TILE = 'CLICK_TILE';
export function clickTile(tile) {
    return {type: CLICK_TILE, tile}
}
