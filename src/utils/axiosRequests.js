import axios from "axios";
import {baseURL} from "../api";


export const axiosRequests = axios.create({baseURL})

