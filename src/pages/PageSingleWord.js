import { APP_TITLE, API_KEY_DICTIONARY, API_KEY_THESAURUS } from '../globals/Globals';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//Components
import Thesaurus from '../components/Thesaurus';
import Dictionary from '../components/Dictionary';

//Utilities
import isBookmarked from '../utilities/isBookmarked';
import WordHeader from '../components/WordHeader';

function PageSingleWord() {

    const { word } = useParams();

    const bookmarks = useSelector((state) => state.bookmarks.items);

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
            <WordHeader word={word} isBookmarked={isBookmarked(bookmarks, null, word)}/>
            <Dictionary dictionaryData={wordDictData}/>
            <Thesaurus thesaurusData={wordThesData}/>
        </>
    );
};

export default PageSingleWord;