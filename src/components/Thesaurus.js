import ThesDefSection from "./ThesDefSection";

function Thesaurus({thesaurusData}) {

    return (
        <section className="thesaurus-section">
            {thesaurusData.map((singleDefinition, index) => <ThesDefSection singleDefinition={singleDefinition} key={index}/>)}
        </section>
    )
};

export default Thesaurus;