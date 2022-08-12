import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar'
import Login from '../Login'
import Footer from '../Footer'
import Extra from '../Extra'
import List from '../List'
import JavaScript from '../JavaScript'
import Post from '../Post'
import Loader from '../Loader'
import PostLoader from '../PostLoader'
import ListItem from '../ListItem'
import Portfel from '../Portfel'
import Settings from '../Settings'
import Error from '../Error'
import '../../index.css';
import dataContext from '../Context/dataContext';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function index(props) {

    const[data, setData] = useState([]);
    const[current, setCurrent] = useState(1);
    const[total] = useState(10);
    const[loader, setLoader] = useState(false)
    const {pathname} = useLocation();
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate()

    const user = {
      username: 'admin123',
      password: '123456'
    }

    function userAuth (params) {
      user.username === params.username && user.password === params.password
       ? navigate('/home') : navigate('/')
    }

    function pagination(num) {
      setCurrent(num)
    }


    const firstIndex = current * total;
    const lastIndex = firstIndex - total;
    const dataSlice = data.slice(lastIndex, firstIndex)

    const fetchApi = async () => {
      setLoader(false)
      const req = await fetch('https://jsonplaceholder.typicode.com/posts');

      const res = await req.json()

      setData(res)
      setLoader(true)
    }


    useEffect(() => {
      fetchApi()
    }, [])


  return (

    <>
      <dataContext.Provider value={{dataSlice, data, total, setLoader, pagination, loader, auth, userAuth}}>
        {pathname === '/' ? '' : <Navbar />}
        <main className='main'>
          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/home' element={<PostLoader />} />
            <Route path='/javascript' element={<JavaScript />} />
            <Route path='/extra' element={<Extra />}>
              <Route path='/extra/portfel' element={<Portfel />}/>
              <Route path='/extra/settings' element={<Settings />}/>
            </Route>
            <Route path='/list' element={<List />}/>
            <Route path='/list/:id' element={<ListItem />} />

            <Route path='*' element={<Error />} />

          </Routes>
        </main>
        {pathname === '/' ? '' : <Footer />}
      </dataContext.Provider>
    </>
  );
}

export default index;