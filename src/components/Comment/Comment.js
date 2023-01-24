const Comment = ({comment}) => {
    const {id, name, body} = comment
    return (
        <div>
            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>Body: {body}</h4>
        </div>
    );
};

export {Comment};