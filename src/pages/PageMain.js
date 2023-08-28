import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { APP_TITLE } from "../globals/Globals";

function PageMain() {

    useEffect(() => {
        document.title = `${APP_TITLE}`;
    }, []);

    return(
        <div className="page-wrapper">
            <section className="content-card">
                <h2>Welcome</h2>
                <p>Search for a word below to find definitions and synonyms:</p>
                <section className="main-search-wrapper">
                    <SearchBar/>
                </section>
            </section>
        </div>
    );
};

export default PageMain;