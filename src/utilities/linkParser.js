// Needs to be called after textParser so the a element properly opens in a new tab, dom-purify removes this
function linkParser(text) {

    if (text.includes('<a')) {   
        text = text.replaceAll('<a', '<a target="_blank" rel="noreferrer noopener"');
    };

    return(text);
};

export default linkParser;