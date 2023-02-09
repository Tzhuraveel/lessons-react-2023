import {Outlet} from "react-router-dom";

const AuthRequireLayout = () => {
    return (
        <div>
            <Outlet/>
            AuthRequireLayout
        </div>
    );
};

export {AuthRequireLayout};