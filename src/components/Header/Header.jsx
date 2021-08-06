import { createTheme, MenuItem, TextField, ThemeProvider } from "@material-ui/core"
import "./header.css";
import categories from "../../data/Category";


const Header = ({category, setCategory, word, setWord, LightTheme}) => {
   
    //Selecting language to Display
    let langDisplay = (categories.filter(langInitials => langInitials.label === category)[0].value);


    //importing a dark theme
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightTheme ? '#000' : '#fff',
            } ,
            type: LightTheme ? "light" : "dark",
        },
    });


    //selecting language to send to the api
    const handleChange= (language) =>{

        const category = categories.filter(category => category.value === language)[0].label

        setCategory(category);
        setWord("");
    }

    return (
        <div className="header">
            <span className="title">{word ? word:"Word Hunt"}</span> {/*Title*/}
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField className="search" 
                        label="Search a Word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />

                    <TextField className="select"
                        select
                        value={langDisplay}
                        onChange={(e) => handleChange(e.target.value)}
                        label="Language"
                        >
                            {
                                categories.map( (option) => (
                                    <MenuItem  key={option.label} value={option.value}>{option.value}</MenuItem>
                                )

                                )
                            }
                    </TextField>

                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
