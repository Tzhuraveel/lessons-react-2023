

import css from './Dog.module.css'

const Dog = ({item}) => {

    const {dog} = item

    return (
        <div>
            <div className={css.dog}>{dog}</div>

        </div>
    );
};

export {Dog};