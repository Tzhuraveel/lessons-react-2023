import {Route, Routes} from "react-router-dom";
import {AlbumsPage, CommentsPage, NotFoundPage, TodosPage} from "./pages";
import {MainLayout} from "./layout";
import {PostDetails} from "./components";


function App() {
  return (
  <div>
      <Routes>
         <Route path={'/'} element={<MainLayout/>}>
             <Route path={'todos'} element={<TodosPage/>}/>
             <Route path={'albums'} element={<AlbumsPage/>}/>
             <Route path={'comments'} element={<CommentsPage/>}>
                <Route path={':id'} element={<PostDetails/>}/>
             </Route>

             <Route path={'*'} element={<NotFoundPage/>}></Route>
         </Route>
      </Routes>
  </div>
  );
}

export default App;
