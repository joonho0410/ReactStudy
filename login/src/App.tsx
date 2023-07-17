import React, {MouseEventHandler} from "react";
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { successLogin } from './store/Login'
import { RootState } from './store/store'

import Login from './Component/login'
import Logined from './Component/logined'


interface LoginProps {
  onLogin: MouseEventHandler<HTMLAnchorElement>;
}

const App:React.FC<LoginProps> = () => {
  const loginState = useSelector((state: RootState) => state.login.loginState)
  const dispatch = useDispatch()

  const handleLogin: MouseEventHandler<HTMLAnchorElement> = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    dispatch(successLogin());
  }

  return (
    <div>
      {loginState ? <Logined /> : <Login onLogin={handleLogin}/>}
    </div>
  );
}

export default App;
