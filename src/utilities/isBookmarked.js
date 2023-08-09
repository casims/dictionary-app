function isBookmarked(array, path, id) {

    if (path === '/bookmarks') {
        return true;
    };

    if (array.length === 0) {
        return false;
    };

    return array.some((object) => object.id === id);

};

export default isBookmarked;