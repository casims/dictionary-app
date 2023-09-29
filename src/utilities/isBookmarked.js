function isBookmarked(array, word) {

    if (array.length === 0) {
        return false;
    };

    return array.some((object) => object === word);

};

export default isBookmarked;