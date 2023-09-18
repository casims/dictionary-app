import ThesDefSection from "./ThesDefSection";

function Thesaurus({thesaurusData, activeTab}) {

    const sectionContent = () => {
        if (thesaurusData.length === 0 || thesaurusData[0].def == null) {          
            return <section className="content-card"><p>Sorry, but no synonyms were found for this word.</p></section>;
        } else {
            return (thesaurusData.map((singleDefinition, index) => <ThesDefSection singleDefinition={singleDefinition} key={index}/>));
        }
    }

    return (
        <section className={"thesaurus-section " + (activeTab === 'thes' ? "active-section" : "hidden-section")}>
            {sectionContent()}
        </section>
    )
};

export default Thesaurus;