import {axiosService} from "../../utils/axiosService";
import {urls} from "../endpoints";


const carService = {
    getAllCars: () => axiosService.get(urls.cars),
    createCar: (car) => axiosService.post(urls.cars, car),
    deleteCar: (id) => axiosService.delete(urls.carsByID(id)),
    updateCar: (id, car) => axiosService.put(urls.carsByID(id), car)
}


export {
    carService
}