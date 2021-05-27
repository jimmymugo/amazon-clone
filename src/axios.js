import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-ae9ff.cloudfunctions.net/api' 
    //THE API (CLOUD FUNCTION) URL
    // http://localhost:5001/clone-ae9ff/us-central1/api


});

export default instance;