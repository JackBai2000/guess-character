import CharacterContent from "./CharacterContent";
import characters from "./CharacterInfo";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Item from '@mui/material/ListItem';
import CharactersPage from "./CharactersPage";
import banner from '../characterpagebackgroundsample.png'

const CharactersListPage = () => {
    return (
        <>
        <div className='object-fill bg-cover bg-no-repeat' style ={{backgroundImage: `url(${banner})`}}>
        <h1 className = 'font-bold text-center text-4xl text-sky-600 backdrop-blur-sm'>List of Characters</h1>
        <Grid container direction = "row">
        {characters.map(character => (
            <box>
            <Item >
                
                <Link key = {character.id}to = {`/characters/${character.mal_id}`}>
                <figure>
                <img className = 'border-double border-4 rounded-md border-indigo-600'src={character.images.jpg.image_url} width={150} length = {150}></img>
                <figcaption className = 'font-bold text-sky-600 text-md backdrop-blur-sm' >{character.name}</figcaption>
                </figure>
                </Link>
                
            </Item>
            </box>
        ))}
        </Grid>
        </div>
        </>
    );
    
}

export default CharactersListPage;