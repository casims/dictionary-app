import SynDefSection from "./SynDefSection";

function Synonyms({synonymData}) {

    return (
        <section className="synonyms-section">
            {synonymData.map(singleDefinition => <SynDefSection singleDefinition={singleDefinition}/>)}
        </section>
    )
};

export default Synonyms;