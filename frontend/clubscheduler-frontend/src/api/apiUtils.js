import { store } from "../app/store";

async function resolve(promise) {
    const resolved = {
        data: null,
        error: null
    };

    try {
        resolved.data = await promise;
    } catch(e) {
        resolved.error = e;
    }

    return resolved;
}

function getAccessToken() {
    const user = store.getState().auth.user;
    if (user)
        return user.access;
    else
        return null;
}

export { resolve, getAccessToken };
