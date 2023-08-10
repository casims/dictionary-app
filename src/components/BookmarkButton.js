function BookmarkButton({ word, remove, handleBookmarkClick }) {

    function handleAddBookmark() {
        handleBookmarkClick(true, word);
    };

    function handleRemoveBookmark() {
        handleBookmarkClick(false, word);
    };

    return (
        <>
            {remove === false ?
            <button onClick={handleAddBookmark}>Bookmark</button> : 
            <button onClick={handleRemoveBookmark}>Remove Bookmark</button>}
        </>
    );

};

BookmarkButton.defaultProps = {
    remove: false
};

export default BookmarkButton;