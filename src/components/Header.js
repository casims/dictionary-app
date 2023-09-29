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
            if (window.matchMedia('(min-width: 700px)').matches) {
                document.getElementById('dropdown-menu').style.height = '3.05rem';
            } else {
                document.getElementById('dropdown-menu').style.height = '10rem';
            }
        } else {
            document.getElementById('dropdown-menu').style.height = 0;
        }
    }, [menuExpanded]);

    // Collapses menu if window size changes and the menu layout changes, this prevents weird layout/visual glitches
    window.matchMedia('(min-width: 700px)').addEventListener('change', function() {
        if (menuExpanded === true) {
            setMenuExpanded(false);
        }
    })

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
                        {/* If menu isnt expanded then hidden items are made to not be tabable */}
                        {menuExpanded
                        ?<NavLink to='/bookmarks'>Bookmarks</NavLink>
                        :<NavLink to='/bookmarks' tabIndex={-1}>Bookmarks</NavLink>}
                    </li>
                    <li>
                        {menuExpanded
                        ?<NavLink to='/about'>About</NavLink>
                        :<NavLink to='/about' tabIndex={-1}>About</NavLink>}
                    </li>
                </ul>
                <div className='nav-search-wrapper'>
                        <SearchBar expanded={menuExpanded}/>
                </div>
            </nav>
        </header>
    )
};

export default Header;