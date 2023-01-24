import {axiosServer} from "./axiosServer";
import {urls} from "../configs";


const usersService = {
    getAll: () => axiosServer.get(urls.users),
    getComments: () => axiosServer.get(urls.comments),
    postUser: (user) => axiosServer.post(urls.users, user),
    postComments: (comment) => axiosServer.post(urls.comments, comment)
}

export {
    usersService
}