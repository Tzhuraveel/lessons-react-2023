import {axiosService} from "../../utils";
import {requestLinks} from "../endpoints";


export const postsRequest = {
    getAllPosts: () => axiosService.get(requestLinks.posts)
}