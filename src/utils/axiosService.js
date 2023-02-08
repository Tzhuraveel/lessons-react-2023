import axios from "axios";
import {baseURL} from "../api";


export const axiosService = axios.create({baseURL})