import React, { useEffect } from 'react';
import {Routes,Route, useNavigate} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, verifyRefreshToken, reset, logout } from './features/auth/authSlice';

// components, pages
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import MyCalendar from './pages/MyCalendar';
import ExploreClubs from './pages/ExploreClubs';
import ContactUs from './pages/ContactUs';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Activate from './pages/Activate';
import NotFound404 from './pages/NotFound404';
import ClubEvents from './pages/ClubEvents';
import ClubCreation from './pages/ClubCreation';
import ClubDetail from './pages/ClubDetail';
import ClubEdit from './pages/ClubEdit';

function App() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (user)
          dispatch(verifyRefreshToken())
        
        if (isError) {
          toast.error(message)
          dispatch(logout())
          dispatch(reset())
        }
        else {
          // dispatch(getUserInfo())
          // dispatch(reset())
        }
          
    }, [user, isError, dispatch, message])

  return (
    <>
      <ToastContainer />
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/calendar" element={<MyCalendar />}/>
            <Route path="/explore" element={<ExploreClubs />}/>
            <Route path="/contact" element={<ContactUs />}/>
            <Route path="/profile" element={<MyProfile />}/>
            <Route path = "/create-club" element = {<ClubCreation/>} />
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/reset-password" element={<ResetPassword />}/>
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />}/>
            <Route path="/activate/:uid/:token" element={<Activate />}/>
            <Route path="/clubevents" element={<ClubEvents />}/>
            <Route path="explore/:pk" element={<ClubDetail />}/>
            <Route path="explore/edit/:pk" element={<ClubEdit />}/>
            <Route path="*" element={<NotFound404 />}/>
          </Routes> 
    </>
      
  );
}

export default App;