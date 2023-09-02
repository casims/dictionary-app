import ThesDefSubSection from "./ThesDefSubSection";

function ThesDefSection({singleDefinition}) {

    const subDefinitions = singleDefinition.def[0].sseq;

    return(
        <section className="single-word-thes-section">
            <section className="word-thes-information">
                <h3>{singleDefinition.hwi.hw}</h3>
                <p>&#40;{singleDefinition.fl}&#41;</p>
            </section>
                {subDefinitions.map((singleSubDefinition, index) => <ThesDefSubSection singleSubDefinition={singleSubDefinition} word={singleDefinition.hwi.hw} key={index}/>)}
        </section>
    )
};

export default ThesDefSection;