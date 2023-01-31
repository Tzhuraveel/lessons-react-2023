import {axiosRequests} from "../../utils";
import {requestLinks} from "../endpoints";


export const postRequests = {
    getAllPost: () => axiosRequests.get(requestLinks.posts)
}
