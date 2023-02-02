import {useRef} from "react";

const DogAndCarForm = ({dispatch}) => {

    const cat = useRef();
    const dog = useRef();







    return (
        <div>
           <span>Add Cat</span><input type="text" placeholder={'cat'} ref={cat}/>
           <button onClick={() => dispatch({type: 'CAT', payload: cat.current.value})}>Save</button>
           <span>Add Dog</span><input type="text" placeholder={'dog'} ref={dog}/>
           <button onClick={() => dispatch({type: 'DOG', payload: dog.current.value})}>Save</button>

        </div>

    );
};

export {DogAndCarForm};