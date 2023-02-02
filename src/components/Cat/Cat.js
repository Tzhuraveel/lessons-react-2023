import css from './Cat.module.css'


const Cat = ({item}) => {

    const {cat} = item
    return (
        <div>
            <div className={css.cat}>{cat}</div>
        </div>
    );
};

export {Cat};