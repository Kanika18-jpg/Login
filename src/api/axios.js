import axios from 'axios';

export default axios.create({
    baseURL: 'http://analyticsv.pythonanywhere.com/'
});