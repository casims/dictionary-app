// import DictDefSubSection from "./DictDefSubSection";

function DictDefSection({singleDefinition}) {

    const wordStems = singleDefinition.meta.stems;
    const wordDefinitions = singleDefinition.shortdef;

    return(
        <section>
            <h3>{singleDefinition.hwi.hw}</h3>
            <p>&#40;{singleDefinition.fl}&#41;</p>
            {singleDefinition.meta.offensive === true && <p>This word is considered offensive.</p>}
            <ul>
                {wordStems.map(singleWordStem => 
                <li>
                    <p>{singleWordStem}</p>
                </li>)}
            </ul>
            <ul>
                {wordDefinitions.map(singleWordDefinition => 
                <li>
                    <p>{singleWordDefinition}</p>
                </li>)}
            </ul>
            <h4>Etymology</h4>
            {singleDefinition.et ?
                <>
                <p>{singleDefinition.et[0][1]}</p>
                <p>{singleDefinition.et.date}</p>
                </>
            :
                <p>{singleDefinition.date}</p>
            }
        </section>
    )
};

export default DictDefSection;