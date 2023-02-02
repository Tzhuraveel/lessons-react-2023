import {useForm} from "react-hook-form";
import {useMyContext} from "../../hook";

const Register = () => {


    const {register, handleSubmit, reset} = useForm({mode:'all'});


    const {reg, user, result} = useMyContext();



    const submit = (data) => {
        reg(data)
        reset()
    }







    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'surname'} {...register('surname')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Register</button>
            </form>
        </div>
    );
};

export {Register};