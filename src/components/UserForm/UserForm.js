import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators";
import {usersService} from "../../services";

const UserForm = ({setUsers}) => {


    const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm({mode: 'all', resolver: joiResolver(userValidator)})


    const submit = async (user) => {
            const {data} = await usersService.postUser(user);
            setUsers(prev => [...prev, data])
            reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && errors.name.message}
                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && errors.username.message}
                <button disabled={!isValid}>Create</button>
            </form>
        </div>
    );
};

export {UserForm};