import {axiosServer} from "./axiosServer";
import {urls} from "../configs";


const carService = {
    getAll: () => axiosServer.get(urls.cars),
    postCar: (car) => axiosServer.post(urls.cars, car),
    updateCar: (id, data) => axiosServer.put(`${urls.cars}/${id}`, data),
    deleteCar: (id) => axiosServer.delete(`${urls.cars}/${id}`)
}
export {
    carService
}