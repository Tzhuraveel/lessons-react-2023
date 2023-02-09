import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './Cars.module.css';
import {carActions} from "../../redux/slices";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";
import {useSearchParams} from "react-router-dom";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars, prev, next} = useSelector(state => state.cars);

    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(carActions.getAllCars({page: query.get('page')}))
    }, [dispatch, query])

    return (

        <div className={css.container}>
            <div className={css.wrapper__cars}>
                <div>
                    <button disabled={!prev} onClick={() => setQuery(query => ({page:+query.get('page') - 1}))}>prev</button>
                    <button disabled={!next} onClick={() => setQuery(query => ({page:+query.get('page') + 1}))}>next</button>

                </div>
                {cars.map(value => <Car key={value.id} car={value}/>)}
            </div>
            <div>
                <CarForm/>
            </div>
        </div>
    );
};

export {Cars};