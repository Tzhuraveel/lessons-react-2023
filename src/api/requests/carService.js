import {urls} from "../endpoints";
import {axiosService} from "../../utils";


const carService = {
    getAllCars: (page=1) => axiosService.get(urls.cars, {params:{page}}),
    createCar: (car) => axiosService.post(urls.cars, car),
    deleteCar: (id) => axiosService.delete(urls.carsByID(id)),
    updateCar: (id, car) => axiosService.put(urls.carsByID(id), car)
}


export {
    carService
}