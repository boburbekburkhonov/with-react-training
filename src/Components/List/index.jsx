import React, {useContext} from 'react';
import Pagination from '../Pagination'
import Loader from '../Loader'
import dataContext from '../Context/dataContext';
import '../../index.css';
import { Outlet, useParams, NavLink } from 'react-router-dom';


function index(props) {

  const {loader} = useContext(dataContext)
  const {dataSlice} = useContext(dataContext)

  const id = useParams();

  return (
    <div className='list'>
        <ul>
          <li>
            {loader ?
            <>
            {dataSlice.map(item => {
            return <NavLink key={item.id} className='text-decoration-none text-dark card w-75 p-2 mx-auto' to={`/list/${item.id}`}>
              <div>{item.title}</div>
            </NavLink>
            })}
            </>

            : <Loader />
          }

          </li>
        </ul>

        <Pagination />
    </div>
  );
}

export default index;