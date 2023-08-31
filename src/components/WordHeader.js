import { useDispatch } from "react-redux";

// Utilities
import {addBookmark, deleteBookmark} from "../features/bookmarks/bookmarksSlice";

// Components
import BookmarkButton from "./BookmarkButton";

function WordHeader({ word, isBookmarked }) {

    const dispatch = useDispatch();

    function handleBookmarkClick(addToBookmarks, word) {
        if(addToBookmarks === true) {
            dispatch(addBookmark(word));
        } else {
            dispatch(deleteBookmark(word));
        };
    };

    return(
        <div className="word-header">
            <h2>{word}</h2>
            <div className='bookmark-button-wrapper'>
                {isBookmarked ?
                    <BookmarkButton word={word} remove={true} handleBookmarkClick={handleBookmarkClick} /> :
                    <BookmarkButton word={word} handleBookmarkClick={handleBookmarkClick} />
                }
            </div>
        </div>
    );
};

export default WordHeader;