import React from 'react'; 
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, setColor}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color: setColor}} />
      <div className="create-button" onClick={onCreate}>추가</div>
    </div>
  )
}

export default Form;