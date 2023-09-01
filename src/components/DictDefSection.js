function DictDefSection({singleDefinition}) {

    const wordStems = singleDefinition.meta.stems;
    const wordDefinitions = singleDefinition.shortdef;

    return(
        <section className="single-word-dict-section">
            <section className="word-dict-information">
                <h3>{singleDefinition.hwi.hw}</h3>
                {singleDefinition.fl && <p>&#40;{singleDefinition.fl}&#41;</p>}
            </section>
            {singleDefinition.meta.offensive === true && <section className="offensive-sect"><p>This word is considered offensive.</p></section>}
            <section className="word-dict-stems">
                <p>{wordStems.join('; ')}</p>
                {/* <ul>
                    {wordStems.map((singleWordStem, index) => 
                    <li key={index}>
                        <p>{singleWordStem}</p>
                    </li>)}
                </ul> */}
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
                {singleDefinition.et && <p>{singleDefinition.et[0][1]}</p>}
                {singleDefinition.date && <p>{singleDefinition.date}</p> }
            </section>
        </section>
    )
};

export default DictDefSection;