import { APP_TITLE, API_KEY_DICTIONARY, API_KEY_THESAURUS } from '../globals/Globals';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//Components
import Thesaurus from '../components/Thesaurus';
import Dictionary from '../components/Dictionary';
import BookmarkButton from '../components/BookmarkButton';

//Utilities
import isBookmarked from '../utilities/isBookmarked';
import { addBookmark, deleteBookmark } from '../features/bookmarks/bookmarksSlice';

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

    function handleBookmarkClick(addToBookmarks, word) {
        if(addToBookmarks === true) {
            dispatch(addBookmark(word));
        } else {
            dispatch(deleteBookmark(word));
        };
    };

    const bookmarks = useSelector((state) => state.bookmarks.items);

    let isBookmarked = isBookmarked(bookmarks, null, word);
   
    return(
        <>
            <div className='word-header'>
                <h2>{word}</h2>
                <div className='bookmark-button-container'>
                {isBookmarked ?
                    <BookmarkButton word={word} remove={true} handleBookmarkClick={handleBookmarkClick} /> :
                    <BookmarkButton word={word} handleBookmarkClick={handleBookmarkClick} />
                }
                </div>
                <BookmarkButton />
            </div>
            <Thesaurus thesaurusData={wordThesData}/>
            <Dictionary dictionaryData={wordDictData}/>
        </>
    );
};

export default PageSingleWord;