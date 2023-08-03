import { APP_CREATOR, COPYRIGHT_DATE } from "../globals/Globals";

function Footer() {

    return(
        <footer>
            <p>
                &copy;{COPYRIGHT_DATE} 
                <a href="https://casims.ca/">{APP_CREATOR}</a>
            </p>
        </footer>
    );
};

export default Footer;