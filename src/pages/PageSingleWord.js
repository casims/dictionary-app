import { APP_TITLE, API_KEY_DICTIONARY, API_KEY_THESAURUS } from '../globals/Globals';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

function PageSingleWord() {

    const { word } = useParams();

    useEffect(() => {
        document.title = `${APP_TITLE} - ${word}`;
    }, []);

    const fetchWordData = async () => {
        const resThesaurus = await fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${API_KEY_THESAURUS}`);
        const wordThesaurusData = await resThesaurus.json();
        const resDictionary = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY_DICTIONARY}`);
        const wordDictionaryData = await resDictionary.json();
        console.log(wordThesaurusData);
    };

    fetchWordData();

    return(
        <section>
        </section>
    );
};

export default PageSingleWord;