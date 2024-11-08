import React, { useEffect, useState } from "react";
import { MdOutlineGroups } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { TwitterPicker } from 'react-color'
import { getUserInfo } from "../features/auth/authSlice";
import { fetchClubDetails } from "../features/clubs/clubsSlice";
import { updateClub } from "../api/apiClubs";

const ClubEdit = () => {

    const { user, userInfo } = useSelector(state => state.auth)
    const { state } = useLocation()
    const { club } = state;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(club)
        if (!user) {
            toast.error('Please login to view clubs')
            navigate('/login')
        }
        else {
            dispatch(getUserInfo());
        }
      }, [navigate, user])

    const [formData, setFormData] = useState({
        "name": club.name,
        "thumbnail": club.thumbnail,
        "description": club.description,
        "background_color": club.background_color,
    })

    const {name, thumbnail, description, background_color } = formData

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
        console.log(formData)
    }

    const handleImageChange = (e) => { 
        setFormData((prev) => ({
            ...prev,
            "thumbnail": e.target.files[0]
        })
        )
        console.log(formData)
    }

    const handleColorChange = (color, event) => {
        setFormData((prev) => ({
            ...prev,
            "background_color": color.hex
        })
        )
        console.log(formData)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const clubData = {
            name,
            description,
            background_color,
        }

        const response = updateClub(club.id, clubData);
        if (response.error) {
            console.log(response.error);
        }
        else {
            navigate(`/explore/${club.id}`)
            console.log(response.data);
        }

    }

    return (
        <>
            <div className="container form_container">
                <form className="form" onSubmit={handleUpdate} >
                    <h2 className="main__title"> Edit Club <MdOutlineGroups /> </h2>

                    <input type="text"
                        placeholder="Club Name"
                        name="name"
                        onChange={handleChange}
                        value={name}
                        required
                    />

                    <textarea type="text"
                        placeholder="Club Description (max 100 characters)"
                        name="description"
                        onChange={handleChange}
                        value={description}
                    />  

                    <h3>Background Color</h3>
                    <TwitterPicker
                        color={background_color}
                        onChange={handleColorChange}>    
                    </TwitterPicker>

                    <button className="btn btn-primary" type="submit" >Update Club Info</button>
                </form>
            </div>
        </>
    )
}


export default ClubEdit;