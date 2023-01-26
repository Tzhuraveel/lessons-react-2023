import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const requestsService = {
    getTodos: () => axiosService.get(urls.todos),
    getAlbums: () => axiosService.get(urls.albums),
    getComments: () => axiosService.get(urls.comments),
    getPosts: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {
    requestsService
}