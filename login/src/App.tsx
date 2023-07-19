import React, {MouseEventHandler} from "react";
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store/store'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Login from './Component/login'
import Logined from './Component/logined'
import LoginForm from "./Component/loginForm";
import Main from "./Component/main";
import { login } from "./store/Login";


interface LoginProps {
  onLogin: () => {};
}

const App:React.FC<LoginProps> = () => {
  const authState = useSelector((state: RootState) => state.login.authState);
  const loginState = useSelector((state: RootState) => state.login.loginState);
  const loadingState = useSelector((state: RootState) => state.login.loadingLogin);
  
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    if (!(authState && loginState))
      navigate('/loginForm');
  }

  return (
    <div>
      <div>
        {(authState && loginState) ? <Logined /> : <Login onLogin={handleLogin}/>}
      </div>
      {loadingState ? <div> loading ... </div> : <div></div>}
        <Routes>
          {(authState && loginState) ? (
            <Route path="/mainPage" element={<Main/>}/>
          ) : (
            <Route path="/loginForm" element={<LoginForm/>}/>
          )}
          <Route path="/*" element={<Main/>}/>
        </Routes> 
    </div>
  );
}

export default App;
