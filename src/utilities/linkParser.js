function linkParser(text) {

    if (text.includes('<a')) {   
        text = text.replaceAll('<a', '<a target="_blank" rel="noreferrer noopener"');
        console.log(text);
    };

    return(text);
};

export default linkParser;