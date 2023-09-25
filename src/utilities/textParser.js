import DOMPurify from "dompurify";

function textParser(text, type) {

    // Function taken from https://stackoverflow.com/questions/14880229/how-to-replace-a-substring-between-two-indices
    String.prototype.replaceBetween = function(start, end, insert) {
        return this.substring(0, start) + insert + this.substring(end);
    };

    if (text.includes('*') && type === 'hw') {
        text = text.replaceAll('*', '·');
    };

    if (text.includes('{it}')) {
        text = text.replaceAll('{it}', '<i>');
        text = text.replaceAll('{/it}', '</i>');
    };

    if (text.includes('{i_link')) {
        const startIndex = text.indexOf('{i_link');
        const endIndex = text.indexOf('}', startIndex) + 1;
        const wordStartIndex = text.indexOf('|', startIndex) + 1;
        const wordEndIndex = text.indexOf('|', wordStartIndex);
        let capturedWord = text.substring(wordStartIndex, wordEndIndex);
        if (capturedWord.includes(':')) {
            const colonIndex = capturedWord.indexOf(':');
            capturedWord = capturedWord.substring(0, colonIndex);
        };
        text = text.replaceBetween(startIndex, endIndex, `<i><a href="/word/${capturedWord}">${capturedWord}</a></i>`);
    };

    if (text.includes('{et_link') && type === 'et') {
        const startIndex = text.indexOf('{et_link');
        const endIndex = text.indexOf('}', startIndex) + 1;
        const wordStartIndex = text.indexOf('|', startIndex) + 1;
        const wordEndIndex = text.indexOf('|', wordStartIndex);
        let capturedWord = text.substring(wordStartIndex, wordEndIndex);
        if (capturedWord.includes(':')) {
            const colonIndex = capturedWord.indexOf(':');
            capturedWord = capturedWord.substring(0, colonIndex);
        };
        text = text.replaceBetween(startIndex, endIndex, `<a href="/word/${capturedWord}">${capturedWord}</a>`);
    };

    if (text.includes('{dx_ety}') && type === 'et') {
        text = text.replaceAll('{dx_ety}', '—');
        text = text.replaceAll('{/dx_ety}', '');
    }

    if (text.includes('{dxt')) {
        const startIndex = text.indexOf('{dxt');
        const endIndex = text.indexOf('}', startIndex) + 1;
        const wordStartIndex = text.indexOf('|', startIndex) + 1;
        const wordEndIndex = text.indexOf('|', wordStartIndex);
        let capturedWord = text.substring(wordStartIndex, wordEndIndex);
        if (capturedWord.includes(':')) {
            const colonIndex = capturedWord.indexOf(':');
            capturedWord = capturedWord.substring(0, colonIndex);
        };
        text = text.replaceBetween(startIndex, endIndex, `<a href="/word/${capturedWord}">${capturedWord}</a>`);
    };

    if (text.includes('{ma}') && type === 'et') {
        text = text.replaceAll('{ma}', '—more at ');
        text = text.replaceAll('{/ma}', '');
    }

    if (text.includes('{mat') && type === 'et') {
        const startIndex = text.indexOf('{mat');
        const endIndex = text.indexOf('}', startIndex) + 1;
        const wordStartIndex = text.indexOf('|', startIndex) + 1;
        const wordEndIndex = text.indexOf('|', wordStartIndex);
        let capturedWord = text.substring(wordStartIndex, wordEndIndex);
        if (capturedWord.includes(':')) {
            const colonIndex = capturedWord.indexOf(':');
            capturedWord = capturedWord.substring(0, colonIndex);
        };
        text = text.replaceBetween(startIndex, endIndex, `<a href="/word/${capturedWord}">${capturedWord}</a>`);
    };

    if (text.includes('{ds') && type === 'date') {
        const partIndex = text.indexOf('{ds');
        text = text.substring(0, partIndex);
    };

    text = DOMPurify.sanitize(text);

    return(text);
};

export default textParser;