import React from "react";

import { Tile } from "../tile/Tile";

/* Receive one prop: an array of objects to render as a list */
export const TileList = ({ tiles }) => {
  return (
    <div>
      {/* map callback has an object from the array
      as the first parameter and that objects index
      as the second parameter */}

      {/* Return the Tile component with the object 
      parameter passed as a prop (tile) and the index
      parameter used as the components key */}
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};
