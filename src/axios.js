import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-markethub-f6f5e.cloudfunctions.net/api' // API url or cloud function
})

export default instance

// for debug baseURL: 'http://127.0.0.1:5001/markethub-f6f5e/us-central1/api' //