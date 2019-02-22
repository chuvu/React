import React from "react";
import {connect} from "react-redux";
import MahjonggTile from "./MahjonggTile";
import MahjonggTileShadow from "./MahjonggTileShadow";
import classnames from "classnames";
import {clickTile} from "../actions";

const mapStateToProps = (state, ownProps) => {
    return {
        tiles: state.board.tilesArray
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickTile: (tile) => dispatch(clickTile(tile))
    }
};

const template = ({tiles, onClickTile}) => (
    <div className={classnames({board: true})}>
        {tiles.map((tile) => (
            <MahjonggTileShadow tile={tile}/>
        ))}
        {tiles.map((tile) => (
            <MahjonggTile tile={tile} onClickHandler={onClickTile}/>
        ))}
    </div>
);

const MahjonggBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(template);

export default MahjonggBoard
