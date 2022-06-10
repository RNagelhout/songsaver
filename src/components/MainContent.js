
import {useEffect, useState} from "react";
import List from "./List";

function MainContent() {
    const [songList, setSongList] = useState([])
    const [songId, setSongId] = useState(1)
    const [song, setSongInput] = useState({})
    
    function handleChange(e) {
        const { name, value} = e.target  
        setSongInput({
            ...song,
          [name]: value,
        })
      }

    useEffect(() => {
        setSongId(songId + 1)
        setSongInput({...song, id: songId} )
        }, [songList])  

    function handleSubmit(e) {
        e.preventDefault()
        setSongInput({id:songId, ...song})
        const oldInput = song
        const newSongList = [...songList]
        newSongList.push({...oldInput})
        setSongList(newSongList) 
      }

    return(
        <main>
            <h2>Your Favorite Songs!</h2>
            <form className="Form" >
                <label> Artist: 
                  <input name='artist' type="text" placeholder="artist" onChange={handleChange} required/>
                </label>
                <label>Title: 
                  <input name='title' type="text" placeholder="title" onChange={handleChange} required/>
                </label>
                <label>Genre: 
                  <select onChange={handleChange} type="text" name="genre" required>   
                    <option value="select">Select...</option> 
                    <option value="Pop">Pop</option> 
                    <option value="Rock">Rock</option> 
                    <option value="Trance">Trance</option> 
                    <option value="Soul">Soul</option> 
                    <option value="Punk">Punk</option> 
                  </select>
                </label>
                <label>Rating: 
                  <input name='rating' type="number" placeholder="rating" min={0} max={5} onChange={handleChange} required/>
                </label>
                <button onClick={handleSubmit}>Add Song</button>
              </form>
            <ul>
                <div className='titles'><p className='titleItem'>Artist</p><p className='titleItem'>Title</p><p className='titleItem'>Genre</p><p className='titleItem'>Rating</p> </div> 
                <List songList={songList}/>
                <div className='underBar'><p className="underBarTitle"> *2022* Nailwood Company</p> </div>
            </ul>
        </main>
    )

}

export default MainContent