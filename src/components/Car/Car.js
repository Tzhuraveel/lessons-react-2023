

import css from './Car.module.css';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices";

const Car = ({car}) => {

    const {id, brand, price, year} = car


    const dispatch = useDispatch();

    const  deleteCar = (id) => {
        dispatch(carActions.deleteCar(id))
    }

    const update =  (car) => {
         dispatch(carActions.getUpdatedCar(car))
    }


    return (
        <div className={css.container__car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => deleteCar(id)}>delete</button>
            <button onClick={() => update(car)}>update</button>
        </div>
    );
};

export {Car};