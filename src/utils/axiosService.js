import axios from "axios";

import {baseURL} from "../api/endpoints";

export const axiosService = axios.create({baseURL})

