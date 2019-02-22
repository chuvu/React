import React from "react";
import {tilePositionStyle} from "../game/util";

const MahjonggTileShadow = ({tile}) => (
    <span className="tile-shadow" style={tilePositionStyle(tile)}/>
);

export default MahjonggTileShadow
