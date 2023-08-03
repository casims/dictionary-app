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
            <label htmlFor="word">Search for Word:</label>
            <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>
    );
};

export default SearchBar;