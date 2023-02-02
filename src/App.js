import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {CommentsPage, HomePage, PostsPage, RegisterPage, UsersPage} from "./pages";
import {Required} from "./hoc";


function App() {
  return (

      <Routes>
              <Route path={'/'} element={
                  <Required>
                     <MainLayout/>
                 </Required>}>
                  <Route path={'/'} element={<HomePage/>}/>
                  <Route path={'users'} element={<UsersPage/>}/>
                  <Route path={'posts'} element={<PostsPage/>}>
                  </Route>
                  <Route path={'comments'} element={<CommentsPage/>}/>
              </Route>
              <Route path={'/register'} element={<RegisterPage/>}/>
      </Routes>

  );
}

export default App;
