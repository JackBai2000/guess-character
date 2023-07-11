import CharacterContent from "./CharacterContent";
import characters from "./CharacterInfo";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Item from '@mui/material/ListItem';

const CharactersListPage = () => {
    return (
        <>
        <h1>List of Characters</h1>
        <Grid container direction = "row">
        {characters.map(character => (
            <box>
            <Item>
                
                {/* <Link key = {character.id}to = {`/characters/${character.id}`}> */}
                <figure>
                <img src={character.images.jpg.image_url} width={300} length = {300}></img>
                <figcaption style ={{fontWeight: 600, color: 'black', bold: true, justifyContent: 'bottom'}} >{character.name}</figcaption>
                </figure>
                {/* </Link> */}
                
            </Item>
            </box>
        ))}
        </Grid>
        </>
    );
    
}

export default CharactersListPage;