import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.telegram.org/'
  });

export default http;