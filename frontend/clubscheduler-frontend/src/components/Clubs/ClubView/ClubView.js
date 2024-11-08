import React, { useCallback, useEffect, useState } from 'react';
import { getUser } from '../../../api/apiUsers';
import './ClubView.css';
import { BsFillPersonPlusFill } from "react-icons/bs";
import Spinner from '../../Spinner';
import { useSelector } from 'react-redux';
import { joinClub } from '../../../api/apiClubs';
import { Navigate, useNavigate } from 'react-router-dom';

function addThumbnail(club) {
    if (club.thumbnail !== null) {
      return (<img src={club.thumbnail} alt={club.name + ' Logo'} className='club-image'/>)
    }
    else {
      return <BsFillPersonPlusFill className='club-image' />
    }
  }

  function addMembers(members) {
    if (members) {
        return (
            members.length !== 0 ? (
                members.map(member => (
                    <li key={member.id}>
                        {`${member.first_name} ${member.last_name}`}
                    </li>
                ))
            ) : (
                <li>
                    {"No members yet"}
                </li>
            )
        );
    }
    else {
        return (
            <li>
                {"No members yet"}
            </li>
        )
    }
    
  }
  
const ClubView = ({club}) => {

    const [creator, setCreator] = useState(null);
    const [members, setMembers] = useState(null);
    const [isLoadingCreator, setIsLoadingCreator] = useState(true);
    const [isLoadingMembers, setIsLoadingMembers] = useState(true);
    const { userInfo } = useSelector(state => state.auth)

    const navigate = useNavigate();

    const getCreator = useCallback(async (club) => { 
        if (club.creator) {
            const response = await getUser(club.creator)
            if (response.error) {
                console.log(response.error);
                setIsLoadingCreator(false);
            }
            else {
                setIsLoadingCreator(false);
                setCreator(response.data);
                console.log(response.data);
            }
        }
    }, [creator]);

    const getMembers = useCallback( async (club) => {
        try {
            if (club.members) {
                const userPromises = club.members.map(async (member) => {  
                    return getUser(member);
                });
                const userData = await Promise.all(userPromises);
                setMembers(userData.map(response => response.data));
                setIsLoadingMembers(false);
            }
        }
        catch (e) {
            setIsLoadingMembers(false);
            console.log(e);
        }
    }, [members, club])

    const handleJoinClub = (e) => { 
        e.preventDefault()
          const clubData = {
              "members": [...club.members, userInfo.id],
          }
          console.log(clubData);
    
          const response = joinClub(club.id, clubData);
          if (response.error) {
              console.log(response.error);
          }
          else {
              navigate(0);
              console.log(response.data);
          }
      }
    
      const handleLeaveClub = (e) => { 
        e.preventDefault()
            console.log(club.members.filter((member) => member !== userInfo.id));
          const clubData = {
              "members": club.members.filter((member) => member !== userInfo.id),
          }
          console.log(clubData);
    
          const response = joinClub(club.id, clubData);
          if (response.error) {
              console.log(response.error);
          }
          else {
              navigate(0);
              console.log(response.data);
          }
      }

    function checkMembership() { 
        if (members) {
            return members.some(member => member.id === userInfo.id);
        } 
      }

    useEffect(() => { 
        if (!creator)
            getCreator(club);
        if (!members)
            getMembers(club);
    }, [club, creator, members, getCreator, getMembers]);   

    if (isLoadingCreator || isLoadingMembers) {
        return <Spinner />
    }
    else return (
        
        <div className="club-details">
          { club.creator !== userInfo.id && !checkMembership() &&
             (
              <div className='btn-row'>
                <button 
                  className='btn btn-primary'
                  onClick={handleJoinClub}>
                  Join Club
                </button>
              </div>
          )}
        <h1>{club.name}</h1>
        <div className="club-logo">
            {addThumbnail(club)}
        </div>
        { creator && <div className="creator">
            <h2>{`Creator: ${creator.first_name} ${creator.last_name}`}</h2>
        </div>}
        <div className="description">
            <h2>Description:</h2>
            <p>{club.description}</p>
        </div>
        <div className="members">
            <h2>Current Members:</h2>
            <ul>
                {addMembers(members)}
            </ul>
        </div>
        {club.creator !== userInfo.id && checkMembership() && 
        (
            <div className='btn-row'>
            <button 
                className='btn btn-danger'
                onClick={handleLeaveClub}>
                Leave Club
            </button>
            </div>
        )}
    </div>
    );
  };
  
  export default ClubView;