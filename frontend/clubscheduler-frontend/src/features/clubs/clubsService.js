import axios from "axios"

// REPLACE WITH ENV VARIABLE
const BACKEND_DOMAIN = "http://localhost:8000"

const CLUBS_API_URL = `${BACKEND_DOMAIN}/api/v1/clubs/`


const fetchAllClubs = async (accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    const response = await axios.get(CLUBS_API_URL, config)

    return response.data
}

const fetchClubDetails = async (userData) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${userData.accessToken}`
        }
    }
    const response = await axios.get(CLUBS_API_URL + `${userData.pk}`, config)
    console.log(response.data);

    return response.data
}


const clubsService = {fetchAllClubs, fetchClubDetails}

export default clubsService
