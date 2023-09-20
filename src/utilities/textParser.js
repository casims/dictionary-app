function textParser(text, type) {

    if (text.includes('{it}')) {
        text = text.replaceAll('{it}', '<i>');
        text = text.replaceAll('{/it}', '</i>');
    };

    if (text.includes('{ds') && type === 'date') {
        const partIndex = text.indexOf('{ds');
        text = text.substring(0, partIndex);
    };

    return(text);
};

export default textParser;