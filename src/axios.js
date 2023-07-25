import axios from "axios";

const instance = axios.create({
    baseURL: '...' // API url or cloud function
})

export default instance