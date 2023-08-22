import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {

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
            <input type="text" placeholder="Search words..." value={searchInput} className="search-input" onChange={(e) => setSearchInput(e.target.value)}/>
            <input type="submit" value="Submit" className="search-submit"/>
        </form>
    );
};

export default SearchBar;