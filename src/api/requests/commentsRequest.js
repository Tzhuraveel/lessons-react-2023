import {axiosService} from "../../utils";
import {requestLinks} from "../endpoints";


export const commentsRequest = {
    getAllComments: () => axiosService.get(requestLinks.comments)
}