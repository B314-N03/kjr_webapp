import React, { useContext, useEffect, useState } from 'react'
import '../index.css'
import './login.css'
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import { UserContext } from './UserProvider';


function Login() {
    const [valid,setValid] = useState(false)
    const [email,setEmail] = useState("")
    const [passwort,setPasswort] = useState("")
    const [inputType,setInputType] = useState("password")
    const navigate = useNavigate()

    const {user} = useContext(UserContext)

    useEffect(() => {user && navigate("/home")},[user])

    useEffect(() => {

    },[valid])

    useEffect(() => {
        email.length > 0 && passwort.length > 0 ? setValid(true) : setValid(false)
    },[email,passwort])

    const togglePasswordVisibility = () => {
        setInputType(prevType => prevType === 'password' ? 'text' : 'password');
    };

    const login = async () => {
        await signInWithEmailAndPassword(auth, email, passwort)
        setTimeout((navigate("/home")),250)
    }

  return (
    <div className='contentFull background-image-1 col-flex justify_center align_center flex-gap-1rem'>
        <div className='fs-yourmum white'>KJR - Die Leiterrunde</div>
        <div className='col-flex flex-gap-3rem justify-center align-center loginContainer'>
            
            <div className='fs-enormous'>Login</div>
            
            <div className="col-flex flex-gap-1rem">

                <div className="col-flex flex-gap-05rem">
                    <div className="fs-big">Email</div>
                    <input type="text" name="" id="" className='input' placeholder='z.B. example@example.com' onChange={(e) => {setEmail(e.target.value)}}/>
                </div>

                <div className="col-flex flex-gap-05rem input-container">
                    <div className="fs-big">Passwort</div>
                    <input type={inputType} name=""  className='input' placeholder='z.B. Passwort1234' onChange={(e) => {setPasswort(e.target.value)}} />
                    <div className='hidePassw' onClick={togglePasswordVisibility}>
                        <i className={`fa-solid ${inputType === 'password' ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </div>
                </div>

            </div>
            <div className="row-flex justify_center" >
                <div className="button" style={valid ? {backgroundColor:"var(--blue)"} : {backgroundColor:"var(--lightgrey)"}} onClick={() => {if(valid)login() }}>Lets Go</div>
            </div>

        </div>
    </div>
  )
}

export default Login