import { APP_INFO, API_KEY_DICTIONARY, API_KEY_THESAURUS } from '../globals/Globals';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

function PageSingleWord() {

    const { word } = useParams();

    useEffect(() => {
        document.title = `${APP_INFO.title} - ${word}`;
    }, []);

    const fetchWordData = async () => {
        const resDictionary = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY_DICTIONARY}`);
        
    };

    return(
        <section>
            
        </section>
    );
};

export default PageSingleWord;