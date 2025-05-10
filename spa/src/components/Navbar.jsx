import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
    );
};

export default Navbar;