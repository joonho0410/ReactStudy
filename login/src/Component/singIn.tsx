import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'
import { logined } from '../store/Login'

import { asyncCheckId, asyncCheckNick } from "../store/signin";
import CheckValid from "./checkValid";


// Blob URL은 세션이 유지되는동안 임시로 파일에 대한 참조를 저장한다.
// 메모리누수를 방지하기 위해서 BlobURL을 할당해줬다면 해제를 해주는 것이 좋다.

interface FormData {
  userId: string;
  userNickname: string;
  userPassword: string;
  userPassword2: string;
  profileImg: File | null;

  checkPw: boolean;
  checkPw2: boolean;
  checkNick: boolean;
  checkId: boolean;
  checkSubmit: boolean;
}

const SignIn:React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [form, setForm] = useState<FormData>({
        userId: "",
        userNickname:"",
        userPassword: "",
        userPassword2: "",
        profileImg: null,
        checkPw: false,
        checkPw2: false,
        checkNick: false,
        checkId: false,
        checkSubmit: true,
    })

    const {userId, userNickname, userPassword, userPassword2, profileImg,
            checkPw, checkPw2, checkNick, checkId, checkSubmit,
            } = form;
    
    const asyncState = useSelector((state: RootState) => state.signIn);
    const asyncStateLogin = useSelector((state:RootState) => state.login);

    const handleCheckId = (id: string) => {
        dispatch(asyncCheckId(id));
    }

    const handleCheckNick = (nick: string) => {
        dispatch(asyncCheckNick(nick));
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let valid: boolean;
        let valid2: boolean;

        switch (e.target.name){
            case 'userId':
                handleCheckId(e.target.value);
                const nextForm3 = {
                    ...form,
                    checkId: asyncState.dataId,
                    [e.target.name]: e.target.value
                }
                setForm(nextForm3);
            break;
            case 'userNickname':
                handleCheckNick(e.target.value);
                const nextForm4 = {
                    ...form,
                    checkNick: asyncState.dataNick,
                    [e.target.name]: e.target.value
                }
                setForm(nextForm4);
                break;
            case 'userPassword':
                valid = checkPassword(e.target.value);
                valid2 = checkPassword2(e.target.value);
                const nextForm = {
                    ...form,
                    checkPw: valid,
                    checkPw2: valid2,
                    [e.target.name]: e.target.value
                }
                setForm(nextForm);
                break;
            case 'userPassword2':
                valid = checkPassword2(e.target.value);
                const nextForm2 = {
                    ...form,
                    checkPw2: valid,
                    [e.target.name]: e.target.value
                }
                setForm(nextForm2);
                break;
        }
    }

    const checkPassword = (s: string) => {
        if (s.length < 10)
            return false;
        return true;
    }
    const checkPassword2 = (s: string) => {
        if (s === userPassword)
            return true;
        return false;
    }
    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        if (file){
            const nextForm = {
                ...form,
                profileImg: file[0],
            }
            setForm(nextForm);
        }
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        if (checkPw && checkPw2 && checkNick && checkId){
            dispatch(logined());
            // navigate("/mainPage");
        }
        else{
            const nextForm = {
                ...form,
                checkSubmit: false
            };
            setForm(nextForm);
        }
    }  

    useEffect(() => {
        if (asyncStateLogin.authState && asyncStateLogin.loginState){
            navigate("/mainPage");
        }
    }, [asyncStateLogin.authState, asyncStateLogin.loginState]);

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="userId">Username:</label>
                    <input type="text" value={userId} id="userId" onChange={handleFormChange}name="userId" required/>
                    <CheckValid isValid={checkId} isLoading={asyncState.loadingId}/>
                </div>
                <div>
                    <label htmlFor="userNickname">Nickname:</label>
                    <input type="text" value={userNickname} id="userNickname" onChange={handleFormChange}name="userNickname" required/>
                    <CheckValid isValid={checkNick} isLoading={asyncState.loadingNick}/>
                </div>
                <div>
                    <label htmlFor="userPassword">Password:</label>
                    <input type="password" value={userPassword} id="userPassword" onChange={handleFormChange}name="userPassword" required/>
                    <CheckValid isValid={checkPw} isLoading={false}/>
                </div>
                <div>
                    <label htmlFor="userPassword2">PasswordCheck:</label>
                    <input type="password" value={userPassword2} id="userPassword2" onChange={handleFormChange}name="userPassword2" required/>
                    <CheckValid isValid={checkPw2} isLoading={false}/>
                </div>
                <div>
                    <label htmlFor="profileImg">ProfileImg:</label>
                    <input type="file" accept="image/*" onChange={handleImgChange}/>
                    {profileImg && <p>Selected file: {profileImg.name}</p>}
                    {profileImg && <img src={URL.createObjectURL(profileImg)} width="800" height="600"></img>}
                    {!profileImg && <img alt="Select Your Profile"></img>}
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    {!checkSubmit && <div> 폼이 완성되지 않았습니다 !! </div>}
                </div>
            </form>            
        </div>
    );
};

export default SignIn;