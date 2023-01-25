import axios from "axios";
import {baseURL} from "../configs";

const axiosServer = axios.create({baseURL})

export {
    axiosServer
}