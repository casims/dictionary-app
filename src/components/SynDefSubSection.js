import { Link } from "react-router-dom";

function SynDefSubSection({singleSubDefinition, word}) {

    return(
        <section>
            <p>{word} as in {singleSubDefinition[0][1].dt[0][1]}</p>
            {/* <ul>
                {singleSubDefinition[0][1].syn_list[0].map(singleSynonym = )}
            </ul> */}
        </section>
    )
};

export default SynDefSubSection;