// Documentation for tokens that are being targeted with this function: https://dictionaryapi.com/products/json#sec-2.tokens

// Goal of function is to parse the text and find the tokens so they can be properly formatted for the website

import DOMPurify from "dompurify";

function textParser(text, type) {

    // Function taken from https://stackoverflow.com/questions/14880229/how-to-replace-a-substring-between-two-indices
    String.prototype.replaceBetween = function(start, end, insert) {
        return this.substring(0, start) + insert + this.substring(end);
    };

    if (text.includes('*') && type === 'hw') {
        text = text.replaceAll('*', '·');
    };

    if (text.includes('{b}')) {
        text = text.replaceAll('{b}', '<b>');
        text = text.replaceAll('{/b}', '</b>');
    };

    if (text.includes('{bc}')) {
        text = text.replaceAll('{bc}', '<b>:</b> ');
    };

    if (text.includes('{inf}')) {
        text = text.replaceAll('{inf}', '<sub>');
        text = text.replaceAll('{/inf}', '</sub>');
    };

    if (text.includes('{it}')) {
        text = text.replaceAll('{it}', '<i>');
        text = text.replaceAll('{/it}', '</i>');
    };

    if (text.includes('{ldquo}')) {
        text = text.replaceAll('{ldquo}', '“');
    };

    if (text.includes('{rdquo}')) {
        text = text.replaceAll('{rdquo}', '”');
    };

    if (text.includes('{sc}')) {
        text = text.replaceAll('{sc}', '<span className="sc">');
        text = text.replaceAll('{/sc}', '</span>');
    };

    if (text.includes('{sup}')) {
        text = text.replaceAll('{sup}', '<sup>');
        text = text.replaceAll('{/sup}', '</sup>');
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