import {createStore, combineReducers} from "redux";
import MahjonggBoardReducer from "./reducers/MahjonggBoard";


export default function configureStore() {
    return createStore(
        combineReducers({
            board: MahjonggBoardReducer
        })
    );
};
