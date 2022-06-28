import axios from "axios";

const API = axios.create({

    baseURL: 'https://economia.awesomeapi.com.br/'

});

export default API