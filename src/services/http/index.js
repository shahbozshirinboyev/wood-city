import axios from "axios";

// token
const token = "8110745041:AAGgqllrE9mwsCkQK8mhFsiG2quMGJHkD8I";

const http = axios.create({
  baseURL: `https://api.telegram.org/bot${token}`,
});

export default http;
