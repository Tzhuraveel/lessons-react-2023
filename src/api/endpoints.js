const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const auth = '/auth'

const urls = {
    cars: '/cars',
    carsByID:(id) => `/cars/${id}`,

    auth:{
        login: auth,
        refresh: `${auth}/refresh`,
        me: `${auth}/me`
    },

    users: '/users'

}

export {
    baseURL, urls
}