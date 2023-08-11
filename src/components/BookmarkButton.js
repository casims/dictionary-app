function BookmarkButton({ word, remove, handleBookmarkClick }) {

    function handleAddBookmark() {
        handleBookmarkClick(true, word);
        console.log('Handle Add Bookmark');
    };

    function handleRemoveBookmark() {
        handleBookmarkClick(false, word);
        console.log('Handle Remove Bookmark');
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