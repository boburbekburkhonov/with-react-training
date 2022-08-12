import React, {useContext} from 'react';
import dataContext from '../Context/dataContext';

function index(props) {

  const {data} = useContext(dataContext)
  const {total} = useContext(dataContext);
  const {pagination} = useContext(dataContext);

  const array = []

  for(let i = 1; i <= Math.ceil(data.length / total); i++){
    array.push(i)
  }

  return (
    <div className='mt-5'>
    <ul className="pagination d-flex justify-content-center">
      <li className="disabled"><a href="#"><i className="material-icons">chevron_left</i></a></li>
      {array.map(item => {
        return <li key={item} className="waves-effect"><button onClick={() => pagination(item)} href="#">{item}</button></li>
      })}
      <li className="waves-effect"><a href="#"><i className="material-icons">chevron_right</i></a></li>
  </ul>
    </div>
  );
}

export default index;