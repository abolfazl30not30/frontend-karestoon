import axios from "axios";
import LoginApi from "./LoginApi";

const axiosParams = {
    baseURL: 'http://localhost:8099/api/v1/'
}

const axiosInstance = axios.create(axiosParams);

const api = {
        get: async (url, config = {}) => {
            try {
                const response = await axiosInstance.get(url, {
                    ...config,
                    headers: {
                        ...config.headers,
                        'Authorization': localStorage.getItem("Authorization"),
                    }
                });
                return response
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    await LoginApi()
                    const response = await axiosInstance.get(url, {
                        ...config,
                        headers: {
                            ...config.headers,
                            'Authorization': localStorage.getItem("Authorization"),
                        }
                    });
                    return response
                } else {
                    console.log("error in main get api")
                }
            }
        },

        delete: async (url, config = {}) => {
            try {
                const response = await axiosInstance.delete(url, {
                    ...config,
                    headers: {
                        ...config.headers,
                        'Authorization': localStorage.getItem("Authorization"),
                    }
                });
                return response
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    await LoginApi()
                    const response = await axiosInstance.delete(url, {
                        ...config,
                        headers: {
                            ...config.headers,
                            'Authorization': localStorage.getItem("Authorization"),
                        }
                    });
                    return response
                } else {
                    console.log("error in main delete api")
                }
            }
        },

    post: async (url, body, config = {}) => {
        try {
            const response = await axiosInstance.post(url, body, {
                ...config,
                headers: {
                    ...config.headers,
                    'Authorization': localStorage.getItem("Authorization"),
                }
            });
            return response
        } catch (error) {
            if (error.response && error.response.status === 403) {
                await LoginApi()
                const response = await axiosInstance.post(url, body, {
                    ...config,
                    headers: {
                        ...config.headers,
                        'Authorization': localStorage.getItem("Authorization"),
                    }
                });
                return response
            } else {
                console.log("error in main post api")
            }
        }
    },

    put: async (url, body, config = {}) => {
        try {
            const response = await axiosInstance.put(url, body, {
                ...config,
                headers: {
                    ...config.headers,
                    'Authorization': localStorage.getItem("Authorization"),
                }
            });
            return response
        } catch (error) {
            if (error.response && error.response.status === 403) {
                await LoginApi()
                const response = await axiosInstance.put(url, body, {
                    ...config,
                    headers: {
                        ...config.headers,
                        'Authorization': localStorage.getItem("Authorization"),
                    }
                });
                return response
            } else {
                console.log("error in main put api")
            }
        }
    }
}

export default api;