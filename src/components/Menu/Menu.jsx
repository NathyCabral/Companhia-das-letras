import './menu.css'

import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
    
    <ul className='menu'>

    <img className='icone' src="https://cdn.discordapp.com/attachments/723629983414616096/1001869596220997784/pencil.png" />

      <li className='item'>
        <Link className='link' to="/">Sobre</Link>
      </li>
      <li className='item'>
        <Link  className='link'to="/Voluntarios">Voluntarios</Link>
      </li>
      <li className='item'> 
        <Link className='link' to="/Ondeencontrar">Onde encontrar?</Link>
      </li >
    
    </ul>
    </>
  );
}

export default Menu;
