import {useContext} from "react";
import {MyContext} from "../hoc";

export const useMyContext = () => useContext(MyContext)