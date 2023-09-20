import textParser from "../utilities/textParser";
import DOMPurify from "dompurify";

function DictDefSection({singleDefinition}) {

    const wordStems = singleDefinition.meta.stems;
    const wordDefinitions = singleDefinition.shortdef;

    if (singleDefinition.et) {
        var wordOrigin = textParser(singleDefinition.et[0][1]);
    };

    if (singleDefinition.date) {
        var wordOriginDate = textParser(singleDefinition.date, 'date');
    };

    return(
        <section className="single-word-dict-section">
            <section className="word-dict-information">
                <h3>{singleDefinition.hwi.hw}</h3>
                {singleDefinition.fl && <p>&#40;{singleDefinition.fl}&#41;</p>}
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
                {wordOrigin && <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(wordOrigin)}}></p>}
                {wordOriginDate && <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(wordOriginDate)}}></p>}
            </section>
        </section>
    )
};

export default DictDefSection;