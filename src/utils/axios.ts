import axios from "axios"
// import { toast } from "react-toastify"

const axiosInstance = axios.create({
    baseURL: `https://restcountries.com`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})

axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        // const res = error.message
        // toast.warn(`A request was denied with the error code ${res.status}`)
        return Promise.reject(error)
    }
)

export default axiosInstance
