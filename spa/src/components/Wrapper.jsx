import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';

const Wrapper = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Wrapper;