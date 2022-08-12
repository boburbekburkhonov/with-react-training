import React from 'react';
import '../../index.css'
import { NavLink, Outlet } from 'react-router-dom'
import '../../index.css';

function index(props) {
  return (
    <div className='extra mx-auto'>
      <NavLink className={({isActive}) => isActive ? 'btn btn-danger' : 'btn btn-info'} to='/extra/portfel'>Portfel</NavLink>
      <NavLink className={({isActive}) => isActive ? 'btn btn-danger' : 'btn btn-info'} to='/extra/settings'>Settings</NavLink>

      <Outlet />
    </div>
  );
}

export default index;