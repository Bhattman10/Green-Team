import {toast} from 'react-toastify'

const errorHandler = (error) => {
    console.log(error);    
    
    if (error.response.status === 400) {
        const errorData = error.response.data;
        console.log(Object.keys(errorData));
        if(Object.keys(errorData).length > 0) {
            Object.keys(errorData).forEach(function(k){
                toast.error(`${k}: ${errorData[k]}`);
            });
        }
        else {
            console.log('400 from errorHandler');
            toast.error(`${error.message}`);
        }
    }
    else if (error.response.status === 401) {
        toast.error('Unauthorized. Please log in.');
    }
    else if (error.response.status === 403) {
        toast.error('Forbidden to access this content');
    }
    else if (error.response.status === 404) {
        toast.error('Resource not found');
    }
    else {
        toast.error('Something went wrong. Please try again later');
    }

}

export default errorHandler