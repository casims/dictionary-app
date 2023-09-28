import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({expanded}) {

    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (searchInput === '') {
            return;
        } else {
            navigate(`/word/${searchInput}`);
        };
    };

    return(
        <form onSubmit={handleSubmit}>
            {expanded
            ?<><input type="text" placeholder="Search words..." value={searchInput} className="search-input" onChange={(e) => setSearchInput(e.target.value)}/>
            <input type="submit" value="Search" className="search-submit"/></>
            :<><input type="text" placeholder="Search words..." value={searchInput} className="search-input" tabIndex="-1" onChange={(e) => setSearchInput(e.target.value)}/>
            <input type="submit" value="Search" className="search-submit" tabIndex="-1"/></>}
        </form>
    );
};

export default SearchBar;