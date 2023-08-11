import { useDispatch } from "react-redux";

// Utilities
import {addBookmark, deleteBookmark} from "../features/bookmarks/bookmarksSlice";

// Components
import BookmarkButton from "./BookmarkButton";

function WordHeader({ word, bookmarkCheck }) {

    const dispatch = useDispatch();

    function handleBookmarkClick(addToBookmarks, word) {
        if(addToBookmarks === true) {
            dispatch(addBookmark(word));
            console.log('Added Bookmark');
        } else {
            dispatch(deleteBookmark(word));
            console.log('Removed Bookmark');
        };
    };

    return(
        <>
            <h2>{word}</h2>
            <div className='bookmark-button-container'>
                {bookmarkCheck ?
                    (<BookmarkButton word={word} remove={true} handleBookmarkClick={handleBookmarkClick} />) :
                    (<BookmarkButton word={word} handleBookmarkClick={handleBookmarkClick} />)
                }
            </div>
        </>
    );
};

export default WordHeader;