import ThesDefSection from "./ThesDefSection";

function Thesaurus({thesaurusData}) {

    return (
        <section className="thesaurus-section">
            {thesaurusData.map(singleDefinition => <ThesDefSection singleDefinition={singleDefinition}/>)}
        </section>
    )
};

export default Thesaurus;