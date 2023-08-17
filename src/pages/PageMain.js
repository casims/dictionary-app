import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { APP_TITLE } from "../globals/Globals";

function PageMain() {

    useEffect(() => {
        document.title = `${APP_TITLE}`;
      }, []);

    return(
        <section>
            <SearchBar/>
        </section>
    );
};

export default PageMain;