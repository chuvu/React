import React from "react";
import classnames from "classnames";
import {tilePositionStyle} from "../game/util";

const MahjonggTile = ({tile, onClickHandler}) => (
    <span
        className={classnames({
            tile: true,
            [`tile-${tile.tile}`]: true,
            selected: tile.selected,
            clickable: tile.clickable
        })}
        style={tilePositionStyle(tile)}
        onClick={(event)=>onClickHandler(tile)}
    />
);

export default MahjonggTile
