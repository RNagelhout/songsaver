import {useState} from "react"
import SongForm from "./SongForm";
import List from "./List";


function MainContent() {
    const [listSongs, setListSongs] = useState([])
    
    function addSong(song) {
      const newList = [...listSongs]
      newList.push(song)
      setListSongs(newList)
    }

    function handleDelete(e){
      e.preventDefault()
      const id = e.target
      let newListSongs = [...listSongs]
      const checkId = listSongs.filter((item) => item.id !== id)
      if (checkId !== -1) {
        newListSongs.splice(id, 1)
        setListSongs(newListSongs)
      }   
    }
    
    return(
        <main>
            <SongForm addSong={addSong} />
            <h2>Your Favorite Songs!</h2>
            <List listSongs={listSongs} handleDelete={handleDelete}/>
        </main>
    )

}

export default MainContent