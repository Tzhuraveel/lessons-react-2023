import {Users} from "./components/FirstTask/Users/users";
import {SpaceX} from "./components/SecondTask/SpaceX/spaceX";
import {UsersAll} from "./components/ThirdTask/UsersAll/users-all";


const App = () => {

  return (
      <div>
          <Users/>
          <SpaceX/>
          <UsersAll/>
      </div>
  );
};

export {App};
