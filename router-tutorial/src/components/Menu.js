import React from 'react'; 
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  // const activeStyle = true;
  return(
    <div>
      <ul className="menu">
        <li className="item"><NavLink exact to="/">Home</NavLink></li>
        <li className="item"><NavLink to="/about">About</NavLink></li>
        <li className="item"><NavLink to="/about/foo">About Foo</NavLink></li>
        <li className="item"><NavLink to="/posts">Posts</NavLink></li>
      </ul>
    </div>
  );
};

export default Menu;