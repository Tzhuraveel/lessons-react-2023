import {useReducer} from "react";

import css from './DogCat.module.css'
import {DogAndCarForm} from "../DogAndCarForm/DogAndCarForm";
import {Dog} from "../Dog/Dog";
import {Cat} from "../Cat/Cat";

const DogAndCat = () => {


    const reducer = (state, action) => {


        switch (action.type){
            case 'CAT':
                const sliceCat = state.cats.slice(-1);
                const idCat = sliceCat.length? sliceCat[0].idCat + 1: 0
                return {...state,  cats: [...state.cats, {idCat, cat: action.payload}]}
            case 'DOG':
                const sliceDog = state.dogs.slice(-1);
                const idDog = sliceDog.length? sliceDog[0].idDog + 1: 0
                return {...state, dogs: [...state.dogs, {idDog, dog: action.payload}]}
            default:
                return {...state}
        }
    }

    const initialValue = () => ({cats: [], dogs:[]})

    const [state, dispatch] = useReducer(reducer, null, initialValue);


    return (
        <div className={css.container}>
            <DogAndCarForm dispatch={dispatch}/>
            <div className={css.wrapper__list_animal}>
                <div>
                    {state.cats.map(value => <Cat key={value.idCat} item={value}/>)}
                </div>
                <div>
                    {state.dogs.map(value => <Dog key={value.idDog} item={value}/>)}
                </div>
            </div>


        </div>
    );
};

export {DogAndCat};