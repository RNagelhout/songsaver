import Header from './components/Header';
import './App.css';
import {useState } from 'react';
import Footer from './components/Footer';


const App = () => {
    const [songId, setSongId] = useState(0)
    const [songList, setSongList] = useState([])
    const [song, setSongInput] = useState({
      id: Number(songId),
      artist: "",
      title: "",
      genre: "",
      rating: ""
    })

    function handleChange(e) {
      e.preventDefault()
      const {name, value} = e.target
      setSongInput({
        ...song,
        [name] : value
      })
    }

    function handleSubmit(e) {
      e.preventDefault()
      setSongInput({...song, id:songId})
      const newSongList = [...songList]
      newSongList.push({song})
      setSongList(newSongList) 
      console.log(songList)
      setSongId(songId + 1)
    }
    
    const list = songList.map(song => (
      <li key={song.song.id} class="listItem">
          <p className='songProp'>{song.song.artist}</p> 
          <p className='songProp'>{song.song.title}</p> 
          <p className='songProp'>{song.song.genre}</p>
          <p className='songProp'>{song.song.rating}</p> 
      </li>
    ))
    
    return (
      <div className='container'>
        <Header />
        <main>
          <form onSubmit={handleSubmit} className="Form">
            <label> Artist: 
              <input name='artist' type="text" placeholder="artist"   onChange={handleChange}/>
            </label>
            <label>Title: 
              <input name='title' type="text" placeholder="title"  onChange={handleChange}/>
            </label>
            <label>Genre: 
              <select
                onChange={handleChange}
                type="text"
                name="genre"
              >   
                <option value="select">Select...</option> 
                <option value="Pop">Pop</option> 
                <option value="Rock">Rock</option> 
                <option value="Trance">Trance</option> 
                <option value="Soul">Soul</option> 
                <option value="Punk">Punk</option> 
              </select>
            </label>
            <label>Rating: 
              <input name='rating' type="number" placeholder="rating" min={0} max={5} onChange={handleChange}/>
            </label>
            <button type='submit'>Add Song</button>
          </form>
          <h2>Your Favorite Songs!</h2>
          <ul>
            <li className='titles'><p className='titleItem'>Artist</p><p className='titleItem'>Title</p><p className='titleItem'>Genre</p><p className='titleItem'>Rating</p>   </li>
              {list}
            <li className='underBar'> </li>
          </ul>
        </main>
        <Footer />
      </div>
    );
}

 


export default App;
