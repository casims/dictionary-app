function DictDefSection({singleDefinition}) {

    const wordStems = singleDefinition.meta.stems;
    const wordDefinitions = singleDefinition.shortdef;

    return(
        <section>
            <section className="word-dict-information">
                <h3>{singleDefinition.hwi.hw}</h3>
                <p>&#40;{singleDefinition.fl}&#41;</p>
                {singleDefinition.meta.offensive === true && <p>This word is considered offensive.</p>}
            </section>
            <section className="word-dict-stems">
                <ul>
                    {wordStems.map(singleWordStem => 
                    <li>
                        <p>{singleWordStem}</p>
                    </li>)}
                </ul>
            </section>
            <section className="word-dict-definitions">
                <ul>
                    {wordDefinitions.map(singleWordDefinition => 
                    <li>
                        <p>{singleWordDefinition}</p>
                    </li>)}
                </ul>
            </section>
            <section className="word-dict-etymology">
                {singleDefinition.et && <p>{singleDefinition.et[0][1]}</p>};
                {singleDefinition.date && <p>{singleDefinition.date}</p> };
            </section>
        </section>
    )
};

export default DictDefSection;