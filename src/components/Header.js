import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1><Link to='/'>React Dictionary</Link></h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/favorites'>Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;