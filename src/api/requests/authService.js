import {urls} from "../endpoints";
import {axiosService} from "../../utils";


const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {

    login: async function (credential) {
        console.log('a')
        const response = await axiosService.post(urls.auth.login, credential);
        console.log('c')


        if (response.status === 200) {

            this.setTokens(response.data)
        }

    },

    refresh: async function (refresh) {

        console.log('refresh-c')
        const response = await axiosService.post(urls.auth.refresh, {refresh});
        console.log('refresh-d')


        if (response.status === 200) {
            console.log('refresh-f')
            this.setTokens(response.data)
        }
    },


    me: () => axiosService.get(urls.auth.me),


    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },

    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey),

    deleteTokens: () => {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },

    isAuthenticated: () => !!localStorage.getItem(accessTokenKey)


};




    export {
    authService
}