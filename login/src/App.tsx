import React, {MouseEventHandler} from "react";
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store/store'

import Login from './Component/login'
import Logined from './Component/logined'
import { login } from "./store/Login";


interface LoginProps {
  onLogin: () => {};
}

const App:React.FC<LoginProps> = () => {
  const loginState = useSelector((state: RootState) => state.login.loginState);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    dispatch(login());
  }

  return (
    <div>
      {loginState ? <Logined /> : <Login onLogin={handleLogin}/>}
    </div>
  );
}

export default App;
