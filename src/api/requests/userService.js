import {axiosService} from "../../utils";
import {urls} from "../endpoints";

const userService = {
    create: (user) => axiosService.post(urls.users, user),

}

export {
    userService
}