import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";
import {usersService} from "../../services";
import {commentValidator} from "../../validators";

const CommentsForm = ({setComments}) => {

    const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm({mode: 'all', resolver: joiResolver(commentValidator)})

    const submit = async (comment) => {
        const {data} = await usersService.postComments(comment);
        setComments(prev => [...prev, data])
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && errors.name.message}
                <input type="text" placeholder={'body'} {...register('body')}/>
                {errors.body && errors.body.message}
                <button disabled={!isValid}>Create</button>
            </form>
        </div>
    );
};

export {CommentsForm};