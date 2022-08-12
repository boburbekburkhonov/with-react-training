import React, { useContext } from 'react';
import dataContext from '../Context/dataContext';
import Pagination from '../Pagination'

function index(props) {

  const {dataSlice} = useContext(dataContext);

  return (
    <>
      {dataSlice.map(item => {
        return <div key={item.id} className='card w-75 p-3 m-2 mx-auto'>
                {item.title}
              </div>
      })}

      <Pagination />
    </>
  );
}

export default index;