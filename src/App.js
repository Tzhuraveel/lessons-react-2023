// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments




import {Comment, CommentsForm, User, UserForm} from "./components";
import {useEffect, useState} from "react";
import {usersService} from "./services";
import '../src/components/style.css'

function App() {

    const [users, setUsers] = useState(null);
    const [comments, setComments] = useState(null)

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [])

    useEffect(() => {
        usersService.getComments().then(({data}) => setComments(data))
    }, [])






    return (
        <div className="App">
            <div className={'userForm'}>
                <span>CREATE USER</span>
                <UserForm setUsers={setUsers}/>
            </div>
            <div className={'commentForm'}>
                <span>CREATE COMMENTS</span>
                <CommentsForm setComments={setComments}/>
            </div>
            <hr/>
            <div className={'container'}>
                <div className={'users__wrapper'}>
                    {!!users && users.map(value => <User key={value.id} user={value}/>) }
                </div>
                <div className={'comments__wrapper'}>
                    {!!comments && comments.map(value => <Comment key={value.id} comment={value}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
