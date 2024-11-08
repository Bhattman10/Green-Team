import React, { useEffect, useState } from "react";
import { MdOutlineGroups } from "react-icons/md";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { TwitterPicker } from 'react-color'
import { getUserInfo } from "../features/auth/authSlice";
import { createClub } from "../api/apiClubs";

const ClubCreation = () => {

  const { user, userInfo } = useSelector(state => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

    useEffect(() => {
        if (!user) {
            toast.error('Please login to view clubs')
            navigate('/login')
        }
        else {
            dispatch(getUserInfo());
        }
      }, [navigate, user])

    const [formData, setFormData] = useState({
        "name": "",
        "thumbnail": null,
        "description": "",
        "background_color": "#FFFFFF",
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const clubData = {
            name,
            thumbnail,
            description,
            background_color,
            "creator": userInfo.id,
        }

        const response = createClub(clubData);
        if (response.error) {
            console.log(response.error);
        }
        else {
            console.log(response.data);
            navigate('/explore')
        }

    }

    return (
        <>
            <div className="container form_container">
                <form className="form" onSubmit={handleSubmit} >
                    <h2 className="main__title"> Create Club <MdOutlineGroups /> </h2>

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

                    <h3>Thumbnail Image</h3>
                    <input type="file"
                        id="image"
                        name="thumbnail"
                        accept="image/png, image/jpeg"
                        onChange={handleImageChange}      
                    />

                    <h3>Background Color</h3>
                    <TwitterPicker
                        color={background_color}
                        onChange={handleColorChange}>    
                    </TwitterPicker>

                    <button className="btn btn-primary" type="submit" >Create Club</button>
                </form>
            </div>
        </>
    )
}


export default ClubCreation;