import ThesDefSubSection from "./ThesDefSubSection";

function ThesDefSection({singleDefinition}) {

    const subDefinitions = singleDefinition.def[0].sseq;

    return(
        <section>
            <section className="word-thes-information">
                <h3>{singleDefinition.hwi.hw}</h3>
                <p>&#40;{singleDefinition.fl}&#41;</p>
            </section>
                {subDefinitions.map(singleSubDefinition => <ThesDefSubSection singleSubDefinition={singleSubDefinition} word={singleDefinition.hwi.hw}/>)}
        </section>
    )
};

export default ThesDefSection;