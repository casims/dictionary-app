import DictDefSection from '../components/DictDefSection';

function Dictionary({dictionaryData, activeTab}) {

    const sectionContent = () => {
        // If theres no results from the API "search" then the array will be empty
        if (dictionaryData.length === 0 || dictionaryData[0].meta == null) {
            return <section className='content-card'><p>Sorry, but no definitions were found for this word.</p></section>;
        } else {
            return (dictionaryData.map((singleDefinition, index) => <DictDefSection singleDefinition={singleDefinition} key={index}/>));
        }
    }

    return (
        <section className={"dictionary-section " + (activeTab === 'dict' ? "active-section" : "hidden-section")}>
            {sectionContent()}
        </section>
    )
};

export default Dictionary;