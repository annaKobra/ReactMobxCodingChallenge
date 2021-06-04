import axios from 'axios';
const API_URL = 'https://randomuser.me/api';

class UserService {
    getUser = async () => {
        const response = await axios.get(API_URL);
        const fetchedUser = response.data.results[0];
        return fetchedUser;
    }
}

export default UserService; 

