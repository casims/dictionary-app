import { useState } from 'react';

import BookmarkSVG from '../assets/bookmark.svg';
import BookmarkSVGHover from '../assets/bookmark_hover.svg';
import UnBookmarkSVG from '../assets/unbookmark.svg';
import UnBookmarkSVGHover from '../assets/unbookmark_hover.svg';

function BookmarkButton({ word, remove, handleBookmarkClick }) {

    const [isHover, setIsHover] = useState();

    function handleAddBookmark() {
        handleBookmarkClick(true, word);
    };

    function handleRemoveBookmark() {
        handleBookmarkClick(false, word);
    };

    return (
        <>
            {remove === false ?
                <button onClick={handleAddBookmark}
                        onMouseOver={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        >
                    {isHover ? 
                        <img src={BookmarkSVGHover} alt=''/>
                        :
                        <img src={BookmarkSVG} alt='' className='unhovered'/>
                    }
                </button>
                :
                <button onClick={handleRemoveBookmark}
                        onMouseOver={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        >
                    {isHover ? 
                        <img src={UnBookmarkSVGHover} alt=''/>
                        :
                        <img src={UnBookmarkSVG} alt='' className='unhovered'/>
                    }
                </button>
            }
        </>
    );

};

BookmarkButton.defaultProps = {
    remove: false
};

export default BookmarkButton;