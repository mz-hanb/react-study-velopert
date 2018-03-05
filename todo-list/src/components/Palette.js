import React from 'react'; 
import './Palette.css';


const ColorBox = ({color, onSelect}) => {  
  return(
    <span
      className="color-box"
      style={{background: color }}
      data-color={color}
      onClick ={ (e) => {        
        onSelect(color);
      }}
      ></span>
  )
}

const Palette = ({colors, onSelect}) => {      
  return (
    <div className="palette">
      {colors.map( (color, idx) => 
        ( <ColorBox key={idx} color={color} onSelect={onSelect} /> )
      )}
    </div>
  )
}

export default Palette;

