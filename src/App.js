import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {CommentsPage, HomePage, LoginPage, PostsPage, UsersPage} from "./pages";
import {Required} from "./hoc";

function App() {
  return (
       <Routes>
         <Route path={'/'} element={<MainLayout/>}>
           <Route index element={<HomePage/>}/>
           <Route path={'users'} element={<UsersPage/>}/>
           <Route path={'posts'} element={<Required>
               <PostsPage/>
           </Required>}>

           </Route>
           <Route path={'comments'} element={<CommentsPage/>}/>
           <Route path={'/login'} element={<LoginPage/>}/>
         </Route>
       </Routes>
  );
}

export default App;
