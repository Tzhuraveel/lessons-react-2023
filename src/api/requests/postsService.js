import {axiosService} from "../../utils/axiosService";
import {urls} from "../endpoints";

const postsService = {
    getAllPosts: () => axiosService.get(urls.posts),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`)
}
export {
    postsService
}