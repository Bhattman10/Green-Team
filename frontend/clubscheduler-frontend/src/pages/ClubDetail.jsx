import React from 'react'
import { useParams, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spinner from "../components/Spinner"
import { fetchClubDetails } from '../features/clubs/clubsSlice';
import ClubView from '../components/Clubs/ClubView/ClubView';
import { getUserInfo } from '../features/auth/authSlice';
import { joinClub } from '../api/apiClubs';

function ClubDetail() {

    const {pk}  = useParams()
    const { user, userInfo } = useSelector(state => state.auth)
    const { currentClub, error, status } = useSelector(state => state.clubs)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleEditClub() { 
      navigate('/explore/edit/' + pk, 
      {state: {club: currentClub}})
    }


    useEffect(() => {
        if (user) {
          // get club details
          dispatch(getUserInfo())
          dispatch(fetchClubDetails(pk))
        }
        else {
          toast.error('Please login to view clubs')
          navigate('/login')
        }

        if (error) { 
            toast.error(error)
        }
    
      }, [dispatch, navigate, user, error, pk])

    return (
        <>
        {status === "loading" 
        ? 
        <Spinner /> 
        :
        <>
          {currentClub.creator === userInfo.id && (
            <div className='btn-row'>
              <button 
                className='btn btn-primary'
                onClick={handleEditClub}>
                Edit Club
              </button>
            </div>
          )}

          <ClubView club={currentClub} />
        </>
        }
        
        </>
    );
}   

export default ClubDetail