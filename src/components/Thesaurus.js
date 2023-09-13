import ThesDefSection from "./ThesDefSection";

function Thesaurus({thesaurusData, activeTab}) {

    return (
        <section className={"thesaurus-section " + (activeTab === 'thes' ? "active-section" : "hidden-section")}>
            {thesaurusData.map((singleDefinition, index) => <ThesDefSection singleDefinition={singleDefinition} key={index}/>)}
        </section>
    )
};

export default Thesaurus;