import axios from "axios";

const axiosInstance = axios.create({

    baseURL: "https://potterapi-fedeperin.vercel.app/en"
    
});

export default axiosInstance