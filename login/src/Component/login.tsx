import React, {MouseEventHandler} from "react";


interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ( {onLogin} ) => {
    return (
        <div>
            <button className='btn-gradient cyan' onClick={onLogin}>Login</button>
        </div>
    );
}

export default Login;