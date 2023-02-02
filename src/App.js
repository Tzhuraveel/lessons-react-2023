import {Route, Routes} from "react-router-dom";


import {MainLayout} from "./layout";
import {CommentsPage, DogAndCatPage, PostsPage} from "./pages";

function App() {

  return (
         <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}/>
                <Route path={'/dog-cat'} element={<DogAndCatPage/>}/>
            </Route>
         </Routes>
  );
}

export default App;
