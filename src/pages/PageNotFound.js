import { APP_TITLE } from "../globals/Globals";
import { useEffect } from "react";

function PageNotFound() {

    useEffect(() => {
        document.title = `${APP_TITLE} - ERROR`;
      }, []);

    return(
        <section className="content-card about-card">
            <h2>ERROR</h2>
            <p>Sorry, but this page was not found.</p>
        </section>
    );
};

export default PageNotFound;