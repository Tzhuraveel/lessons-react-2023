import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './Cars.module.css';
import {carActions} from "../../redux/slices";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        dispatch(carActions.getAllCars())
    }, [dispatch])


    return (
        <div className={css.container}>
            <div className={css.wrapper__cars}>
                {cars.map(value => <Car key={value.id} car={value}/>)}
            </div>
            <div className={css.wrapper__carForm}>
                <CarForm/>
            </div>
        </div>
    );
};

export {Cars};