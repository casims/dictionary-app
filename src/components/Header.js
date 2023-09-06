import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import MenuButton from '../assets/menu_icon.svg';
import SearchButton from '../assets/search_icon.svg';

function Header() {

    const [menuExpanded, setMenuExpanded] = useState(false);

    function toggleMenu() {
        setMenuExpanded((current) => !current);
    };

    useEffect(() => {
        if (menuExpanded) {
            if (window.matchMedia('(min-width: 700px)')) {
                document.getElementById('dropdown-menu').style.height = '3.05rem';
            } else {
                document.getElementById('dropdown-menu').style.height = '10rem';
            }
        } else {
            document.getElementById('dropdown-menu').style.height = 0;
        }
    }, [menuExpanded]);

    return (
        <header>
            <nav className='desktop-nav'>
                <h1><Link to='/'>React Dictionary</Link></h1>
                    <div>
                        <NavLink to='/bookmarks'>Bookmarks</NavLink>
                        <NavLink to='/about'>About</NavLink>
                    </div>
                <button onClick={toggleMenu}>
                    <img className="menu-button" src={MenuButton} alt=''/>
                    <img className="search-button" src={SearchButton} alt=''/>
                </button>
            </nav>
            <nav className='mobile-nav' id='dropdown-menu'>
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