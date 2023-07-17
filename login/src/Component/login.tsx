import React, {MouseEventHandler} from "react";


interface LoginProps {
    onLogin: MouseEventHandler<HTMLAnchorElement>;
}

const Login: React.FC<LoginProps> = ( {onLogin} ) => {
    return (
        <div>
            <a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-03ddb50eeb7b378b07888443b0dd0fd3a983eccbd3ba3988dec1cdc994f7a472&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code"
            target='_blank'
            className='btn-gradient cyan' onClick={onLogin}>Login</a>
        </div>
    );
}

export default Login;