import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { APP_TITLE } from "../globals/Globals";

function PageMain() {

    useEffect(() => {
        document.title = `${APP_TITLE}`;
      }, []);

    return(
        <section className="main-search-container">
            <SearchBar/>
        </section>
    );
};

export default PageMain;