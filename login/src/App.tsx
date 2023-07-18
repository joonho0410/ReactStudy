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
  const loadingState = useSelector((state: RootState) => state.login.loading);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    dispatch(login());
  }

  return (
    <div>
      <div>
        {loginState ? <Logined /> : <Login onLogin={handleLogin}/>}
      </div>
      <div>
        {loadingState ? <div> loading ... </div> : <div></div>}
      </div>
    </div>
  );
}

export default App;
