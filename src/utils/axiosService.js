import axios from "axios";
import {authService, baseURL} from "../api";
import {createBrowserHistory} from "history";
const history = createBrowserHistory();


const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config) => {

    if (authService.isAuthenticated()) {
        const accessToken = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

let isRefreshing = false

axiosService.interceptors.response.use((config) => {
    console.log('refresh-a')
    return config
}, async (error) => {

    const refreshToken = authService.getRefreshToken();

    if(error.response?.status === 401 && refreshToken && !isRefreshing){
        isRefreshing = true

        try{
            await authService.refresh(refreshToken)
        }catch (e){
            authService.deleteTokens()
            history.replace('/login?expSession=true')

        }

        isRefreshing = true
        return axiosService(error.config)

    }
    return Promise.reject(error)
}
)


export {
    axiosService,
    history
}