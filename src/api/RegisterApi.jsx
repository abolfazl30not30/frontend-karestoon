import axios from "axios";

const axiosParams = {
    baseURL: 'http://localhost:8099/api/v1/register'
}

const axiosInstance = axios.create(axiosParams);


const RegisterApi = (axios) => {
    return {
        post: (url, body, config = {
            withCredentials: true,
        }) =>
            axios.post(url, body, config)
                .then((response) => {
                    return response
                }).catch((error) => {
                    return error
            })
    }

}

export default RegisterApi(axiosInstance);