import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kDs3fwifZzcsoiazfk707fxop-i20nx-5QtIxtMTsQA',
    }
});