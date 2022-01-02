import axios from "axios";

const apis = "https://api.deezer.com/";

const api = axios.create({ baseURL: apis[process.env.NODE_ENV] });


export default api;