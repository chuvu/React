import "../css/style.less";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store";
import {newGame} from "./actions";
import MahjonggGame from "./components/MahjonggGame";

// configure store
const store = configureStore();

render(
    <Provider store={store}>
        <MahjonggGame />
    </Provider>,
    document.getElementById('mahjongg')
);

store.dispatch(newGame());
