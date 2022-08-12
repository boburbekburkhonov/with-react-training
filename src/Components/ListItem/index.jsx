import React, {useContext, useState, useEffect} from 'react';
import Post from '../Post'
import Loader from '../Loader'
import dataContext from '../Context/dataContext';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';

function index(props) {

  const {id} = useParams();
  const {loader} = useContext(dataContext)
  const {setLoader} = useContext(dataContext)
  const navigate = useNavigate()

  const [data, setData] = useState([])

  async function oneData() {
    setLoader(false)
    const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const res = await req.json()

    setData(res)
    setLoader(true)
  }

  useEffect(() => {
    oneData()
  }, [])

  return (
    <div className='card bg-warning w-75 p-3 mx-auto'>
      {loader ?
        <>
        <h1>{typeof data.title === 'undefined' ? 'Ma\'lumot topilmadi' : data.title}</h1>
        <p>{typeof data.title === 'undefined' ? '' : data.title}</p>
        <button onClick={() => navigate(-1)} className='btn btn-info'>Back</button>
        </>

        :

        <Loader />
      }
    </div>
  );
}

export default index;