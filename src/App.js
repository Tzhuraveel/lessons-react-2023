import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequireLayout, MainLayout} from "./layouts";
import {Cars} from "./components";
import {LoginPage, RegisterPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>

                <Route element={<AuthRequireLayout/>}>
                    <Route path={'cars'} element={<Cars/>}></Route>
                </Route>

                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
