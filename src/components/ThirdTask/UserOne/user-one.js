

const UserOne = ({item, setUser}) => {
    const {id, name} = item

    return (
        <div className='container__user'>
            <h4 className='user__info'>{id}) {name}</h4>
            <button onClick={() => setUser(item)}></button>
        </div>
    );
};

export {UserOne};