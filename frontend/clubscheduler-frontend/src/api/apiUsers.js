import axios from 'axios';
import { resolve, getAccessToken } from './apiUtils.js';

const BACKEND_DOMAIN = "http://localhost:8000"

export async function getUser(id) {
    const accessToken = getAccessToken();
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    return await resolve(axios.get(BACKEND_DOMAIN + `/api/v1/auth/users/${id}`, config).then(res => res.data));
}