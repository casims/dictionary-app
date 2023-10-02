import { Link } from "react-router-dom";

// Utilities
import textParser from "../utilities/textParser";

function ThesDefSubSection({singleSubDefinition, word}) {

    let synonymArray = [];

    if (singleSubDefinition[0][1].syn_list) {
        synonymArray = singleSubDefinition[0][1].syn_list[0];
    };

    if (singleSubDefinition[0][1].sim_list) {
        singleSubDefinition[0][1].sim_list.forEach(simLists => 
            simLists.forEach(singleSimList =>
                synonymArray.push(singleSimList)
            )
        );
    };

    if (singleSubDefinition[0][1].dt[0][1]) {
        var singleSynonymDef = textParser(singleSubDefinition[0][1].dt[0][1]);
    };

    return(
        <section className="word-thes-synonyms">
            <p>{word} as in <span dangerouslySetInnerHTML={{__html: singleSynonymDef}}></span></p>
            <ul>
                {synonymArray.map((singleSynonym, index) => 
                    <li key={index}>
                        <Link to={`/word/${singleSynonym.wd}`}>{singleSynonym.wd}</Link>
                    </li>)}
            </ul>
        </section>
    )
};

export default ThesDefSubSection;