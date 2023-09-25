import textParser from "../utilities/textParser";
import linkParser from "../utilities/linkParser";

function DictDefSection({singleDefinition}) {

    const wordHeadWord = textParser(singleDefinition.hwi.hw, 'hw');

    const wordStems = singleDefinition.meta.stems;
    const wordDefinitions = singleDefinition.shortdef;

    if (singleDefinition.fl) {
        var wordLabel = textParser(singleDefinition.fl);
        if (wordLabel.includes('<a')) {
            wordLabel = linkParser(wordLabel)
        }
        wordLabel = `(${wordLabel})`;
    };

    if (singleDefinition.et) {
        var wordOrigin = textParser(singleDefinition.et[0][1], 'et');
        if (wordOrigin.includes('<a')) {
            wordOrigin = linkParser(wordOrigin);
        }
    };

    if (singleDefinition.date) {
        var wordOriginDate = textParser(singleDefinition.date, 'date');
        if (wordOriginDate.includes('<a')) {
            wordOriginDate= linkParser(wordOriginDate);
        }
    };

    return(
        <section className="single-word-dict-section">
            <section className="word-dict-information">
                <h3>{wordHeadWord}</h3>
                {wordLabel && <p dangerouslySetInnerHTML={{__html: wordLabel}}></p>}
            </section>
            {singleDefinition.meta.offensive === true && <section className="offensive-sect"><p>This word is considered offensive.</p></section>}
            <section className="word-dict-stems">
                <p>{wordStems.join('; ')}</p>
            </section>
            <section className="word-dict-definitions">
                <ul>
                    {wordDefinitions.map((singleWordDefinition, index) => 
                    <li key={index}>
                        <p>{singleWordDefinition}</p>
                    </li>)}
                </ul>
            </section>
            <section className="word-dict-etymology">
                {wordOrigin && <p dangerouslySetInnerHTML={{__html: wordOrigin}}></p>}
                {wordOriginDate && <p dangerouslySetInnerHTML={{__html: wordOriginDate}}></p>}
            </section>
        </section>
    )
};

export default DictDefSection;