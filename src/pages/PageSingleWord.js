import { APP_TITLE, API_KEY_DICTIONARY, API_KEY_THESAURUS } from '../globals/Globals';
import { useEffect, useState, useRef } from 'react';
import { useParams } from "react-router-dom";

//Components
import Synonyms from '../components/Synonyms';

function PageSingleWord() {

    const { word } = useParams();

    useEffect(() => {
        document.title = `${APP_TITLE} - ${word}`;
    }, []);

    const [wordThesData, setWordThesData] = useState([]);
    useEffect(() => {
        const fetchWordThesData = async () => {
            const resThesaurus = await fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${API_KEY_THESAURUS}`);
            const capturedResThesaurus = await resThesaurus.json();
            setWordThesData(capturedResThesaurus);
        };
        fetchWordThesData();
    }, [word]);

    const [wordDictData, setWordDictData] = useState([]);
    useEffect(() => {
        const fetchWordDictData = async () => {
            const resDictionary = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY_DICTIONARY}`);
            const capturedResDictionary = await resDictionary.json();
            setWordDictData(capturedResDictionary);
        };
        fetchWordDictData();
    }, [word]);
   
    return(
        <>
            <h2>{word}</h2>
            <Synonyms synonymData={wordThesData}/>
        </>
    );
};

export default PageSingleWord;