const width = 30;
const height = 16;
const depth = 5;

// create 3D array of tiles
export const createBoard = () => {
    let tiles = [];
    for (let i = 0; i < width; i++) {
        tiles[i] = [];
        for (let j = 0; j < height; j++) {
            tiles[i][j] = [];
            for (let k = 0; k < depth; k++) {
                tiles[i][j][k] = null;
            }
        }
    }
    return tiles;
};

// put tile placeholders into 3D board
export const createLayout = (tiles) => {
    let i, j, k;

    // Layer 0
    for (i = 1; i <= 12; i++) {
        tiles[i * 2][0 * 2][0] = -1;
        tiles[i * 2][3 * 2][0] = -1;
        tiles[i * 2][4 * 2][0] = -1;
        tiles[i * 2][7 * 2][0] = -1;
    }
    for (i = 3; i <= 10; i++) {
        tiles[i * 2][1 * 2][0] = -1;
        tiles[i * 2][6 * 2][0] = -1;
    }
    for (i = 2; i <= 11; i++) {
        tiles[i * 2][2 * 2][0] = -1;
        tiles[i * 2][5 * 2][0] = -1;
    }
    tiles[0 * 2][3 * 2 + 1][0] = -1;
    tiles[13 * 2][3 * 2 + 1][0] = -1;
    tiles[14 * 2][3 * 2 + 1][0] = -1;
    // Layer 1
    for (i = 4; i <= 9; i++) {
        for (j = 1; j <= 6; j++) {
            tiles[i * 2][j * 2][1] = -1;
        }
    }
    // Layer 2
    for (i = 5; i <= 8; i++) {
        for (j = 2; j <= 5; j++) {
            tiles[i * 2][j * 2][2] = -1;
        }
    }
    // Layer 3
    for (i = 6; i <= 7; i++) {
        for (j = 3; j <= 4; j++) {
            tiles[i * 2][j * 2][3] = -1;
        }
    }
    // Layer 4
    tiles[6 * 2 + 1][3 * 2 + 1][4] = -1;

    return tiles;
};

// put tiles in random order
export const randomizeTiles = (tiles) => {
    let i, j, k, N, idx;
    for (N = 1; N <= 34; N++) {
        for (idx = 0; idx < 4; idx++) {
            do {
                i = Math.floor((Math.random() * width));
                j = Math.floor((Math.random() * height));
                k = Math.floor((Math.random() * depth));
            } while (!tiles[i][j][k] || tiles[i][j][k] !== -1);
            tiles[i][j][k] = {i: i, j: j, k: k, tile: N, selected: false, clickable: false};
        }
    }

    for (N = 35; N <= 42; N++) {
        do {
            i = Math.floor((Math.random() * width));
            j = Math.floor((Math.random() * height));
            k = Math.floor((Math.random() * depth));
        } while (!tiles[i][j][k] || tiles[i][j][k] !== -1);
        tiles[i][j][k] = {i: i, j: j, k: k, tile: N, selected: false, clickable: false};
    }

    return tiles
};

export const updateTiles = (tiles) => {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            for (let k = 0; k < depth; k++) {
                if (!tiles[i][j][k])
                    continue;
                tiles[i][j][k].clickable = isTileFree(tiles, {i, j, k});
            }
        }
    }

    return tiles;
};


export const createNewGame = () =>
    updateTiles(randomizeTiles(createLayout(createBoard())));


// collect 3D tiles array into 1D list
export const collectTiles = (tiles) => {
    let tilesList = [];
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            for (let k = 0; k < depth; k++) {
                if (tiles[i][j][k]) {
                    tilesList.push(tiles[i][j][k]);
                }
            }
        }
    }
    return tilesList;
};

function isCoordValid(i, j, k) {
    return (i >= 0 && i < width) && (j >= 0 && j < height) && (k >= 0 && k < depth);
}

function isTileFree(tiles, tile) {
    let i0, j0;
    let i = tile.i;
    let j = tile.j;
    let k = tile.k;

    // check upper layer
    if (k < depth - 1) {
        for (i0 = -1; i0 <= 1; i0++) {
            for (j0 = -1; j0 <= 1; j0++) {
                if (isCoordValid(i + i0, j + j0, k + 1)) {
                    if (tiles[i + i0][j + j0][k + 1])
                        return false;
                }
            }
        }
    }

    let hasLeft = false;
    let hasRight = false;

    for (j0 = -1; j0 <= 1; j0++) {
        if (isCoordValid(i - 2, j + j0, k)) {
            if (tiles[i - 2][j + j0][k]) {
                hasLeft = true;
            }
        }

        if (isCoordValid(i + 2, j + j0, k)) {
            if (tiles[i + 2][j + j0][k]) {
                hasRight = true;
            }
        }
    }

    // Check left/right
    return !(hasLeft && hasRight);
}

function areTilesEqual(tile1, tile2) {
    // ordinary tiles
    if (tile1 < 35 && tile2 < 35)
        return (tile1 == tile2);

    // all seasons are equal
    if (tile1 >= 35 && tile1 <= 38 && tile2 >= 35 && tile2 <= 38)
        return true;

    // all flowers are equal
    if (tile1 >= 39 && tile1 <= 42 && tile2 >= 39 && tile2 <= 42)
        return true;

    // otherwise
    return false;
}

export const processClick = (tiles, selectedTile, tile) => {
    let t = tiles[tile.i][tile.j][tile.k];

    if (!selectedTile) {
        t.selected = true;
        selectedTile = t;
    }
    else {
        let s = tiles[selectedTile.i][selectedTile.j][selectedTile.k];

        if (selectedTile.i == tile.i && selectedTile.j == tile.j && selectedTile.k == tile.k) {
            selectedTile = null;
            t.selected = false;
        }
        else if (areTilesEqual(s.tile, t.tile)) {

            // remove tiles
            tiles[tile.i][tile.j][tile.k] = null;
            tiles[selectedTile.i][selectedTile.j][selectedTile.k] = null;

            // remove selection
            selectedTile = null;
        }
    }


    return {tiles: updateTiles(tiles), selectedTile}
};
