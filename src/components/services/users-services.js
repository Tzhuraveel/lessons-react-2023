
const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json());
};

const getUserPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(result => result.json());
}

export {getUsers,getUserPost};