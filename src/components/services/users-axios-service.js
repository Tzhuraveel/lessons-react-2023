import axios from "axios";

const axiosUser = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const getUsersAxios = () => {
    return axiosUser.get('/users')
}
const getUserAxios = (id) => {
    return axiosUser.get(`/users/${id}`)
}




export {
    getUsersAxios,
    getUserAxios
}
