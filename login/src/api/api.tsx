import axios from 'axios';

export const getLogin = (stateLogin: string) => 
    axios.get(`https://f72bbf96-fe80-4909-b30c-1d171efbfd4f.mock.pstmn.io/${stateLogin}`)

export const postMakeId = (statusCode: string) => 
    axios.get(`https://f72bbf96-fe80-4909-b30c-1d171efbfd4f.mock.pstmn.io/${statusCode}`)

/* 실제로는 post 요청으로 check 해줘야합니다 */ 
export const postCheckId = (userId: string) =>
    axios.get(`https://f72bbf96-fe80-4909-b30c-1d171efbfd4f.mock.pstmn.io/checkId/successToLogin`)

/* 실제로는 post 요청으로 check 해줘야합니다 */
export const postCheckNick = (userNick: string) =>
    axios.get(`https://f72bbf96-fe80-4909-b30c-1d171efbfd4f.mock.pstmn.io/checkNick/successToLogin`)