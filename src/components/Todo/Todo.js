import css from './Todo.module.css'

const Todo = ({item}) => {

    const {userId, id, title, completed} = item
    return (
        <div className={css.container__todo}>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed}</div>
        </div>
    );
};

export {Todo};