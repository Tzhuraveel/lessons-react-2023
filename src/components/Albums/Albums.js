import {useEffect, useState} from "react";

import css from './Albums.module.css'
import {requestsService} from "../../services";
import {Album} from "../Album/Album";

const Albums = () => {

    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        requestsService.getAlbums().then(({data}) => setAlbums(data))
    }, [])

    return (
        <div className={css.container__albums}>
            {albums && albums.map(value => <Album key={value.id} item={value}/>)}
        </div>
    );
};

export {Albums};