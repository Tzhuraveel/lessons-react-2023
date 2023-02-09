import axios from "axios";
import {createBrowserHistory} from "history";

import {authService, baseURL} from "../api";


const history = createBrowserHistory();
const axiosService = axios.create({baseURL})


axiosService.interceptors.request.use((config) => {
    console.log('b')
    if (authService.isAuthenticated()) {
        console.log('d')
        const accessToken = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})


let isRefreshing = false;


axiosService.interceptors.response.use((config) => {
        console.log('refresh-a')
    return config
},
    async (error) => {



         const refreshToken = authService.getRefreshToken();

        if(error.response?.status === 401 && refreshToken && !isRefreshing){
            isRefreshing = true
            try {
                console.log('refresh-b')
                await authService.refresh(refreshToken)
                console.log('refresh-e')
            }catch (e){
                console.log('refresh-g')
                authService.deleteTokens()
                history.replace('/login?expSession=true')
            }

            isRefreshing = false
            console.log('leave-try')
            console.log(error.config)
            return axiosService(error.config)
        }
        return Promise.reject(error)
    }
)



export {
     axiosService,
     history
}