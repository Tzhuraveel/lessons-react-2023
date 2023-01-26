import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import css from './Comments.module.css'
import {requestsService} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState(null);

    useEffect(() => {
        requestsService.getComments().then(({data}) => setComments(data))
    }, [])

    return (
        <div className={css.container__father}>
            <div className={css.container__comments}>
                {comments && comments.map(value => <Comment key={value.id} item={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {Comments};