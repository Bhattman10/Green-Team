import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getUserInfo } from "../features/auth/authSlice"

export default function MyProfile() {

    const {user, userInfo} = useSelector( (state) => state.auth)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            dispatch(getUserInfo())
        }
        else {
            toast.error('Please login to view clubs')
            navigate('/login')
        }
        
    }, [navigate, dispatch, user])

    return (
        <div className="container">
             <h1>Hello, {userInfo.first_name} {userInfo.last_name} </h1>
        </div>
    )
}