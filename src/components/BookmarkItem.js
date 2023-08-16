import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBookmark, deleteBookmark } from "../features/bookmarks/bookmarksSlice";
import BookmarkButton from "./BookmarkButton";

function BookmarkItem({word, isBookmarked}) {

    const dispatch = useDispatch();

    function handleBookmarkClick(addToBookmarks, word) {
        if(addToBookmarks === true) {
            dispatch(addBookmark(word));
        } else {
            dispatch(deleteBookmark(word));
        };
    };

    return(
        <li>
            <Link to={`/word/${word}`}>{word}</Link>
            {isBookmarked ?
                <BookmarkButton word={word} remove={true} handleBookmarkClick={handleBookmarkClick} /> :
                <BookmarkButton word={word} handleBookmarkClick={handleBookmarkClick} />
            }
        </li>
    );
};

export default BookmarkItem;