import "../styles/navbar.css";
import {useHistory} from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const history = useHistory();
    const [state, updateState] = useState<number>(0);


    const getClass = (path: string) => {
        return window.location.pathname === path ? 'active' : '';
    };

    const redirect = (path: string) => {
        history.push(path);

        // for rerendering purposes
        updateState(state + 1);
    };

    return (
        <div className="navbar">
            <div className={`link-box ${getClass('/')}`} onClick={() => redirect('/')}>
                Home
            </div>
            <div className={`link-box ${getClass('/2021')}`} onClick={() => redirect('/2021')}>
                Home
            </div>
        </div>
    );
};

export default Navbar;
