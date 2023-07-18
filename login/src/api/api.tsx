import axios from 'axios';

export const getLogin = (stateLogin: string) => 
    axios.get(`https://e94752bd-a2ee-4a4a-add8-6ebe5a0afb0b.mock.pstmn.io/${stateLogin}`)