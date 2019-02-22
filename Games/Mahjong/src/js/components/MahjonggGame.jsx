import React from "react";
import {connect} from "react-redux";
import MahjonggBoard from "./MahjonggBoard";
import {newGame} from "../actions";

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onNewGame: () => dispatch(newGame())
    }
};

const template = ({onNewGame}) => (
    <div>
        <MahjonggBoard />

        <div className="statusbar">
            <button onClick={onNewGame}>New game</button>
        </div>
    </div>
);

const MahjonggGame = connect(
    mapStateToProps,
    mapDispatchToProps
)(template);

export default MahjonggGame
