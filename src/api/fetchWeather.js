import axios from 'axios';

const userListUrl = 'https://reqres.in/api/users';
const user = 'https://reqres.in/api/users/'

export const fetchUserList = async (setList) => {
    const { data } = await axios.get(userListUrl);
    setList(data?.data);
};

export const fetchUser = async (setUser, userNumber = 1) => {
    const { data } = await axios.get(`${user}${userNumber}`);
    setUser([data?.data]);
};
