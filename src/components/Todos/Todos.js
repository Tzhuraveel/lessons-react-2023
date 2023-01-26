import {useEffect, useState} from "react";

import css from './Todos.module.css'
import {requestsService} from "../../services";
import {Todo} from "../Todo/Todo";


const Todos = () => {

    const [todos, setTodos] = useState(null);

    useEffect(() => {
        requestsService.getTodos().then(({data}) => setTodos(data))
    }, [])



    return (
        <div className={css.container__todos}>
            {todos && todos.map(value => <Todo key={value.id} item={value}/>)}
        </div>
    );
};

export {Todos};