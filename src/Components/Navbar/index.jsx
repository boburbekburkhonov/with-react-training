import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import '../../index.css'

function index(props) {

  const navigate = useNavigate();

  return (
    <div>
    <nav className='px-3'>
    <div className="nav-wrapper">
      <NavLink to='/home' className='text-decoration-none brand-logo' href="#">Logo</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink  to='/list' className={({isActive}) => isActive ? 'active text-decoration-none' : 'text-decoration-none'} href="#">
            List
          </NavLink>
        </li>
        <li><NavLink to='/extra' className={({isActive}) => isActive ? 'active text-decoration-none' : 'text-decoration-none'} href="#">Extre</NavLink></li>
        <li><NavLink to='/JavaScript' className={({isActive}) => isActive ? 'active text-decoration-none' : 'text-decoration-none'} href="#">JavaScript</NavLink></li>

        <li>
          <button className='btn btn-primary' onClick={() => navigate('/')}>Logout</button>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  );
}

export default index;