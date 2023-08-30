import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { APP_TITLE } from "../globals/Globals";

function PageMain() {

    useEffect(() => {
        document.title = `${APP_TITLE}`;
    }, []);

    return(
        <section className="content-card main-card">
            <h2>Welcome</h2>
            <p>Search for a word below to find definitions and synonyms:</p>
            <section className="main-search-wrapper">
                <SearchBar/>
            </section>
        </section>
    );
};

export default PageMain;