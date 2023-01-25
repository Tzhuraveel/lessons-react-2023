import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {carService} from "../../service";
import {useEffect} from "react";

const CarForm = ({setCars, updateCar}) => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: "all", resolver: joiResolver(carValidator)});

    useEffect(() => {
        if(updateCar){
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }

    }, [updateCar, setValue])




    const submit = async (car) => {

       if(!!updateCar){
           const {data} = await carService.updateCar(updateCar.id, car);
           if(!!data){
               carService.getAll().then(({data}) => setCars(data))
               reset()
           }
       }else{
           const {data} = await carService.postCar(car);
           setCars(prev => [...prev, data])
           reset()
       }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && errors.brand.message}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && errors.price.message}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && errors.year.message}
            <button disabled={!isValid}>{!updateCar ? 'Create' : 'Update'}</button>
        </form>
    );
};

export {CarForm};