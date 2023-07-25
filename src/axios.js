import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/markethub-f6f5e/us-central1/api' // API url or cloud function
})

export default instance