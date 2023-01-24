const User = ({user}) => {
    const {id, name, username} = user
    return (
        <div>
            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>UserName: {username}</h4>
            <hr/>
        </div>
    );
};

export {User};