import {axiosService} from "../../utils/axiosService";
import {urls} from "../endpoints";

const usersService = {
    getAllUsers: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`)
}

export {
    usersService
}