import axios from 'axios';

export const getLogin = (stateLogin: string) => 
    axios.get(`https://f72bbf96-fe80-4909-b30c-1d171efbfd4f.mock.pstmn.io/${stateLogin}`)

export const postMakeId = (statusCode: string) => 
    axios.get(`https://f72bbf96-fe80-4909-b30c-1d171efbfd4f.mock.pstmn.io/${statusCode}`)