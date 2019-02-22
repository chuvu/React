import {NEW_GAME, CLICK_TILE} from "../actions";
import {createNewGame, collectTiles, processClick} from "../game/mahjongg";

const initialState = {
    tiles: [],
    tilesArray: [],
    selectedTile: null
};

const MahjonggBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_GAME:
            let tiles = createNewGame();
            state = {
                tiles: tiles,
                tilesArray: collectTiles(tiles),
                selectedTile: null
            };
            break;
        case CLICK_TILE:
            if (action.tile.clickable) {
                let res = processClick(state.tiles, state.selectedTile, action.tile);
                state = {
                    tiles: res.tiles,
                    tilesArray: collectTiles(res.tiles),
                    selectedTile: res.selectedTile
                };
            }
            break;
    }
    return state
};

export default MahjonggBoardReducer
