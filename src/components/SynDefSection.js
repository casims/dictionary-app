import SynDefSubSection from "./SynDefSubSection";

function SynDefSection({singleDefinition}) {

    const subDefinitions = singleDefinition.def[0].sseq;

    return(
        <section>
            <h3>{singleDefinition.hwi.hw}</h3>
            <p>&#40;{singleDefinition.fl}&#41;</p>
                {subDefinitions.map(singleSubDefinition => <SynDefSubSection singleSubDefinition={singleSubDefinition} word={singleDefinition.hwi.hw}/>)}
        </section>
    )
};

export default SynDefSection;