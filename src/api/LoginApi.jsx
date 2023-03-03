import axios from "axios";

const LoginApi = (body = null) => {


    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }


    return (
        axios.post("http://localhost:8099/login",
            {username: localStorage.getItem("phoneNumber"), password: body === null ? localStorage.getItem("password") : body.password}, {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Headers': ['Set-Cookie', 'Content-Type', "x-xsrf-token"],
                }
            }
        ).then((response) => {
            if (body !== null) {
                localStorage.setItem("password", body.password)
            }
            localStorage.setItem("Authorization", response.headers["authorization"])
            let json = parseJwt(localStorage.getItem("Authorization"))
            localStorage.setItem("role", json.role)
            return response
        })
    )
}

export default LoginApi;