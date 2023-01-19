
const PostBuild = ({item}) => {

    const  {id, title} = item

    return (
        <div>
            <h3>{id}) {title}</h3>
        </div>
    );
};

export {PostBuild};