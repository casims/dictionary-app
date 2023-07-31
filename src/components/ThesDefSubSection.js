import { Link } from "react-router-dom";

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

    return(
        <section>
            <p>{word} as in {singleSubDefinition[0][1].dt[0][1]}</p>
            <ul>
                {synonymArray.map(singleSynonym => <li><Link to={`/${singleSynonym.wd}`}>{singleSynonym.wd}</Link></li>)}
            </ul>
        </section>
    )
};

export default ThesDefSubSection;