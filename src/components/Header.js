import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import MenuButton from '../assets/menu_icon.svg'

function Header() {
    return (
        <header>
            <nav className='desktop-nav'>
                <h1><Link to='/'>React Dictionary</Link></h1>
                <button>
                    <img className="menu-button" src={MenuButton} alt=''/>
                </button>
            </nav>
            <nav className='mobile-nav'>
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