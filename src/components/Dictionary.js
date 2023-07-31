import DictDefSection from '../components/DictDefSection';

function Dictionary({dictionaryData}) {

    return (
        <section className="dictionary-section">
            {dictionaryData.map(singleDefinition => <DictDefSection singleDefinition={singleDefinition}/>)}
        </section>
    )
};

export default Dictionary;