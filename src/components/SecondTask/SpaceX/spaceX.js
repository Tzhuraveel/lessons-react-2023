import {useEffect, useState} from "react";
import {spaceData} from "../../services/spaceX-service";
import {Rocket} from "../Rocket/rocket";
import './rocket-style.css'

const SpaceX = () => {

    const [rockets,setRockets] = useState([]);

    useEffect(() => {
        spaceData().then(value => setRockets(value))
    }, [])

    let i = 0

    return (
        <div className='wrapper__rocket'>
            {
                rockets.map(rocket => <Rocket key={++i} item={rocket}/>)
            }
        </div>
    );
};

export {SpaceX};