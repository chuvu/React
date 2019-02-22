export const tilePositionStyle = (tile) => {
    return {
        left: 50 + 18 * tile.i,
        top: 48 + 24 * tile.j,
        zIndex: 2 * tile.k + 1
    };
};
