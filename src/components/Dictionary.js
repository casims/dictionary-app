import DictDefSection from '../components/DictDefSection';

function Dictionary({dictionaryData}) {

    return (
        <section className="dictionary-section">
            {dictionaryData.map((singleDefinition, index) => <DictDefSection singleDefinition={singleDefinition} key={index}/>)}
        </section>
    )
};

export default Dictionary;