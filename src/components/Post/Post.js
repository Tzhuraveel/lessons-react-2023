
const Post = ({item}) => {


    const {userId, id, title} = item

    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <hr/>
        </div>
    );
};

export {Post};