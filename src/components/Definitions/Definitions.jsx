import "./definitions.css"

const Definitions = ({word, meanings, category,LightTheme}) => {
    return (
        <div className="meanings">
            {/* audio rendering part */}
            {
                meanings[0] && word && category ==='en' &&(
                    <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} 
                            style={{backgroundColor:"#fff", borderRadius:10, width:"100%"}}
                            controls>
                        Your Browser doesn't support audio elements
                    </audio>
                )
            }


            {word==="" ? (<span className="subTitle">Start by typing a word in Search</span>
            ):(
                meanings.map( (mean) => (
                    mean.meanings.map((item) => (
                        item.definitions.map((def) => (
                            <div key={def.definition} className="singleMean" style={{backgroundColor: LightTheme ? "#3b5360" : "white", color: LightTheme ? "white" : "black"}}>

                                <b>{def.definition}</b>

                                <hr style={{backgroundColor: LightTheme ? "white" : "black", width:"100%"}}></hr>

                                {def.example && (
                                        <span>
                                            <b>Example : </b>
                                            {def.example}
                                        </span>
                                    )}
                                {def.synonyms && (
                                    <span>
                                        <b>Synonyms: </b>
                                        {def.synonyms.map((s)=>(`${s},`))}                      
                                    </span>         
                                )}
                            </div>
                        ))
                    ))
                ))
            )}
        </div>
    )
}

export default Definitions
