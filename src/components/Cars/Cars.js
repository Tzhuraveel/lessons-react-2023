import {useEffect, useState} from "react";
import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../service";
import {Car} from "../Car/Car";

const Cars = () => {


    const [cars, setCars] = useState(null);
    const [updateCar, setUpdateCar] = useState(null)


    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

   const setDeleteCar = async (deleteCar, index) => {
        await carService.deleteCar(deleteCar.id)
        setCars(prev => {
            prev.splice(index, 1)
            return [...prev]
        })
   }



    return (
        <div>
            <CarForm setCars={setCars} updateCar={updateCar}/>
            <hr/>
            {!!cars && cars.map((value, index) => <Car key={value.id} car={value} setUpdateCar={setUpdateCar} setDeleteCar={setDeleteCar} index={index}/>)}
        </div>
    );
};

export {Cars};