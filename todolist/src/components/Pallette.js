import React, {Component} from 'react';
import '../css/Pallette.css';


class Pallette extends React.Component{  
  render(){
    const colors = [
      '#000',
      '#F7969D', 
      '#78D6BE',
      '#88BCEB'
    ]    
    return(
      <div className="Pallette">
        {colors.map((color, idx)=><div className="colorbox" key={idx}></div> )}        
      </div>
    )
  }
}

export default Pallette;