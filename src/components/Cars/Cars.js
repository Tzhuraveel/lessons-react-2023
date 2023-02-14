import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import css from './Cars.module.css';
import {carActions} from "../../redux/slices";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

    const dispatch = useDispatch();

    const [str, setStr] = useState();

    const {cars, prev, next} = useSelector(state => state.cars);


    useEffect(() => {

        dispatch(carActions.getAllCars({page: str}))
    }, [dispatch, str])


    return (
        <div className={css.container}>
            <div>
                <button disabled={!prev} onClick={() => setStr(prev.page)}>prev</button>
                <button disabled={!next} onClick={() => setStr(next.page)}>next</button>

            </div>
            <div className={css.wrapper__cars}>
                {cars && cars.map(value => <Car key={value.id} car={value}/>)}
            </div>
            <div className={css.wrapper__carForm}>
                <CarForm/>
            </div>
        </div>
    );
};

export {Cars};