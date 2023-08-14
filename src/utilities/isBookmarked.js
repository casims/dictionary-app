function isBookmarked(array, path, word) {

    if (path === '/bookmarks') {
        return true;
    };

    if (array.length === 0) {
        return false;
    };

    return array.some((object) => object === word);

};

export default isBookmarked;