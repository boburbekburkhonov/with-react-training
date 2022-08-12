import React, {useContext, useState} from 'react';
import dataContext from '../Context/dataContext';
import './main.css'

function index(props) {

  const {auth} = useContext(dataContext);
  const {setAuth} = useContext(dataContext);
  const {userAuth} = useContext(dataContext);
  const[userName, setUserName] = useState('')
  const[password, setPassword] = useState('')

  const params = {
    username: userName,
    password: password
  }


  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div className="col-lg-12 login-title">
                    ADMIN PANEL
                </div>

                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form>
                            <div className="form-group">
                                <label className="form-control-label">USERNAME</label>
                                <input type="text"  className="form-control"
                                value={userName} onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD</label>
                                <input type="password" className="form-control"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                </div>
                                <div className="col-lg-6 login-btm login-button">
                                    <button type="submit" className="btn btn-outline-primary"
                                    onClick={() => userAuth(params)}
                                    >LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default index;