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

    const [selectedTab, setSelectedTab] = useState('dict');
    useEffect(() => {
        if (selectedTab === 'dict') {
            document.getElementById('dict-button').className = 'active';
            document.getElementById('thes-button').className = '';
        } else if (selectedTab === 'thes') {
            document.getElementById('thes-button').className = 'active';
            document.getElementById('dict-button').className = '';
        }
    }, [selectedTab])

    function handleTabs(tab) {
        setSelectedTab(tab);
    };

    return(
        <>
            <WordHeader word={word} isBookmarked={isBookmarked(bookmarks, null, word)}/>
            <div>
                <button onClick={() => handleTabs('dict')} className='active' id='dict-button'>Defintions</button>
                <button onClick={() => handleTabs('thes')} className='' id='thes-button'>Synonyms</button>
            </div>
            <Dictionary dictionaryData={wordDictData} activeTab={selectedTab}/>
            <Thesaurus thesaurusData={wordThesData} activeTab={selectedTab}/>
        </>
    );
};

export default PageSingleWord;