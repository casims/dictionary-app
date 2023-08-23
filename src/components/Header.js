import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
    return (
        <header>
            <h1><Link to='/'>React Dictionary</Link></h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/bookmarks'>Bookmarks</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                </ul>
                <div className='nav-search-wrapper'>
                        <SearchBar />
                </div>
            </nav>
        </header>
    )
};

export default Header;