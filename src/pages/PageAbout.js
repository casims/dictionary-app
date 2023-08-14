import mwlogo from "../assets/MWLogo.png";
import { APP_TITLE } from "../globals/Globals";

function PageAbout() {

    useEffect(() => {
        document.title = `${APP_TITLE} - About`;
      }, []);

    return(
        <section>
            <h2>About</h2>
            <p>This product uses the Merriam-Webster API but is not endorsed or certified by Merriam-Webster.</p>
            <p>The “React Dictionary” is an application that allows users to easily search, favorite, find definitions, find synonyms, and get other valuable information about almost any word across hundreds of thousands of entries.</p>
            <p>This application uses both the Merriam-Webster's Collegiate&reg; Dictionary API as well as Merriam-Webster's Collegiate&reg; Thesaurus API.</p>
            <img src={mwlogo} alt="Merriam-Webster company logo"/>
        </section>
    );
};

export default PageAbout;