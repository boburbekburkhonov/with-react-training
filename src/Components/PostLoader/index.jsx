import React, {useContext, useParams} from 'react';
import Post from '../Post'
import Loader from '../Loader'
import dataContext from '../Context/dataContext';

function index(props) {

  const {loader} = useContext(dataContext)

  return (
    <div>
      {loader ? <Post /> : <Loader />}
    </div>
  );
}

export default index;