import React from "react";

// Receive one prop: tile object
export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {/* Using Object.values() method to generate an array of the 
      object's values, then using map() to iterate over the array */}

      {/* Render a paragraph element for each of the object's values 
      and set className of 'tile-title' to the first element and 'tile' 
      to all other paragraph elements*/}
      {Object.values(tile).map((value, index) => (
        <p key={index} className={`${index === 0 ? 'tile-title' : ''} tile`}>{value}</p>
      ))}
    </div>
  );
};
