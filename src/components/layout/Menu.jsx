import './Menu.css'

import { Link } from 'react-router-dom'

function Menu() {
  return(
    <aside className='Menu'>
      <nav>
        <ul>
          <li>
          <Link to="/">Inicio</Link>
          </li>
          <li>
          <Link to="/about">Sobre</Link>
          </li>
          <li>
          <Link to="/param/abacaxi">Param #01</Link>
          </li>
          <li>
          <Link to="/param/chocolate">Param #02</Link>
          </li>
          <li>
          <Link to="/naoExiste">Não Existe</Link>
          </li>
        </ul>
      </nav>
      
     
    </aside>
  )
}

export default Menu;