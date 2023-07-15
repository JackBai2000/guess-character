import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import NotFoundPage from './Pages/NotFoundPage';
import NavBar from './NavBar';
import CharactersPage from './Pages/CharactersPage';
import { useEffect } from 'react';
import { useState } from 'react';
import CharactersListPage from './Pages/CharactersListPage';
import GamePage from './Pages/GamePage';

function App() {
  
  const [char, SetAnimeChar] = useState([]);
  const CharacterContent = async () =>{
    const temp = await fetch("https://api.jikan.moe/v4/characters/160603")
       .then(res => res.json());
    
    SetAnimeChar(temp)
 };
 
  useEffect(() => {    
    CharacterContent();
  },[])

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      <Routes>
      <Route path ="/" element ={<HomePage/>} />
      <Route path = "/about" element = {<AboutPage/>} />
      <Route path = "/characters" element = {<CharactersListPage/>} />
      <Route path = "/characters/:id" element = {<CharactersPage/>} />
      <Route path = "/game" element = {<GamePage/>} />
      <Route path ="*" element = {<NotFoundPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

// const response = await axios.get('http://localhost:8000/api/..../....')
// const data = response.data; 
// 