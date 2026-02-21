import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authslice'
import {Button , Logo , Input} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();  
    const [error, setError ] = useState("");
                      
    return (
        <div>login</div>
    )
}

export default Login
