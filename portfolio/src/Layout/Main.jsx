import { Outlet } from "react-router-dom";
import Navber from "../Component/Shared/NavBer/Navber";

const Main = () => {
    return (
        <div>
            <div className="sticky w-full ">


            <Navber></Navber>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;