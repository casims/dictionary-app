import DictDefSection from '../components/DictDefSection';

function Dictionary({dictionaryData, activeTab}) {

    return (
        <section className={"dictionary-section " + (activeTab === 'dict' ? "active-section" : "hidden-section")}>
            {dictionaryData.map((singleDefinition, index) => <DictDefSection singleDefinition={singleDefinition} key={index}/>)}
        </section>
    )
};

export default Dictionary;