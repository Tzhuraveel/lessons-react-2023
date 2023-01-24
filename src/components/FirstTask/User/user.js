

const User = ({user, setUserPost}) => {
    console.log(user)

    const {id, name} = user

    return (
        <div className='container__user'>
            <h2>{id}) {name}</h2>
            <button onClick={() => setUserPost(id)}></button>
        </div>
    );
};

export {User};